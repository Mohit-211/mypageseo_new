export function SceneCard({
  title,
  copy,
  children,
}: {
  title: string;
  copy: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group">
      <div className="transition-transform duration-300 group-hover:-translate-y-1">
        {children}
      </div>
      <div className="mt-5 px-1">
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <p className="mt-1 text-xs text-muted-foreground">{copy}</p>
      </div>
    </div>
  );
}
