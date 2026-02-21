"use client";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

export default function UserMenu() {
  const { user, isAuthenticated, isLoading, login, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (isLoading) {
    return <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse" />;
  }

  if (!isAuthenticated || !user) {
    return (
      <button
        onClick={login}
        className="font-sans text-xs font-semibold px-4 py-1.5 border-2 border-heading text-heading rounded-full hover:bg-heading hover:text-white transition-colors"
      >
        Login
      </button>
    );
  }

  const initials = (user.user_info.user_name || "U").slice(0, 2).toUpperCase();

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-sans text-xs font-bold">
          {initials}
        </div>
        <span className="font-sans text-sm font-medium text-heading hidden sm:inline max-w-[120px] truncate">
          {user.user_info.user_name}
        </span>
        <svg className={`w-3.5 h-3.5 text-muted transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-border py-2 z-50">
          <div className="px-4 py-3 border-b border-border">
            <div className="font-sans text-sm font-semibold text-heading truncate">
              {user.user_info.user_name}
            </div>
            {user.user_info.role && (
              <div className="font-sans text-xs text-muted mt-0.5 capitalize">{user.user_info.role}</div>
            )}
          </div>

          <div className="px-4 py-3 border-b border-border">
            <div className="font-sans text-xs text-muted mb-1">Credits</div>
            <div className="font-sans text-sm font-semibold text-heading">
              {(user.balance?.credit ?? 0).toFixed(2)}
            </div>
          </div>

          <button
            onClick={() => { setOpen(false); logout(); }}
            className="w-full text-left px-4 py-2.5 font-sans text-sm text-red-600 hover:bg-red-50 transition-colors"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
