export function SectionHeader({ title, icon: Icon }) {
  return (
    <div className="mb-9">
      <div className="flex items-center gap-2.5">
        {Icon && <Icon size={22} className="text-oxblood" strokeWidth={1.75} />}
        <h2 className="font-display text-3xl sm:text-[34px] text-navy tracking-tight">{title}</h2>
      </div>
      <div className="mt-4 h-px w-full bg-gradient-to-r from-line via-line to-transparent" />
    </div>
  );
}

export function StatCard({ value, suffix, label }) {
  return (
    <div className="bg-panel border border-line rounded-lg px-5 py-5">
      <div className="font-display text-3xl text-oxblood leading-none">
        {value}
        <span className="text-[2rem] text-slate-light">{suffix}</span>
      </div>
      <div className="mt-2 text-[13px] uppercase tracking-[0.12em] text-slate">{label}</div>
    </div>
  );
}

export function Tag({ children, tone = "navy" }) {
  const tones = {
    navy: "bg-navy/[0.06] text-navy border-navy/15",
    brass: "bg-brass/10 text-brass border-brass/25",
    oxblood: "bg-oxblood/[0.07] text-oxblood border-oxblood/20",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10.5px] font-medium tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded border border-line bg-paper px-2 py-0.5 font-mono text-[10.5px] text-slate">
      {children}
    </span>
  );
}
