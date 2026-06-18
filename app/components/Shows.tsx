// ── ADD YOUR SHOWS HERE ───────────────────────────────────────────────────────
// Each show: { date: "2025-08-14", venue: "Venue Name", address: "City, ST",
//             doors: "7pm", show: "8pm", ticketUrl: "https://..." | null }
const SHOWS: {
  date: string;
  venue: string;
  address: string;
  doors?: string;
  show?: string;
  ticketUrl?: string | null;
  soldOut?: boolean;
}[] = [
  // Example (uncomment and edit):
  // {
  //   date: "2025-08-14",
  //   venue: "Wonder Ballroom",
  //   address: "128 NE Russell St, Portland, OR",
  //   doors: "7pm",
  //   show: "8pm",
  //   ticketUrl: "https://wonderballroom.com/...",
  // },
];

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function parseDate(s: string) {
  const d = new Date(s + "T00:00:00");
  return { month: MONTHS[d.getMonth()], day: d.getDate(), year: d.getFullYear() };
}

export default function Shows() {
  const now = new Date();
  const upcoming = SHOWS.filter((s) => new Date(s.date + "T00:00:00") >= now);

  return (
    <section id="shows" className="py-24 px-6 md:px-12 bg-[var(--sand)]">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-[11px] tracking-[.18em] uppercase text-[var(--muted)] mb-2">Gig Calendar</p>
        <h2 className="font-display text-5xl mb-10" style={{ color: "var(--ink)" }}>Upcoming Shows</h2>

        {upcoming.length === 0 ? (
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
                  className="bg-white rounded-2xl px-6 py-5 flex items-center gap-6 border-2 border-transparent hover:border-[var(--blue)] hover:shadow-lg transition-all duration-200 group"
                >
                  {/* Date block */}
                  <div className="text-center border-r-2 border-gray-100 pr-6 min-w-[80px]">
                    <div className="font-mono text-[10px] tracking-widest uppercase text-[var(--red)]">{month}</div>
                    <div className="font-display text-5xl leading-none text-[var(--ink)]">{day}</div>
                    <div className="font-mono text-[10px] text-[var(--muted)]">{year}</div>
                  </div>

                  {/* Info */}
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

                  {/* Ticket */}
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
      </div>
    </section>
  );
}
