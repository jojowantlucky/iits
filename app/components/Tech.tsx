const CHANNELS = [
  { ch: "01", source: "Kick",               notes: "",                     mon: false },
  { ch: "02", source: "Snare",              notes: "",                     mon: false },
  { ch: "03", source: "Hats",               notes: "",                     mon: false },
  { ch: "04", source: "Tom 1",              notes: "",                     mon: false },
  { ch: "05", source: "Tom 2",              notes: "",                     mon: false },
  { ch: "06", source: "Tom 3",              notes: "",                     mon: false },
  { ch: "07", source: "Overhead 1",         notes: "Stereo pair",          mon: false },
  { ch: "08", source: "Overhead 2",         notes: "",                     mon: false },
  { ch: "09", source: "Bass",               notes: "",                     mon: true  },
  { ch: "10", source: "Guitar",             notes: "Stage center",         mon: true  },
  { ch: "11", source: "Guitar L",           notes: "Stereo — stage left",  mon: true  },
  { ch: "12", source: "Guitar R",           notes: "Stereo — stage right", mon: true  },
  { ch: "13", source: "Lead Vocals",        notes: "",                     mon: true  },
  { ch: "14", source: "Stage Left Vocals",  notes: "",                     mon: true  },
  { ch: "15", source: "Drum Vocals",        notes: "",                     mon: true  },
  { ch: "16", source: "Samples",            notes: "Stereo DI",            mon: true  },
];

const NOTES = [
  "We use our own in-ear monitor system — no on-stage floor wedges required",
  "IEM system is built around a Behringer X-32 Rack",
  "AES direct output compatible with Midas and Behringer consoles",
  "Flying W sign: 8' wide x 3.5' tall, hangs above drummer via two rings, approx. 15 lbs — rigging point required if possible",
  "Minimum stage: 20ft wide x 15ft deep",
  "Load-in: 90 min · Soundcheck: 45 min",
];

export default function Tech() {
  return (
    <section id="tech" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-[11px] tracking-[.18em] uppercase text-[var(--muted)] mb-2">
          For Promoters and Venues
        </p>
        <h2 className="font-display text-5xl mb-10" style={{ color: "var(--ink)" }}>
          Stage Plot and Input List
        </h2>

        <div className="grid md:grid-cols-2 gap-10 mb-8">
          {/* Stage plot card */}
          <div className="bg-[var(--ink)] rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="w-full aspect-[4/3] rounded-xl bg-white/5 border-2 border-dashed border-white/15 flex flex-col items-center justify-center mb-6 gap-2">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M3 9h18M9 21V9"/>
              </svg>
              <span className="font-mono text-xs text-white/30 tracking-widest">STAGE PLOT</span>
            </div>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Full scaled stage diagram with monitor positions, backline placement, and Flying W sign rigging point.
            </p>
            
              <a href="/stage-plot.pdf"
              download
              className="inline-flex items-center gap-2 bg-[var(--green)] hover:bg-[#5fa010] text-[var(--ink)] font-mono text-xs font-bold tracking-widest uppercase px-6 py-3.5 rounded-xl transition-all hover:-translate-y-0.5"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Stage Plot PDF
            </a>
          </div>

          {/* Input list */}
          <div>
            <h3 className="font-display text-2xl mb-4">Input List</h3>
            <div className="rounded-2xl overflow-hidden border border-gray-100">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    {["Ch", "Source", "Notes", "IEM"].map((h) => (
                      <th
                        key={h}
                        className="font-mono text-[10px] tracking-widest uppercase text-[var(--muted)] px-3 py-2.5 text-left border-b border-gray-100"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {CHANNELS.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                      <td className="px-3 py-2 font-mono text-[11px] text-[var(--muted)] bg-gray-50">
                        {row.ch}
                      </td>
                      <td className="px-3 py-2 font-medium text-[var(--ink)]">{row.source}</td>
                      <td className="px-3 py-2 text-[var(--muted)] text-xs">{row.notes}</td>
                      <td className="px-3 py-2 text-center">
                        {row.mon && (
                          <span
                            className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--green)]"
                            title="Routed to IEM mix"
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 font-mono text-[10px] text-[var(--muted)] tracking-wider">
              <span className="inline-block w-2 h-2 rounded-full bg-[var(--green)] mr-1.5 align-middle" />
              = routed to in-ear monitor mix
            </p>
          </div>
        </div>

        {/* Flying W callout */}
        <div className="bg-[var(--blue)] rounded-2xl p-6 mb-6 flex gap-4 items-start">
          <div className="text-3xl">🤘</div>
          <div>
            <h3 className="font-display text-xl text-white mb-1">Flying W Sign</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              We travel with an 8ft wide x 3.5ft tall illuminated Flying W sign that hangs above the drummer.
              It attaches via two rings and weighs approximately 15 lbs. A rigging point above the drum
              position is required if possible — please flag if your venue cannot accommodate this and
              we will discuss alternatives.
            </p>
          </div>
        </div>

        {/* Production notes */}
        <div className="bg-[var(--sand)] rounded-2xl p-6 border-l-4 border-[var(--blue)]">
          <h3 className="font-display text-xl mb-3">Production Notes</h3>
          <ul className="space-y-2">
            {NOTES.map((n, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-600">
                <span className="text-[var(--blue)] mt-0.5 flex-shrink-0">▸</span>
                {n}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}