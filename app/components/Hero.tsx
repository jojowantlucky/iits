"use client";
import { useRef, useEffect, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {/* autoplay blocked — fine, poster shows */});
  }, []);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted((m) => !m);
  };

  return (
    <section id="hero" className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* ── Video background ── */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/hero.webm"
        poster="/video/hero-poster.jpg"
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* ── Gradient overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/70 via-transparent to-transparent" />

      {/* ── Content ── */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Small vinyl accent */}
        <div className="absolute top-24 right-8 md:right-16 opacity-70 hidden sm:block">
          <VinylAccent size={120} />
        </div>

        <p className="font-mono text-xs tracking-[.2em] uppercase text-[var(--sky)] mb-3">
          Portland, Oregon · Weezer Tribute
        </p>
        <h1 className="font-display text-white leading-none mb-3"
          style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)" }}>
          Island in the Sun
        </h1>
        <p className="font-display text-[var(--sky)] mb-8"
          style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)" }}>
          Every riff. Every harmony. Every sweater.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="font-mono text-xs tracking-widest uppercase bg-[var(--red)] hover:bg-[#a8261f] text-white px-6 py-3.5 rounded-xl transition-all hover:-translate-y-0.5"
          >
            Book Us
          </a>
          <a
            href="#shows"
            className="font-mono text-xs tracking-widest uppercase border-2 border-white/50 hover:border-white text-white px-6 py-3.5 rounded-xl transition-all hover:-translate-y-0.5"
          >
            Upcoming Shows
          </a>
        </div>
      </div>

      {/* ── Mute toggle ── */}
      <button
        onClick={toggleMute}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute bottom-6 right-6 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 border border-white/20 flex items-center justify-center text-white transition-colors"
      >
        {muted ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
          </svg>
        )}
      </button>

      {/* ── Scroll nudge ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-60">
        <span className="font-mono text-[10px] text-white tracking-widest uppercase">Scroll</span>
        <svg className="animate-bounce" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    </section>
  );
}

/* Small decorative vinyl spinner for hero corner */
function VinylAccent({ size }: { size: number }) {
  return (
    <div className="vinyl-spin" style={{ width: size, height: size }} title="Hover to pause">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
        <circle cx="100" cy="100" r="99" fill="#111" />
        {[90,80,70,60,50].map(r => (
          <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="#2a2a2a" strokeWidth=".8"/>
        ))}
        <clipPath id="ac"><circle cx="100" cy="100" r="48"/></clipPath>
        <g clipPath="url(#ac)">
          <path d="M100,100 L100,52 A48,48 0 0,1 148,100 Z" fill="#2855A0"/>
          <path d="M100,100 L148,100 A48,48 0 0,1 100,148 Z" fill="#C8332A"/>
          <path d="M100,100 L100,148 A48,48 0 0,1 52,100 Z" fill="#78BE20"/>
          <path d="M100,100 L52,100 A48,48 0 0,1 100,52 Z" fill="#87CEEB"/>
          <circle cx="100" cy="100" r="10" fill="#111"/>
          <circle cx="100" cy="100" r="3" fill="#333"/>
        </g>
      </svg>
    </div>
  );
}
