import { SectionHeader, Pill } from "../ui";
import { education } from "../../data/cv";
import { GraduationCap, ArrowUpRight } from "lucide-react";
export default function Education() {
  return (
    <div className="fade-in">
      
<SectionHeader title="Education" icon={GraduationCap} />

      <div className="space-y-6">
        {education.map((e) => (
          <div key={e.institution} className="relative pl-8 border-l border-line">
            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-navy border-2 border-paper" />
            <div className="bg-panel border border-line rounded-lg p-6">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCap size={17} className="text-oxblood" strokeWidth={1.75} />
                    <h3 className="font-display text-xl text-navy">{e.degree}</h3>
                  </div>
                  <p className="text-[13.5px] text-slate">{e.institution}</p>
                  <p className="text-[12px] text-slate-light">{e.location}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-mono text-[12px] text-navy">{e.period}</p>
                  <p className="font-mono text-[12px] text-oxblood mt-0.5">{e.gpa}</p>
                </div>
              </div>

             {(e.link || e.thesisLink) && (
  <div className="mt-1 flex items-center gap-5">
    {e.link && (
      <a
        href={e.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group/link inline-flex items-center gap-1 text-[11.5px] font-semibold uppercase tracking-[0.1em] text-oxblood hover:text-brass transition-colors"
      >
        View Degree
        <ArrowUpRight
          size={13}
          strokeWidth={2}
          className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
        />
      </a>
    )}
    {e.thesisLink && (
      <a
        href={e.thesisLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group/link inline-flex items-center gap-1 text-[11.5px] font-semibold uppercase tracking-[0.1em] text-oxblood hover:text-brass transition-colors"
      >
        View Thesis
        <ArrowUpRight
          size={13}
          strokeWidth={2}
          className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
        />
      </a>
    )}
  </div>
)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}