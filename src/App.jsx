import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ScrollToTop from "./components/ScrollToTop";
import Achievements from "./components/sections/Achievements";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Teaching from "./components/sections/Teaching";
import Skills from "./components/sections/Skills";

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-paper bg-laid flex flex-col lg:flex-row">
        <Sidebar />
        <main className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-5 sm:px-10 py-10 sm:py-14">
            <Routes>
              <Route path="/" element={<Navigate to="/achievements" replace />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/education" element={<Education />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/teaching" element={<Teaching />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
          </div>
        </main>
      </div>
    </HashRouter>
  );
}