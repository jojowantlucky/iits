// ── ADD YOUR VIDEOS HERE ──────────────────────────────────────────────────────
// Replace the placeholder entries with real YouTube video IDs.
// Format: { id: "dQw4w9WgXcQ", title: "Song name – Live at Venue" }
const VIDEOS: { id: string; title: string }[] = [
  // { id: "YOUR_YOUTUBE_ID", title: "Buddy Holly – Live at The Roseland" },
  // { id: "YOUR_YOUTUBE_ID", title: "Say It Ain't So – Live at Berbati's" },
  // { id: "YOUR_YOUTUBE_ID", title: "Undone – Full Set Highlight" },
];

const PLACEHOLDER_TITLES = [
  "Live performance video",
  "Full set highlight",
  "Deep cut showcase",
];

export default function Videos() {
  const hasVideos = VIDEOS.length > 0;

  return (
    <section id="videos" className="py-24 px-6 md:px-12 bg-[var(--ink)]">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-[11px] tracking-[.18em] uppercase text-[var(--sky)] mb-2">Watch</p>
        <h2 className="font-display text-5xl text-white mb-10">Video</h2>

        <div className="grid md:grid-cols-3 gap-5">
          {hasVideos
            ? VIDEOS.map((v) => (
                <div key={v.id} className="rounded-2xl overflow-hidden bg-black">
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      className="w-full h-full border-0"
                    />
                  </div>
                  <p className="font-mono text-xs text-white/60 tracking-wide px-4 py-3">{v.title}</p>
                </div>
              ))
            : PLACEHOLDER_TITLES.map((title, i) => (
                <div
                  key={i}
                  className="aspect-video rounded-2xl border-2 border-dashed border-white/15 bg-white/5 flex flex-col items-center justify-center gap-3"
                >
                  <div className="w-14 h-14 bg-[var(--red)] rounded-full flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                      <polygon points="5,3 19,12 5,21"/>
                    </svg>
                  </div>
                  <span className="font-mono text-xs text-white/40 tracking-widest uppercase">{title}</span>
                  <span className="font-mono text-[10px] text-white/25 tracking-wider">Add YouTube ID in Videos.tsx</span>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
