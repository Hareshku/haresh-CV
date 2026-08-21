import { SectionHeader, Tag, Pill } from "../ui";
import { projects, competitions } from "../../data/cv";

export default function Projects() {
  return (
    <div className="fade-in">
      <SectionHeader title="Projects" />

      <div className="space-y-5 mb-10">
        {projects.map((p) => (
          <div key={p.title} className="bg-panel border border-line rounded-lg p-6">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div>
                <Tag tone="navy">{p.type}</Tag>
                <h3 className="font-display text-lg text-navy mt-2.5">{p.title}</h3>
              </div>
              <span className="font-mono text-[12px] text-slate shrink-0">{p.period}</span>
            </div>

            <p className="text-[13.5px] leading-relaxed text-slate mb-3">{p.description}</p>

            <ul className="space-y-2 mb-4 pl-1">
              {p.points.map((pt, i) => (
                <li key={i} className="flex gap-2.5 text-[13px] leading-relaxed text-slate">
                  <span className="mt-[7px] h-1 w-1 rounded-full bg-oxblood shrink-0" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-3 border-t border-line">
              {p.stack.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-navy rounded-lg p-6">
        <h3 className="font-display text-lg text-paper mb-3">International Coding Competitions</h3>
        <p className="text-[13px] text-paper/70 leading-relaxed mb-4">
          Participated in international coding competitions and continue to engage in algorithmic problem-solving challenges to strengthen my competitive programming and software engineering skills.
        </p>
        <div className="flex flex-wrap gap-2">
          {competitions.map((c) => (
            <span
              key={c}
              className="inline-flex items-center rounded border border-paper/20 bg-paper/[0.06] px-2.5 py-1 text-[11px] text-paper/90"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
