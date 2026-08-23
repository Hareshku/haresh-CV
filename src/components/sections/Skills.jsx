import { SectionHeader } from "../ui";
import { skills } from "../../data/cv";
import { Code2, Blocks, Server, Wrench, Globe, Database, Sparkles } from "lucide-react";
const ICONS = {
  "Languages": Code2,
  "Frameworks & Libraries": Blocks,
  "Backend Technologies": Server,
  "Developer Tools": Wrench,
  "Web Technologies": Globe,
  "Databases & CMS": Database,
};

export default function Skills() {
  const entries = Object.entries(skills);
  return (
    <div className="fade-in">
      <SectionHeader title="Skills" icon={Sparkles} />

      <div className="grid sm:grid-cols-2 gap-4">
        {entries.map(([group, items]) => {
          const Icon = ICONS[group] || Code2;
          return (
            <div key={group} className="bg-panel border border-line rounded-lg p-5">
              <div className="flex items-center gap-2 mb-3">
                <Icon size={14} className="text-brass" strokeWidth={1.75} />
                <p className="text-[10.5px] uppercase tracking-[0.16em] text-brass">{group}</p>
              </div>
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
          );
        })}
      </div>
    </div>
  );
}