import { SectionHeader } from "../ui";
import { teaching } from "../../data/cv";
import { Users } from "lucide-react";

export default function Teaching() {
  return (
    <div className="fade-in">
      <SectionHeader title="Teaching & Leadership" />

      <div className="relative">
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-line" />
        <div className="space-y-6">
          {teaching.map((t) => (
            <div key={t.role + t.org} className="relative pl-11">
              <div className="absolute left-0 top-0 h-8 w-8 rounded-full bg-panel border border-line flex items-center justify-center">
                <Users size={14} className="text-oxblood" strokeWidth={1.75} />
              </div>
              <div className="bg-panel border border-line rounded-lg p-5">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display text-lg text-navy">{t.role}</h3>
                    <p className="text-[13px] text-oxblood">{t.org}</p>
                  </div>
                  <span className="font-mono text-[11.5px] text-slate shrink-0">{t.period}</span>
                </div>
                <ul className="space-y-1.5">
                  {t.points.map((p, i) => (
                    <li key={i} className="flex gap-2.5 text-[13px] leading-relaxed text-slate">
                      <span className="mt-[7px] h-1 w-1 rounded-full bg-brass shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
