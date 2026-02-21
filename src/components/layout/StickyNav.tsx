"use client";
import { useEffect, useState } from "react";
import UserMenu from "./UserMenu";

const sections = [
  { id: "hero", label: "Home" },
  { id: "scenarios", label: "Three Futures" },
  { id: "targeting-system", label: "Targeting System" },
  { id: "maturity-model", label: "Maturity" },
  { id: "intelligence-stack", label: "Stack" },
  { id: "vision", label: "Vision" },
  { id: "how-it-works", label: "How It Works" },
  { id: "live-dashboard", label: "Dashboard" },
  { id: "comparegpt", label: "CompareGPT" },
  { id: "guardrails", label: "Guardrails" },
  { id: "procurement", label: "Procurement" },
  { id: "join", label: "Join" },
];

export default function StickyNav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const offset = window.innerHeight * 0.3;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.getBoundingClientRect().top < offset) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 font-sans transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#hero" className="font-bold text-lg text-heading tracking-tight">
            edu.platformai.org
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {sections.slice(1, -1).map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  activeSection === s.id
                    ? "bg-accent text-white"
                    : "text-muted hover:text-foreground hover:bg-gray-100"
                }`}
              >
                {s.label}
              </a>
            ))}
            <a
              href="#join"
              className="ml-2 px-4 py-1.5 bg-cta text-white text-xs font-semibold rounded-full hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
            <div className="ml-3">
              <UserMenu />
            </div>
          </div>

          {/* Mobile auth + hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <UserMenu />
            <button
              className="p-2 text-heading"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20 px-6 lg:hidden overflow-y-auto">
          <div className="flex flex-col gap-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-medium font-sans transition-colors ${
                  activeSection === s.id ? "bg-accent text-white" : "text-foreground hover:bg-gray-50"
                }`}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
