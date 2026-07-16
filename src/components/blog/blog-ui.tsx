export function AuthorAvatar({ initials }: { initials: string }) {
  return (
    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold">
      {initials}
    </div>
  );
}

export function CategoryBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-accent/10 text-accent text-[11px] font-semibold uppercase tracking-wider">
      {label}
    </span>
  );
}
