"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "About",   href: "#about"       },
  { label: "Photos",  href: "#photos"      },
  { label: "Videos",  href: "#videos"      },
  { label: "Shows",   href: "#shows"       },
  { label: "Tech",    href: "#tech"        },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1a1a2e]/95 backdrop-blur shadow-lg" : "bg-transparent"
      }`}
      style={{ height: 64 }}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#hero"
          className="font-display text-2xl text-white leading-none tracking-wide"
        >
          Island in the <span className="text-[var(--sky)]">Sun</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-[11px] tracking-widest uppercase text-[var(--sky)] hover:text-white transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="font-mono text-[11px] tracking-widest uppercase bg-[var(--red)] text-white px-4 py-2 rounded-lg hover:bg-[#a8261f] transition-colors"
            >
              Book Us
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a1a2e]/98 backdrop-blur border-t border-white/10 px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-sm tracking-widest uppercase text-[var(--sky)] hover:text-white transition-colors py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="font-mono text-sm tracking-widest uppercase bg-[var(--red)] text-white px-4 py-2 rounded-lg text-center mt-2"
          >
            Book Us
          </a>
        </div>
      )}
    </nav>
  );
}
