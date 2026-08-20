import { SectionHeader, StatCard, Tag } from "../ui";
import { stats, achievements, profile } from "../../data/cv";

export default function Achievements() {
  return (
    <div className="fade-in">
      {/* Hero */}
      <div className="mb-10 pb-8 border-b border-line">
        <p className="text-[11px] uppercase tracking-[0.2em] text-brass mb-3">
          Curriculum Vitae · Doctoral Application Portfolio
        </p>
        <h1 className="font-display text-[2.1rem] sm:text-[2.6rem] leading-[1.1] text-navy tracking-tight max-w-2xl">
          {profile.name}
        </h1>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate">
          {profile.tagline}
        </p>
        <p className="mt-3 font-mono text-[11px] text-oxblood">{profile.focus}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      <SectionHeader roman="I" kicker="Distinctions" title="Achievements" />

      <div className="grid sm:grid-cols-2 gap-4">
        {achievements.map((a) => (
          <div
            key={a.title}
            className="group bg-panel border border-line rounded-lg p-5 hover:border-oxblood/30 hover:shadow-[0_2px_14px_-4px_rgba(18,33,61,0.12)] transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <Tag tone="oxblood">{a.tag}</Tag>
              <span className="text-[10px] uppercase tracking-[0.14em] text-slate-light">
                {a.category}
              </span>
            </div>
            <h3 className="font-display text-lg text-navy mb-1.5">{a.title}</h3>
            <p className="text-[13.5px] leading-relaxed text-slate">{a.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
