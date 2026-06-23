"use client";
import { useState } from "react";

// ── SETLIST ───────────────────────────────────────────────────────────────────
// Ordered by Spotify streams (most popular first).
// Update this list when you have your actual repertoire.
const SONGS = [
  // Blue Album
  { title: "Island in the Sun",            album: "Maladroit"    },
  { title: "Say It Ain't So",              album: "Blue Album"   },
  { title: "Buddy Holly",                  album: "Blue Album"   },
  { title: "Undone — The Sweater Song",    album: "Blue Album"   },
  { title: "My Name Is Jonas",             album: "Blue Album"   },
  { title: "Pink Triangle",               album: "Pinkerton"    },
  { title: "El Scorcho",                   album: "Pinkerton"    },
  { title: "Only in Dreams",               album: "Blue Album"   },
  { title: "The World Has Turned and Left Me Here", album: "Blue Album" },
  { title: "The Good Life",                album: "Pinkerton"    },
  { title: "In the Garage",               album: "Blue Album"   },
  { title: "Across the Sea",              album: "Pinkerton"    },
  { title: "Surf Wax America",            album: "Blue Album"   },
  { title: "Why Bother?",                  album: "Pinkerton"    },
  { title: "No One Else",                  album: "Blue Album"   },
  { title: "Falling For You",              album: "Pinkerton"    },
  { title: "Tired of Sex",                 album: "Pinkerton"    },
  // Green Album
  { title: "Hash Pipe",                    album: "Green Album"  },
  { title: "Photograph",                   album: "Maladroit"    },
  { title: "Dope Nose",                    album: "Maladroit"    },
  { title: "Keep Fishin'",                 album: "Maladroit"    },
  { title: "Burndt Jamb",                  album: "Maladroit"    },
  { title: "Knockdown Dragout",            album: "Maladroit"    },
  { title: "Simple Pages",                 album: "Green Album"  },
  { title: "Butterfly",                    album: "Pinkerton"    },
  { title: "Getchoo",                      album: "Pinkerton"    },
  // Beverly Hills / Make Believe
  { title: "Beverly Hills",               album: "Make Believe"  },
  { title: "Perfect Situation",           album: "Make Believe"  },
  { title: "We Are All on Drugs",          album: "Make Believe"  },
  { title: "This Is Such a Pity",          album: "Make Believe"  },
  { title: "Hold Me",                      album: "Make Believe"  },
  // Red Album / Raditude
  { title: "Pork and Beans",              album: "Red Album"     },
  { title: "The Greatest Man That Ever Lived", album: "Red Album" },
  { title: "Troublemaker",                album: "Raditude"      },
  { title: "I Want You To",               album: "Raditude"      },
  { title: "Can't Stop Partying",          album: "Raditude"      },
  // Hurley / EWBAITE
  { title: "Memories",                     album: "Hurley"        },
  { title: "Ruling Me",                    album: "Hurley"        },
  { title: "Back to the Shack",           album: "EWBAITE"       },
  { title: "Foolish Father",              album: "EWBAITE"       },
  { title: "The British Are Coming",       album: "EWBAITE"       },
  // White Album / Pacific Daydream
  { title: "California Kids",             album: "White Album"   },
  { title: "Do You Wanna Get High?",       album: "White Album"   },
  { title: "King of the World",           album: "White Album"   },
  { title: "Summer Elaine and Drunk Dori", album: "White Album"  },
  { title: "Feels Like Summer",           album: "Pacific Daydream" },
  { title: "Happy Hour",                  album: "Pacific Daydream" },
  // Black Album / Van Weezer / SZNZ
  { title: "Zombie Bastards",             album: "Black Album"   },
  { title: "High as a Kite",              album: "Black Album"   },
  { title: "The End of the Game",         album: "Van Weezer"    },
  { title: "Hero",                         album: "Van Weezer"    },
  { title: "All My Favorite Songs",       album: "OK Human"      },
  // Covers
  { title: "Africa",                       album: "Teal Album"    },
  { title: "Take on Me",                   album: "Teal Album"    },
  { title: "No Scrubs",                    album: "Teal Album"    },
  { title: "Everybody Wants to Rule the World", album: "Teal Album" },
  { title: "Mr. Blue Sky",                album: "Teal Album"    },
  { title: "Happy Together",              album: "Teal Album"    },
];

const ALBUM_COLORS: Record<string, string> = {
  "Blue Album":       "#2855A0",
  "Pinkerton":        "#C8332A",
  "Green Album":      "#78BE20",
  "Maladroit":        "#C8332A",
  "Make Believe":     "#2855A0",
  "Red Album":        "#C8332A",
  "Raditude":         "#78BE20",
  "Hurley":           "#87CEEB",
  "EWBAITE":          "#2855A0",
  "White Album":      "#f0f0f0",
  "Pacific Daydream": "#87CEEB",
  "Black Album":      "#333333",
  "Van Weezer":       "#C8332A",
  "OK Human":         "#78BE20",
  "Teal Album":       "#2a9d8f",
};

const stats = [
  { num: `${SONGS.length}+`, label: "Songs in rotation across the full Weezer catalog", color: "var(--blue)", clickable: true },
  { num: "4",     label: "Lifelong Weezer fans who can't stop playing the songs", color: "var(--red)",   clickable: false },
  { num: "OR+WA", label: "Pacific Northwest based, available for travel",          color: "var(--green)", clickable: false },
  { num: "PA ✓",  label: "Full backline available, flexible for any stage size",   color: "var(--sky)",   clickable: false },
];

export default function About() {
  const [modalOpen, setModalOpen] = useState(false);

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
              onClick={s.clickable ? () => setModalOpen(true) : undefined}
              className={`rounded-2xl p-6 bg-[var(--sand)] transition-all duration-200 ${
                s.clickable
                  ? "cursor-pointer hover:shadow-lg hover:-translate-y-0.5 hover:bg-[var(--blue)]/5"
                  : ""
              }`}
              style={{ borderLeft: `4px solid ${s.color}` }}
            >
              <div className="font-display text-4xl leading-none mb-2" style={{ color: s.color }}>
                {s.num}
              </div>
              <div className="text-sm text-[var(--muted)] leading-snug">{s.label}</div>
              {s.clickable && (
                <div className="mt-3 font-mono text-[10px] tracking-widest uppercase text-[var(--blue)]">
                  View repertoire →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Repertoire Modal ── */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-[var(--ink)] px-6 py-5 flex items-center justify-between flex-shrink-0">
              <div>
                <h3 className="font-display text-2xl text-white">Our Repertoire</h3>
                <p className="font-mono text-[11px] text-white/50 tracking-wider mt-0.5">
                  {SONGS.length}+ songs · ordered by popularity
                </p>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="text-white/50 hover:text-white text-2xl font-light transition-colors"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* Song list */}
            <div className="overflow-y-auto flex-1 px-2 py-3">
              {SONGS.map((song, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <span className="font-mono text-[11px] text-[var(--muted)] w-6 text-right flex-shrink-0">
                    {i + 1}
                  </span>
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: ALBUM_COLORS[song.album] ?? "var(--muted)" }}
                    title={song.album}
                  />
                  <span className="flex-1 text-[var(--ink)] text-sm font-medium">{song.title}</span>
                  <span className="font-mono text-[10px] text-[var(--muted)] tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
                    {song.album}
                  </span>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="border-t border-gray-100 px-6 py-4 flex-shrink-0">
              <p className="font-mono text-[10px] text-[var(--muted)] tracking-wider mb-2 uppercase">Album color key</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                {Object.entries(ALBUM_COLORS).map(([album, color]) => (
                  <div key={album} className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: color }} />
                    <span className="font-mono text-[10px] text-[var(--muted)]">{album}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}