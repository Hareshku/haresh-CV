import { SectionHeader, StatCard, Tag } from "../ui";
import { stats, achievements, profile } from "../../data/cv";
import { ArrowUpRight } from "lucide-react";

export default function Achievements() {
  return (
    <div className="fade-in">
      {/* Hero */}

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      <SectionHeader title="Achievements" />

      <div className="grid sm:grid-cols-2 gap-4">
        {achievements.map((a) => (
          <div
            key={a.title}
            className="group bg-panel border border-line rounded-lg p-5 hover:border-oxblood/30 hover:shadow-[0_2px_14px_-4px_rgba(18,33,61,0.12)] transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <Tag tone="oxblood">{a.tag}</Tag>
              <span className="relative text-[10px] font-semibold uppercase tracking-[0.14em] text-brass after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-brass after:transition-all after:duration-300 group-hover:after:w-full">
               {a.category}
               </span>
            </div>
            <h3 className="font-display text-lg text-navy mb-1.5">{a.title}</h3>
            <p className="text-[13.5px] leading-relaxed text-slate">{a.detail}</p>

            {a.link && (
              <div className="mt-3 flex justify-end">
                <a
                  href={a.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1 text-[11.5px] font-semibold uppercase tracking-[0.1em] text-oxblood hover:text-brass transition-colors"
                >
                  View
                  <ArrowUpRight
                    size={13}
                    strokeWidth={2}
                    className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
