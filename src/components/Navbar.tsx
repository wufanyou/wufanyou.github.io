"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

const links = [
  { href: "/", label: "About" },
  { href: "/competition", label: "Competition" },
  { href: "/presentation", label: "Presentation" },
  { href: "/publication", label: "Publication" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggle } = useTheme();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style={{ backgroundColor: "var(--global-navbar-bg)", borderBottom: "1px solid var(--global-navbar-border)" }}>
      <div className="gradient-bar" />
      <div className="container-main flex items-center justify-between h-14">
        <Link href="/" className="navbar-brand no-underline hover:no-underline text-lg" style={{ color: "var(--global-text-color)" }}>
          <span className="font-semibold">Fanyou</span> Wu | 吴凡优
        </Link>

        {/* Mobile toggle */}
        <button
          className="sm:hidden flex flex-col gap-1 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span
            className={`block w-5.5 h-0.5 rounded transition-all ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
            style={{ backgroundColor: "var(--global-icon-color)" }}
          />
          <span
            className={`block w-5.5 h-0.5 rounded transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
            style={{ backgroundColor: "var(--global-icon-color)" }}
          />
          <span
            className={`block w-5.5 h-0.5 rounded transition-all ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
            style={{ backgroundColor: "var(--global-icon-color)" }}
          />
        </button>

        {/* Desktop nav */}
        <ul className="hidden sm:flex gap-6 items-center">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                data-label={l.label}
                className={`nav-link no-underline hover:no-underline ${
                  isActive(l.href) ? "nav-link-active" : ""
                }`}
                style={{ color: isActive(l.href) ? "var(--global-theme-color)" : "var(--global-text-color)" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              className="theme-toggle"
              onClick={toggle}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? (
                <><i className="fas fa-moon"></i><span className="text-sm ml-1.5" style={{ color: "var(--global-muted-text)" }}>Dark</span></>
              ) : (
                <><i className="fas fa-sun"></i><span className="text-sm ml-1.5" style={{ color: "var(--global-muted-text)" }}>Light</span></>
              )}
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="sm:hidden backdrop-blur-md" style={{ backgroundColor: "var(--global-navbar-bg)" }}>
          <ul className="flex flex-col items-end gap-2 p-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  data-label={l.label}
                  className={`nav-link no-underline hover:no-underline ${
                    isActive(l.href) ? "nav-link-active" : ""
                  }`}
                  style={{ color: isActive(l.href) ? "var(--global-theme-color)" : "var(--global-text-color)" }}
                  onClick={() => setIsOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                className="theme-toggle"
                onClick={toggle}
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              >
                {theme === "light" ? (
                  <><i className="fas fa-moon"></i><span className="text-sm ml-1.5" style={{ color: "var(--global-muted-text)" }}>Dark</span></>
                ) : (
                  <><i className="fas fa-sun"></i><span className="text-sm ml-1.5" style={{ color: "var(--global-muted-text)" }}>Light</span></>
                )}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
