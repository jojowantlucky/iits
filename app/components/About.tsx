export default function About() {
  const stats = [
    { num: "100+", label: "Songs in rotation across the full Weezer catalog", color: "var(--blue)" },
    { num: "4",    label: "Lifelong Weezer fans who can't stop playing the songs", color: "var(--red)" },
    { num: "OR+WA",label: "Pacific Northwest based, available for travel", color: "var(--green)" },
    { num: "PA ✓", label: "Full backline available, flexible for any stage size", color: "var(--sky)" },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Copy */}
        <div>
          <p className="font-mono text-[11px] tracking-[.18em] uppercase text-[var(--muted)] mb-2">Who We Are</p>
          <h2 className="font-display text-5xl mb-8" style={{ color: "var(--ink)" }}>The Band</h2>
          <div className="space-y-4 text-[1.05rem] leading-relaxed text-gray-600">
           <p>
  Island in the Sun is Portland's most dedicated Weezer tribute band — four musicians who have spent years obsessing over every riff, harmony, and production detail so you don't have to wonder if it'll sound right. It always does.
</p>
<p>
  From the crunchy power-pop of the Blue Album to the raw emotion of Pinkerton, the infectious hooks of Green and Maladroit, and everything in between, we cover the full Weezer catalog with the energy and precision it deserves.
</p>
<p>
  Formerly known as Say It Ain't Weezer, the band rebranded as Island in the Sun and hasn't looked back — except to play songs from every era of the catalog. Whether you're coming to sing every word or hearing us for the first time, there's a moment in every set that gets you.
</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 bg-[var(--sand)]"
              style={{ borderLeft: `4px solid ${s.color}` }}
            >
              <div className="font-display text-4xl leading-none mb-2" style={{ color: s.color }}>
                {s.num}
              </div>
              <div className="text-sm text-[var(--muted)] leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
