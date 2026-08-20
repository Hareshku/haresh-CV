import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Achievements from "./components/sections/Achievements";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Teaching from "./components/sections/Teaching";
import Skills from "./components/sections/Skills";

const SECTIONS = {
  achievements: Achievements,
  education: Education,
  experience: Experience,
  projects: Projects,
  teaching: Teaching,
  skills: Skills,
};

export default function App() {
  const [active, setActive] = useState("achievements");
  const Active = SECTIONS[active];

  return (
    <div className="min-h-screen bg-paper bg-laid flex flex-col lg:flex-row">
      <Sidebar active={active} onSelect={setActive} />
      <main className="flex-1 min-w-0">
        <div className="max-w-4xl mx-auto px-5 sm:px-10 py-10 sm:py-14">
          <Active />
        </div>
      </main>
    </div>
  );
}
