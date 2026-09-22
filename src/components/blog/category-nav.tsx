"use client";

interface CategoryChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

function CategoryChip({ label, active, onClick }: CategoryChipProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
        active
          ? "bg-primary text-primary-foreground shadow-card"
          : "bg-card ring-soft text-foreground/70 hover:text-primary hover:-translate-y-0.5"
      }`}
    >
      {label}
    </button>
  );
}

export interface CategoryOption {
  id: string;
  title: string;
}

interface CategoryNavProps {
  categories: CategoryOption[];
  activeId: string;
  onSelect: (id: string) => void;
}

export function CategoryNav({ categories, activeId, onSelect }: CategoryNavProps) {
  return (
    <section className="py-6 border-b border-border sticky top-16 z-30 bg-background/85 backdrop-blur">
      <div className="container-page">
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-none">
          {categories.map((c) => (
            <CategoryChip key={c.id} label={c.title} active={activeId === c.id} onClick={() => onSelect(c.id)} />
          ))}
        </div>
      </div>
    </section>
  );
}
