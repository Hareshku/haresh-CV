import { SectionHeader } from "../ui";
import { experience } from "../../data/cv";
import { Briefcase, ArrowUpRight } from "lucide-react";

export default function Experience() {
  return (
    <div className="fade-in">
      <SectionHeader title="Experience" icon={Briefcase} />
      <div className="space-y-5">
        {experience.map((job) => (
          <div key={job.role + job.org} className="bg-panel border border-line rounded-lg p-6">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-md bg-navy/[0.06] border border-navy/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Briefcase size={15} className="text-navy" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display text-lg text-navy">{job.role}</h3>
                  <p className="text-[13.5px] text-oxblood">{job.org}</p>
                  <p className="text-[12px] text-slate-light">{job.location}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1.5 shrink-0">
                <span className="font-mono text-[12px] text-slate">{job.period}</span>
                {job.certLink && (
                  <a
                    href={job.certLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-oxblood hover:text-brass transition-colors"
                  >
                    Certificate
                    <ArrowUpRight
                      size={12}
                      strokeWidth={2}
                      className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </a>
                )}
              </div>
            </div>
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-brass mb-2.5">
              Key Contributions
            </p>
            <ul className="space-y-2 pl-1">
              {job.points.map((p, i) => (
                <li key={i} className="flex gap-2.5 text-[13.5px] leading-relaxed text-slate">
                  <span className="text-brass mt-[7px] h-1 w-1 rounded-full bg-brass shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}