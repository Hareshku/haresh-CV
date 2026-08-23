import { Award, GraduationCap, Briefcase, FlaskConical, Users, Sparkles, Mail, X, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import { profile } from "../data/cv";
import { useState } from "react";
import profilePic from "../assets/profile.jpeg";

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

function LeetcodeIcon(props) {
  return (
    <svg viewBox="0 0 94 105" width="15" height="15" {...props}>
      <path
        d="M67.5068 83.0664C70.0005 80.5764 74.0371 80.5829 76.5228 83.081C79.0085 85.579 79.002 89.6227 76.5083 92.1127L65.4351 103.17C55.2192 113.371 38.5605 113.519 28.1722 103.513C28.1122 103.456 23.4866 98.9202 8.22702 83.957C-1.92479 74.0029 -2.93616 58.0749 6.61697 47.8464L24.4287 28.7746C33.91 18.6219 51.3874 17.5123 62.228 26.279L78.4053 39.3621C81.1449 41.5777 81.5728 45.5985 79.3611 48.3429C77.1493 51.0873 73.1354 51.516 70.3958 49.3004L54.2187 36.2173C48.5493 31.6325 38.6319 32.2622 33.7398 37.5007L15.9279 56.5727C11.2772 61.5522 11.7866 69.574 17.1461 74.8292C28.3515 85.817 36.9874 94.2846 36.9974 94.2943C42.3981 99.496 51.1309 99.4185 56.4336 94.1234L67.5068 83.0664Z"
        fill="#FFA116"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.6072 72.0015C37.0862 72.0015 34.2319 69.1422 34.2319 65.6151C34.2319 62.0879 37.0862 59.2286 40.6072 59.2286H87.6249C91.1459 59.2286 94.0002 62.0879 94.0002 65.6151C94.0002 69.1422 91.1459 72.0015 87.6249 72.0015H40.6072Z"
        fill="#B3B3B3"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M49.4123 2.02335C51.8178 -0.55232 55.8521 -0.686894 58.4233 1.72277C60.9945 4.13244 61.1288 8.17385 58.7234 10.7495L15.9281 56.5729C11.2772 61.552 11.7866 69.5738 17.1458 74.8292L36.9093 94.2091C39.4254 96.6764 39.4685 100.72 37.0055 103.24C34.5425 105.761 30.5061 105.804 27.99 103.337L8.22642 83.9567C-1.9248 74.0021 -2.93616 58.0741 6.61739 47.8463L49.4123 2.02335Z"
        fill="black"
      />
    </svg>
  );
}

const NAV = [
  { path: "/achievements", label: "Achievements", icon: Award, roman: "I" },
  { path: "/education", label: "Education", icon: GraduationCap, roman: "II" },
  { path: "/experience", label: "Experience", icon: Briefcase, roman: "III" },
  { path: "/projects", label: "Projects", icon: FlaskConical, roman: "IV" },
  { path: "/teaching", label: "Teaching & Leadership", icon: Users, roman: "V" },
  { path: "/skills", label: "Skills", icon: Sparkles, roman: "VI" },
];

function ProfilePhoto({ src, alt }) {
  return (
    <div className="relative mx-auto h-40 w-40">
      <div className="absolute inset-0 rounded-full border border-brass/50" />
      <div className="absolute inset-[3px] rounded-full border-2 border-navy overflow-hidden">
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

function SocialIcon({ Icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="h-9 w-9 rounded-full border border-line flex items-center justify-center text-navy/70 hover:text-oxblood hover:border-oxblood/50 transition-colors"
    >
      <Icon size={15} strokeWidth={1.75} />
    </a>
  );
}

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const content = (
    <div className="flex h-full flex-col">
      <div className="px-7 pt-4 pb-2 text-center">
        <ProfilePhoto src={profilePic} alt={profile.name} />
        <h1 className="mt-4 font-display text-xl text-navy tracking-tight">{profile.name}</h1>
        <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-slate">{profile.title}</p>

        <div className="mt-5 flex justify-center gap-2.5">
          <SocialIcon Icon={LinkedinIcon} href={profile.linkedin} />
          <SocialIcon Icon={GithubIcon} href={profile.github} />
          <SocialIcon Icon={LeetcodeIcon} href={profile.portfolio} />
          <SocialIcon Icon={Mail} href={`mailto:${profile.email}`} />
        </div>
      </div>

      <div className="mx-7 h-px bg-line" />

      <nav className="flex-1 px-5 pt-6">
        <ul className="space-y-1">
          {NAV.map(({ path, label, icon: Icon, roman }) => (
            <li key={path}>
              <NavLink
                to={path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `group w-full flex items-center gap-3 rounded-md px-3 py-2.5 text-left text-[13.5px] transition-colors ${
                    isActive ? "bg-oxblood text-paper shadow-sm" : "text-navy/80 hover:bg-navy/[0.06]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`font-mono text-[10px] w-4 shrink-0 ${
                        isActive ? "text-paper/70" : "text-slate-light group-hover:text-brass"
                      }`}
                    >
                      {roman}
                    </span>
                    <Icon size={15} strokeWidth={1.75} className="shrink-0" />
                    <span className="font-medium">{label}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

    </div>
  );

  return (
    <>
      <div className="lg:hidden sticky top-0 z-30 flex items-center justify-between bg-paper/95 backdrop-blur border-b border-line px-4 py-3">
        <span className="font-display text-lg text-navy">{profile.name}</span>
        <button
          onClick={() => setOpen(true)}
          className="h-9 w-9 rounded-md border border-line flex items-center justify-center text-navy"
        >
          <Menu size={18} />
        </button>
      </div>

      <aside className="hidden lg:block lg:w-[280px] lg:shrink-0 lg:sticky lg:top-0 lg:h-screen border-r border-line bg-paper">
        {content}
      </aside>

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