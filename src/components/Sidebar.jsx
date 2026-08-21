import { Award, GraduationCap, Briefcase, FlaskConical, Users, Sparkles, Globe, Mail, X, Menu } from "lucide-react";
import { profile } from "../data/cv";
import { useState } from "react";

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.36-3.37-1.36-.46-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.04 1.53 1.04.9 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.13-4.56-5.04 0-1.11.39-2.02 1.03-2.74-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.74 0 3.92-2.34 4.78-4.57 5.03.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.2C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

const NAV = [
  { key: "achievements", label: "Achievements", icon: Award, roman: "I" },
  { key: "education", label: "Education", icon: GraduationCap, roman: "II" },
  { key: "experience", label: "Experience", icon: Briefcase, roman: "III" },
  { key: "projects", label: "Projects", icon: FlaskConical, roman: "IV" },
  { key: "teaching", label: "Teaching & Leadership", icon: Users, roman: "V" },
  { key: "skills", label: "Skills", icon: Sparkles, roman: "VI" },
];

function Initials({ name }) {
  const letter = name.trim().charAt(0).toUpperCase();
  return (
    <div className="relative mx-auto h-24 w-24">
      <div className="absolute inset-0 rounded-full border border-brass/50" />
      <div className="absolute inset-[3px] rounded-full border-2 border-navy flex items-center justify-center bg-navy">
        <span className="font-display text-3xl text-paper">{letter}</span>
      </div>
    </div>
  );
}

function SocialIcon({ Icon }) {
  return (
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      className="h-9 w-9 rounded-full border border-line flex items-center justify-center text-navy/70 hover:text-oxblood hover:border-oxblood/50 transition-colors"
    >
      <Icon size={15} strokeWidth={1.75} />
    </a>
  );
}

export default function Sidebar({ active, onSelect }) {
  const [open, setOpen] = useState(false);

  const content = (
    <div className="flex h-full flex-col">
      <div className="px-7 pt-10 pb-6 text-center">
        <Initials name={profile.name} />
        <h1 className="mt-4 font-display text-xl text-navy tracking-tight">{profile.name}</h1>
        <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-slate">{profile.title}</p>

        <div className="mt-5 flex justify-center gap-2.5">
          <SocialIcon Icon={LinkedinIcon} />
          <SocialIcon Icon={GithubIcon} />
          <SocialIcon Icon={Globe} />
          <SocialIcon Icon={Mail} />
        </div>
      </div>

      <div className="mx-7 h-px bg-line" />

      <nav className="flex-1 px-5 pt-6">
        <p className="px-2 mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-brass">
          Table of Contents
        </p>
        <ul className="space-y-1">
          {NAV.map(({ key, label, icon: Icon, roman }) => {
            const isActive = active === key;
            return (
              <li key={key}>
                <button
                  onClick={() => {
                    onSelect(key);
                    setOpen(false);
                  }}
                  className={`group w-full flex items-center gap-3 rounded-md px-3 py-2.5 text-left text-[13.5px] transition-colors ${
                    isActive
                      ? "bg-navy text-paper shadow-sm"
                      : "text-navy/80 hover:bg-navy/[0.06]"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] w-4 shrink-0 ${
                      isActive ? "text-brass" : "text-slate-light group-hover:text-brass"
                    }`}
                  >
                    {roman}
                  </span>
                  <Icon size={15} strokeWidth={1.75} className="shrink-0" />
                  <span className="font-medium">{label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="px-7 pb-7 pt-4">
        <div className="h-px bg-line mb-4" />
        <p className="text-[10.5px] text-slate-light leading-relaxed">
          {profile.location}
        </p>
        <p className="mt-1 text-[10px] text-slate-light/80">
          © 2026 · {profile.name} · Curriculum Vitae
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden sticky top-0 z-30 flex items-center justify-between bg-paper/95 backdrop-blur border-b border-line px-4 py-3">
        <span className="font-display text-lg text-navy">{profile.name}</span>
        <button
          onClick={() => setOpen(true)}
          className="h-9 w-9 rounded-md border border-line flex items-center justify-center text-navy"
        >
          <Menu size={18} />
        </button>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden lg:block lg:w-[280px] lg:shrink-0 lg:sticky lg:top-0 lg:h-screen border-r border-line bg-paper">
        {content}
      </aside>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div className="absolute inset-0 bg-navy/40" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-[82%] max-w-[300px] bg-paper shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 h-8 w-8 rounded-md border border-line flex items-center justify-center text-navy"
            >
              <X size={16} />
            </button>
            {content}
          </div>
        </div>
      )}
    </>
  );
}
