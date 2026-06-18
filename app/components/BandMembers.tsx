import Image from "next/image";

// ── BAND MEMBERS ──────────────────────────────────────────────────────────────
// Add a photo for each member at /public/photos/band/firstname.jpg
// and update the `photo` field below.
const MEMBERS = [
  {
    name:  "Matthew Masini",
    role:  "Lead Vocals & Guitar",
    photo: null, // "/photos/band/matthew.jpg"
    bio:   "Matthew has been living inside Weezer's catalog since the Blue Album dropped in 1994. As the band's frontman he brings Rivers Cuomo's vocal quirks, guitar tones, and sweater energy to every performance with uncanny accuracy. When not on stage he can be found arguing about whether Pinkerton was snubbed at the Grammys (it was).",
    color: "var(--blue)",
  },
  {
    name:  "Randy Gerhart",
    role:  "Bass",
    photo: null, // "/photos/band/randy.jpg"
    bio:   "Randy locks in the low end with a precision that would make Matt Sharp proud. His bass lines are the backbone of the Island in the Sun sound — felt as much as heard. Off stage he collects vintage gear and has strong opinions about which Weezer album has the best bass mix (it's Pinkerton).",
    color: "var(--red)",
  },
  {
    name:  "Mattie Hancock",
    role:  "Drums & Vocals",
    photo: null, // "/photos/band/mattie.jpg"
    bio:   "Mattie drives the band with the kind of punchy, dynamic drumming that makes Weezer's deceptively simple songs feel enormous live. She also pulls off backing vocal harmonies mid-fill without breaking a sweat, which is frankly unfair to the rest of the band.",
    color: "var(--green)",
  },
  {
    name:  "Joe Ebner",
    role:  "Guitar & Vocals",
    photo: null, // "/photos/band/joe.jpg"
    bio:   "Joe handles the harmonic architecture that fills out the Island in the Sun sound — the layered guitars, the vocal stacks, the moments where everything locks together and the crowd loses it. He is also the guy most likely to suggest playing a deep cut from Maladroit and most surprised when the crowd knows every word.",
    color: "var(--sky)",
  },
];

export default function BandMembers() {
  return (
    <section id="band" className="py-24 px-6 md:px-12 bg-[var(--sand)]">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-[11px] tracking-[.18em] uppercase text-[var(--muted)] mb-2">
          The People
        </p>
        <h2 className="font-display text-5xl mb-12" style={{ color: "var(--ink)" }}>
          Band Members
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {MEMBERS.map((m) => (
            <div
              key={m.name}
              className="bg-white rounded-2xl overflow-hidden flex flex-col sm:flex-row border-2 border-transparent hover:border-[var(--blue)]/20 hover:shadow-lg transition-all duration-200"
            >
              {/* Photo */}
              <div
                className="sm:w-40 sm:flex-shrink-0 aspect-square sm:aspect-auto relative"
                style={{ background: m.photo ? undefined : m.color + "22" }}
              >
                {m.photo ? (
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                ) : (
                  <div
                    className="w-full h-full min-h-[160px] flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${m.color}33, ${m.color}66)` }}
                  >
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={m.color} strokeWidth="1.5">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                )}
                {/* Color accent bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ background: m.color }}
                />
              </div>

              {/* Text */}
              <div className="p-6 flex flex-col justify-center">
                <h3 className="font-display text-2xl leading-tight mb-0.5" style={{ color: "var(--ink)" }}>
                  {m.name}
                </h3>
                <p
                  className="font-mono text-[11px] tracking-widest uppercase mb-3"
                  style={{ color: m.color }}
                >
                  {m.role}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}