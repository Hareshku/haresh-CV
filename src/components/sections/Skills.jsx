import { SectionHeader } from "../ui";
import { skills } from "../../data/cv";

export default function Skills() {
  const entries = Object.entries(skills);
  return (
    <div className="fade-in">
      <SectionHeader roman="VI" kicker="Technical Toolkit" title="Skills" />

      <div className="grid sm:grid-cols-2 gap-4">
        {entries.map(([group, items]) => (
          <div key={group} className="bg-panel border border-line rounded-lg p-5">
            <p className="text-[10.5px] uppercase tracking-[0.16em] text-brass mb-3">{group}</p>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-md border border-line bg-paper px-3 py-1.5 text-[12.5px] text-navy font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
