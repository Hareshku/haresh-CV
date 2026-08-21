import { SectionHeader, Pill } from "../ui";
import { education } from "../../data/cv";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <div className="fade-in">
      <SectionHeader title="Education" />

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


              <p className="text-[10.5px] uppercase tracking-[0.14em] text-slate mb-2.5">
                Relevant Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {e.coursework.map((c) => (
                  <Pill key={c}>{c}</Pill>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
