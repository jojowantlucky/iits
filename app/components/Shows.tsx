"use client";
import { useState } from "react";
import Image from "next/image";

// ── SHOWS DATA ────────────────────────────────────────────────────────────────
// Add all shows here — past and upcoming. The component automatically sorts
// them into the correct tab based on today's date.
//
// flyer: path to image in /public/flyers/, or null for placeholder
// eventName: optional event/bill name (e.g. "Summer Bash", "Battle of the Bands")
const SHOWS: {
  date: string;       // "YYYY-MM-DD"
  venue: string;
  city: string;
  eventName?: string;
  doors?: string;
  show?: string;
  ticketUrl?: string;
  soldOut?: boolean;
  flyer?: string | null;
}[] = [
  // ── EXAMPLES (uncomment and edit) ──
  // {
  //   date: "2025-03-14",
  //   venue: "Wonder Ballroom",
  //   city: "Portland, OR",
  //   eventName: "Weezer Night",
  //   flyer: "/flyers/2025-03-14.jpg",
  // },
  // {
  //   date: "2025-08-14",
  //   venue: "Aladdin Theater",
  //   city: "Portland, OR",
  //   eventName: "Summer Tribute Series",
  //   doors: "7pm",
  //   show: "8pm",
  //   ticketUrl: "https://...",
  //   flyer: null,
  // },
];

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function parseDate(s: string) {
  const d = new Date(s + "T00:00:00");
  return { month: MONTHS[d.getMonth()], day: d.getDate(), year: d.getFullYear() };
}

// Placeholder gradient for shows without a flyer
const GRADIENTS = [
  "linear-gradient(135deg,#2855A0,#87CEEB)",
  "linear-gradient(135deg,#C8332A,#ff7a70)",
  "linear-gradient(135deg,#78BE20,#c5f076)",
  "linear-gradient(135deg,#1a3a7a,#2855A0)",
  "linear-gradient(135deg,#C8332A,#2855A0)",
  "linear-gradient(135deg,#87CEEB,#78BE20)",
];

type Tab = "upcoming" | "past";

interface Show {
  date: string;
  venue: string;
  city: string;
  eventName?: string;
  doors?: string;
  show?: string;
  ticketUrl?: string;
  soldOut?: boolean;
  flyer?: string | null;
}

function PastFlyerCard({ show, index, onClick }: { show: Show; index: number; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  const { month, day, year } = parseDate(show.date);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative aspect-[11/17] rounded-2xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-[var(--blue)] group"
    >
      {/* Flyer image or gradient placeholder */}
      {show.flyer ? (
        <Image
          src={show.flyer}
          alt={`${show.venue} flyer`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width:768px) 50vw, 33vw"
        />
      ) : (
        <div
          className="w-full h-full flex items-center justify-center"
          style={{ background: GRADIENTS[index % GRADIENTS.length] }}
        >
          <span className="font-display text-white/60 text-lg tracking-wide">🎸 Flyer TBA</span>
        </div>
      )}

      {/* Hover overlay with show info */}
      <div
        className={`absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-4 text-center transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="font-mono text-[10px] tracking-widest uppercase text-[var(--sky)] mb-2">
          {month} {day}, {year}
        </p>
        {show.eventName && (
          <p className="font-display text-xl text-white mb-1">{show.eventName}</p>
        )}
        <p className="font-display text-lg text-white/90">{show.venue}</p>
        <p className="font-mono text-[11px] text-white/60 tracking-wide mt-1">{show.city}</p>
        <div className="mt-4 font-mono text-[10px] tracking-widest uppercase text-white/40">
          Click to enlarge
        </div>
      </div>
    </button>
  );
}

export default function Shows() {
  const [tab, setTab]       = useState<Tab>("upcoming");
  const [lightbox, setLightbox] = useState<Show | null>(null);

  const now      = new Date();
  now.setHours(0, 0, 0, 0);

  const upcoming = SHOWS
    .filter(s => new Date(s.date + "T00:00:00") >= now)
    .sort((a, b) => a.date.localeCompare(b.date));

  const past = SHOWS
    .filter(s => new Date(s.date + "T00:00:00") < now)
    .sort((a, b) => b.date.localeCompare(a.date)); // most recent first

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
              {t === "upcoming" ? `Upcoming${upcoming.length > 0 ? ` (${upcoming.length})` : ""}` : `Previous${past.length > 0 ? ` (${past.length})` : ""}`}
            </button>
          ))}
        </div>

        {/* ── Upcoming tab ── */}
        {tab === "upcoming" && (
          upcoming.length === 0 ? (
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
              {upcoming.map((show, i) => {
                const { month, day, year } = parseDate(show.date);
                return (
                  <li
                    key={i}
                    className="bg-white rounded-2xl px-6 py-5 flex items-center gap-6 border-2 border-transparent hover:border-[var(--blue)] hover:shadow-lg transition-all duration-200"
                  >
                    {/* Date block */}
                    <div className="text-center border-r-2 border-gray-100 pr-6 min-w-[80px]">
                      <div className="font-mono text-[10px] tracking-widest uppercase text-[var(--red)]">{month}</div>
                      <div className="font-display text-5xl leading-none text-[var(--ink)]">{day}</div>
                      <div className="font-mono text-[10px] text-[var(--muted)]">{year}</div>
                    </div>

                    {/* Flyer thumbnail */}
                    {show.flyer && (
                      <div className="w-12 h-16 rounded-lg overflow-hidden flex-shrink-0 relative">
                        <Image src={show.flyer} alt="Flyer" fill className="object-cover" sizes="48px" />
                      </div>
                    )}

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      {show.eventName && (
                        <div className="font-mono text-[10px] tracking-widest uppercase text-[var(--red)] mb-0.5">
                          {show.eventName}
                        </div>
                      )}
                      <h3 className="font-display text-2xl truncate">{show.venue}</h3>
                      <div className="text-sm text-[var(--muted)]">{show.city}</div>
                      {(show.doors || show.show) && (
                        <div className="font-mono text-[11px] text-[var(--muted)] mt-0.5 tracking-wide">
                          {show.doors && `Doors ${show.doors}`}
                          {show.doors && show.show && " · "}
                          {show.show && `Show ${show.show}`}
                        </div>
                      )}
                    </div>

                    {/* Ticket button */}
                    {show.ticketUrl ? (
                      
                        <a href={show.ticketUrl}
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
          )
        )}

        {/* ── Past tab ── */}
        {tab === "past" && (
          past.length === 0 ? (
            <div className="py-16 text-center rounded-2xl border-2 border-dashed border-[var(--blue)]/25">
              <p className="font-display text-2xl text-[var(--muted)] mb-2">No previous shows yet</p>
              <p className="text-sm text-[var(--muted)]">Check back after our first gig!</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {past.map((show, i) => (
                <PastFlyerCard
                  key={i}
                  show={show}
                  index={i}
                  onClick={() => setLightbox(show)}
                />
              ))}
            </div>
          )
        )}
      </div>

      {/* ── Lightbox modal ── */}
      {lightbox && (() => {
        const { month, day, year } = parseDate(lightbox.date);
        return (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <div
              className="relative flex flex-col md:flex-row gap-6 items-center max-w-3xl w-full"
              onClick={e => e.stopPropagation()}
            >
              {/* Flyer */}
              <div className="relative w-full max-w-xs flex-shrink-0 aspect-[11/17] rounded-2xl overflow-hidden">
                {lightbox.flyer ? (
                  <Image
                    src={lightbox.flyer}
                    alt={`${lightbox.venue} flyer`}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ background: GRADIENTS[SHOWS.indexOf(lightbox) % GRADIENTS.length] }}
                  >
                    <span className="font-display text-white/60 text-xl">🎸</span>
                  </div>
                )}
              </div>

              {/* Show details */}
              <div className="text-white">
                <p className="font-mono text-[11px] tracking-widest uppercase text-[var(--sky)] mb-3">
                  {month} {day}, {year}
                </p>
                {lightbox.eventName && (
                  <h3 className="font-display text-3xl mb-1">{lightbox.eventName}</h3>
                )}
                <h4 className="font-display text-2xl text-white/80 mb-1">{lightbox.venue}</h4>
                <p className="font-mono text-sm text-white/50 tracking-wide">{lightbox.city}</p>
              </div>
            </div>

            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white/60 hover:text-white text-3xl font-light"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              ×
            </button>
          </div>
        );
      })()}
    </section>
  );
}