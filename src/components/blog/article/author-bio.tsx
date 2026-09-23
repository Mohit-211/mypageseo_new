import { User } from "lucide-react";

interface AuthorBioProps {
  author: string;
  position?: string;
}

export function AuthorBio({ author, position }: AuthorBioProps) {
  return (
    <section className="py-16 bg-surface">
      <div className="container-page max-w-4xl">
        <div className="rounded-3xl bg-card ring-soft p-8 flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0">
            <User className="w-7 h-7 text-primary-foreground" />
          </div>
          <div>
            <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Written by</div>
            <h3 className="text-xl font-display text-foreground">{author}</h3>
            {position && <p className="mt-1 text-sm text-muted-foreground">{position}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
