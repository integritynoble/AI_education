"use client";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      className={`back-to-top ${visible ? "visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 16V4M4 10l6-6 6 6" />
      </svg>
    </button>
  );
}
