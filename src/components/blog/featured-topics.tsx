"use client";

import { ArrowRight } from "lucide-react";
import { categories, topics } from "./blog-data";

interface FeaturedTopicsProps {
  setCat: (value: string) => void;
  setQ: (value: string) => void;
}

export function FeaturedTopics({ setCat, setQ }: FeaturedTopicsProps) {
  return (
    <section className="py-20 md:py-24 bg-surface">
      <div className="container-page">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Featured topics</div>
          <h2 className="text-3xl md:text-4xl font-display text-foreground leading-tight">
            Browse insights by the topics that matter most.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {topics.map((topic) => (
            <button
              key={topic.t}
              onClick={() => {
                setCat(categories.includes(topic.t) ? topic.t : "All");
                setQ(topic.t);
                window.scrollTo({ top: 300, behavior: "smooth" });
              }}
              className="group text-left rounded-2xl bg-card ring-soft p-6 hover:shadow-lift hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-primary-soft flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <topic.i className="w-5 h-5" />
              </div>
              <div className="font-semibold text-foreground text-sm">{topic.t}</div>
              <div className="mt-1 text-xs text-muted-foreground flex items-center gap-1">
                Explore articles <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
