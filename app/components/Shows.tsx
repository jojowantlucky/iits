"use client";
import { useState } from "react";
import Image from "next/image";

// ── UPCOMING SHOWS ────────────────────────────────────────────────────────────
const UPCOMING: {
  date: string;
  venue: string;
  address: string;
  doors?: string;
  show?: string;
  ticketUrl?: string | null;
  soldOut?: boolean;
}[] = [
  // {
  //   date: "2025-08-14",
  //   venue: "Wonder Ballroom",
  //   address: "128 NE Russell St, Portland, OR",
  //   doors: "7pm",
  //   show: "8pm",
  //   ticketUrl: "https://...",
  // },
];

// ── PAST SHOWS ────────────────────────────────────────────────────────────────
// Place flyer images in /public/flyers/ and add entries here.
// { src: "/flyers/2025-03-14.jpg", alt: "Wonder Ballroom – March 14 2025" }
const PAST: { src: string; alt: string }[] = [
  // { src: "/flyers/show1.jpg", alt: "Show at Venue – Jan 2025" },
];

const PLACEHOLDER_FLYERS = [
  { bg: "linear-gradient(135deg,#2855A0,#87CEEB)", label: "Flyer 1" },
  { bg: "linear-gradient(135deg,#C8332A,#ff7a70)", label: "Flyer 2" },
  { bg: "linear-gradient(135deg,#78BE20,#c5f076)", label: "Flyer 3" },
  { bg: "linear-gradient(135deg,#1a3a7a,#2855A0)", label: "Flyer 4" },
  { bg: "linear-gradient(135deg,#C8332A,#2855A0)", label: "Flyer 5" },
  { bg: "linear-gradient(135deg,#87CEEB,#78BE20)", label: "Flyer 6" },
];

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function parseDate(s: string) {
  const d = new Date(s + "T00:00:00");
  return { month: MONTHS[d.getMonth()], day: d.getDate(), year: d.getFullYear() };
}

type Tab = "upcoming" | "past";

export default function Shows() {
  const [tab, setTab]       = useState<Tab>("upcoming");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const hasUpcoming = UPCOMING.length > 0;
  const hasPast     = PAST.length > 0;

  return (
    <section id="shows" className="py-24 px-6 md:px-12 bg-[var(--sand)]">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-[11px] tracking-[.18em] uppercase text-[var(--muted)] mb-2">
          Gig Calendar
        </p>
        <h2 className="font-display text-5xl mb-8" style={{ color: "var(--ink)" }}>
          Shows
        </h2>

        {/* ── Tabs ── */}
        <div className="flex gap-2 mb-8">
          {(["upcoming", "past"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`font-mono text-xs tracking-widest uppercase px-5 py-2.5 rounded-xl border-2 transition-all ${
                tab === t
                  ? "bg-[var(--blue)] border-[var(--blue)] text-white"
                  : "bg-transparent border-[var(--blue)]/30 text-[var(--blue)] hover:border-[var(--blue)]"
              }`}
            >
              {t === "upcoming" ? "Upcoming" : "Previous"}
            </button>
          ))}
        </div>

        {/* ── Upcoming tab ── */}
        {tab === "upcoming" && (
          <>
            {!hasUpcoming ? (
              <div className="py-16 text-center rounded-2xl border-2 border-dashed border-[var(--blue)]/25">
                <p className="font-display text-2xl text-[var(--muted)] mb-2">No shows listed yet</p>
                <p className="text-sm text-[var(--muted)]">
                  Check back soon, or{" "}
                  <a href="#mailing-list" className="text-[var(--blue)] underline">
                    join the mailing list
                  </a>{" "}
                  to be the first to know.
                </p>
              </div>
            ) : (
              <ul className="flex flex-col gap-3">
                {UPCOMING.map((show, i) => {
                  const { month, day, year } = parseDate(show.date);
                  return (
                    <li
                      key={i}
                      className="bg-white rounded-2xl px-6 py-5 flex items-center gap-6 border-2 border-transparent hover:border-[var(--blue)] hover:shadow-lg transition-all duration-200"
                    >
                      <div className="text-center border-r-2 border-gray-100 pr-6 min-w-[80px]">
                        <div className="font-mono text-[10px] tracking-widest uppercase text-[var(--red)]">{month}</div>
                        <div className="font-display text-5xl leading-none text-[var(--ink)]">{day}</div>
                        <div className="font-mono text-[10px] text-[var(--muted)]">{year}</div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-2xl truncate">{show.venue}</h3>
                        <div className="text-sm text-[var(--muted)]">{show.address}</div>
                        {(show.doors || show.show) && (
                          <div className="font-mono text-[11px] text-[var(--muted)] mt-0.5 tracking-wide">
                            {show.doors && `Doors ${show.doors}`}
                            {show.doors && show.show && " · "}
                            {show.show && `Show ${show.show}`}
                          </div>
                        )}
                      </div>
                     {show.ticketUrl ? (
  <a
    href={show.ticketUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="font-mono text-[11px] tracking-widest uppercase bg-[var(--blue)] hover:bg-[#1a3a7a] text-white px-5 py-2.5 rounded-xl transition-colors whitespace-nowrap"
  >
    Tickets →
  </a>
) : show.soldOut ? (
  <span className="font-mono text-[11px] tracking-widest uppercase bg-gray-200 text-gray-400 px-5 py-2.5 rounded-xl whitespace-nowrap">
    Sold Out
  </span>
) : null}
                    </li>
                  );
                })}
              </ul>
            )}
          </>
        )}

        {/* ── Past tab ── */}
        {tab === "past" && (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {hasPast
                ? PAST.map((f, i) => (
                    <button
                      key={i}
                      onClick={() => setLightbox(f.src)}
                      className="aspect-[3/4] rounded-2xl overflow-hidden relative group cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-[var(--blue)]"
                    >
                      <Image
                        src={f.src}
                        alt={f.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width:768px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    </button>
                  ))
                : PLACEHOLDER_FLYERS.map((f, i) => (
                    <div
                      key={i}
                      className="aspect-[3/4] rounded-2xl flex items-center justify-center font-display text-white/70 text-lg tracking-wide border-2 border-dashed border-white/20"
                      style={{ background: f.bg }}
                    >
                      🎸 {f.label}
                    </div>
                  ))}
            </div>
            {!hasPast && (
              <p className="mt-5 font-mono text-[11px] text-[var(--muted)] tracking-wider">
                Add flyer images to <code className="bg-gray-100 px-1 rounded">/public/flyers/</code> and update the PAST array in Shows.tsx.
              </p>
            )}
          </>
        )}
      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-2xl w-full">
            <Image
              src={lightbox}
              alt="Flyer enlarged"
              width={800}
              height={1100}
              className="object-contain w-full h-full rounded-xl"
            />
          </div>
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl font-light"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
}