"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "About" },
  { href: "/competition", label: "Competition" },
  { href: "/presentation", label: "Presentation" },
  { href: "/publication", label: "Publication" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="gradient-bar" />
      <div className="container-main flex items-center justify-between h-14">
        <Link href="/" className="navbar-brand text-black no-underline hover:no-underline text-lg">
          <span className="font-semibold">Fanyou</span> Wu | 吴凡优
        </Link>

        {/* Mobile toggle */}
        <button
          className="sm:hidden flex flex-col gap-1 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span
            className={`block w-5.5 h-0.5 bg-gray-600 rounded transition-all ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-5.5 h-0.5 bg-gray-600 rounded transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5.5 h-0.5 bg-gray-600 rounded transition-all ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>

        {/* Desktop nav */}
        <ul className="hidden sm:flex gap-6 items-center">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`nav-link no-underline text-black hover:no-underline ${
                  isActive(l.href) ? "nav-link-active" : ""
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="sm:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md">
          <ul className="flex flex-col items-end gap-2 p-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`nav-link no-underline text-black hover:no-underline ${
                    isActive(l.href) ? "nav-link-active" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
