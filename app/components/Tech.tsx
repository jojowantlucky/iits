// ── STAGE PLOT PDF ────────────────────────────────────────────────────────────
// Place your stage plot PDF at /public/stage-plot.pdf
// The download button below already points to it.

// ── INPUT LIST ────────────────────────────────────────────────────────────────
// Edit the channels array below to match your actual input list.
const CHANNELS = [
  { ch: "01", source: "Kick Drum",  notes: "Inside + outside mic", mon: false },
  { ch: "02", source: "Snare",      notes: "Top + bottom",         mon: true  },
  { ch: "03", source: "Hi-Hat",     notes: "",                     mon: false },
  { ch: "04", source: "Rack Tom",   notes: "",                     mon: false },
  { ch: "05", source: "Floor Tom",  notes: "",                     mon: false },
  { ch: "06", source: "OH L",       notes: "Overhead stereo pair", mon: false },
  { ch: "07", source: "OH R",       notes: "",                     mon: false },
  { ch: "08", source: "Bass DI",    notes: "Active DI, post-amp",  mon: true  },
  { ch: "09", source: "Guitar L",   notes: "Stereo cab / DI",      mon: true  },
  { ch: "10", source: "Guitar R",   notes: "",                     mon: true  },
  { ch: "11", source: "Keys L",     notes: "Stereo DI pair",       mon: true  },
  { ch: "12", source: "Keys R",     notes: "",                     mon: false },
  { ch: "13", source: "Lead Vox",   notes: "SM58 or similar",      mon: true  },
  { ch: "14", source: "BG Vox 1",   notes: "",                     mon: true  },
  { ch: "15", source: "BG Vox 2",   notes: "",                     mon: true  },
];

const NOTES = [
  "Full backline available — can travel without amps if preferred",
  "Minimum stage: 20ft wide × 15ft deep",
  "Load-in: 90 min · Soundcheck: 45 min",
  "4 monitor mixes required: drums, bass/guitar, lead vox, BG vox",
  "IEM-compatible — happy to work with house monitor engineer",
];

export default function Tech() {
  return (
    <section id="tech" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-[11px] tracking-[.18em] uppercase text-[var(--muted)] mb-2">For Promoters & Venues</p>
        <h2 className="font-display text-5xl mb-10" style={{ color: "var(--ink)" }}>Stage Plot & Input List</h2>

        <div className="grid md:grid-cols-2 gap-10 mb-8">
          {/* Stage plot card */}
          <div className="bg-[var(--ink)] rounded-2xl p-8 flex flex-col items-center text-center">
            {/* Preview placeholder — swap for an <Image> of your stage plot if desired */}
            <div className="w-full aspect-[4/3] rounded-xl bg-white/5 border-2 border-dashed border-white/15 flex flex-col items-center justify-center mb-6 gap-2">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M3 9h18M9 21V9"/>
              </svg>
              <span className="font-mono text-xs text-white/30 tracking-widest">STAGE PLOT</span>
            </div>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Full scaled stage diagram with monitor positions, backline placement, and cable runs.
            </p>
            <a
              href="/stage-plot.pdf"
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
                    {["Ch", "Source", "Notes", "Mon"].map((h) => (
                      <th key={h} className="font-mono text-[10px] tracking-widest uppercase text-[var(--muted)] px-3 py-2.5 text-left border-b border-gray-100">
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
                            title="Needs monitor mix"
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
              = needs dedicated monitor mix
            </p>
          </div>
        </div>

        {/* Notes */}
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
