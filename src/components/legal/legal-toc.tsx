'use client';

import { useEffect, useMemo, useRef, useState, type MouseEvent } from 'react';
import {
	MobileToc,
	TableOfContents,
	useActiveSection,
} from '@/components/blog/article/table-of-contents';

type TocSection = { id: string; title: string };

/** Interactions that mean the user is scrolling the page themselves. */
const USER_SCROLL_EVENTS = ['wheel', 'touchmove', 'keydown'] as const;

export function LegalToc({ sections }: { sections: TocSection[] }) {
	const ids = useMemo(() => sections.map((s) => s.id), [sections]);
	const observed = useActiveSection(ids);

	// When a TOC link is clicked, pin the highlight to it. Otherwise the smooth
	// scroll to the target "passes through" every section in between, and the
	// highlight (and the sidebar auto-scroll below) would chase each one.
	const [clicked, setClicked] = useState<string | null>(null);
	const active = clicked ?? observed;
	const scroller = useRef<HTMLDivElement>(null);

	// Release the pin as soon as the user scrolls the page on their own.
	useEffect(() => {
		if (!clicked) return;
		const release = (e: Event) => {
			// Ignore scrolls that happen inside the sidebar itself.
			if (
				e.target instanceof Node &&
				scroller.current?.contains(e.target)
			)
				return;
			setClicked(null);
		};
		USER_SCROLL_EVENTS.forEach((ev) =>
			window.addEventListener(ev, release, { passive: true }),
		);
		return () =>
			USER_SCROLL_EVENTS.forEach((ev) =>
				window.removeEventListener(ev, release),
			);
	}, [clicked]);

	const onTocClick = (e: MouseEvent) => {
		const link = (e.target as HTMLElement).closest<HTMLAnchorElement>(
			'a[href^="#"]',
		);
		const id = link?.getAttribute('href')?.slice(1);
		if (id && ids.includes(id)) setClicked(id);
	};

	// Long documents overflow the sticky sidebar — keep the active link in view
	// when it changes because the user scrolled the page (not on clicks: the
	// clicked link is already visible, so this is a no-op then).
	useEffect(() => {
		const box = scroller.current;
		const link = box?.querySelector<HTMLElement>(`a[href="#${active}"]`);
		if (!box || !link) return;
		const boxRect = box.getBoundingClientRect();
		const linkRect = link.getBoundingClientRect();
		if (linkRect.top < boxRect.top || linkRect.bottom > boxRect.bottom) {
			box.scrollTo({
				top:
					box.scrollTop +
					(linkRect.top - boxRect.top) -
					box.clientHeight / 3,
				behavior: 'smooth',
			});
		}
	}, [active]);

	return (
		<>
			<div className="lg:hidden" onClickCapture={onTocClick}>
				<MobileToc sections={sections} active={active} />
			</div>
			<aside className="hidden lg:block">
				<div
					ref={scroller}
					onClickCapture={onTocClick}
					className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto overscroll-contain pr-2"
				>
					<TableOfContents sections={sections} active={active} />
				</div>
			</aside>
		</>
	);
}
