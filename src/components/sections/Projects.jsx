import { SectionHeader, Tag, Pill } from "../ui";
import { projects, competitions } from "../../data/cv";
import { FlaskConical, GraduationCap, Trophy, ArrowUpRight } from "lucide-react";

function ProjectCard({ p }) {
  return (
    <div className="bg-panel border border-line rounded-lg p-6">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
        <div>
          <Tag tone="navy">{p.type}</Tag>
          <h3 className="font-display text-lg text-navy mt-2.5">{p.title}</h3>
        </div>
        <div className="flex flex-col items-end gap-1.5 shrink-0">
          <span className="font-mono text-[12px] text-slate">{p.period}</span>
          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-oxblood hover:text-brass transition-colors"
            >
              Link
              <ArrowUpRight
                size={12}
                strokeWidth={2}
                className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              />
            </a>
          )}
        </div>
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
  );
}

export default function Projects() {
  const academic = projects.filter((p) => p.category === "academic");
  const hackathons = projects.filter((p) => p.category === "hackathon");

  return (
    <div className="fade-in">
      <SectionHeader title="Projects" icon={FlaskConical} />

      <div className="flex items-center gap-2 mb-4 mt-2">
        <GraduationCap size={16} className="text-oxblood" strokeWidth={1.75} />
        <h3 className="font-display text-xl text-navy">Academic Projects</h3>
      </div>
      <div className="space-y-5 mb-10">
        {academic.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>

      <div className="flex items-center gap-2 mb-4">
        <Trophy size={16} className="text-oxblood" strokeWidth={1.75} />
        <h3 className="font-display text-xl text-navy">International Hackathon Projects</h3>
      </div>
      <div className="space-y-5 mb-10">
        {hackathons.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </div>
  );
}