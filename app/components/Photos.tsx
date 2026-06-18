"use client";
import { useState } from "react";
import Image from "next/image";

// ── ADD YOUR PHOTOS HERE ──────────────────────────────────────────────────────
// Place image files in /public/photos/ and update this array.
// Each entry: { src: "/photos/filename.jpg", alt: "Description" }
// To add more, just push more objects into the array.
const PHOTOS: { src: string; alt: string }[] = [
  // { src: "/photos/live-1.jpg", alt: "Band performing at [Venue]" },
  // { src: "/photos/live-2.jpg", alt: "Crowd shot" },
  // { src: "/photos/promo.jpg",  alt: "Band promo photo" },
];

// Placeholder gradient colors for slots without real photos
const PLACEHOLDERS = [
  { bg: "linear-gradient(135deg,#2855A0,#87CEEB)", label: "Live Shot" },
  { bg: "linear-gradient(135deg,#C8332A,#ff7a70)", label: "Stage Shot" },
  { bg: "linear-gradient(135deg,#78BE20,#c5f076)", label: "Promo Photo" },
  { bg: "linear-gradient(135deg,#1a3a7a,#2855A0)", label: "Live Shot" },
  { bg: "linear-gradient(135deg,#87CEEB,#c5f076)", label: "Band Photo" },
  { bg: "linear-gradient(135deg,#C8332A,#2855A0)", label: "Crowd Shot" },
];

export default function Photos() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const hasPhotos = PHOTOS.length > 0;

  return (
    <section id="photos" className="py-24 px-6 md:px-12 bg-[var(--sand)]">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-[11px] tracking-[.18em] uppercase text-[var(--muted)] mb-2">Gallery</p>
        <h2 className="font-display text-5xl mb-10" style={{ color: "var(--ink)" }}>Photos</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {hasPhotos
            ? PHOTOS.map((p, i) => (
                <button
                  key={i}
                  className="aspect-[4/3] rounded-2xl overflow-hidden relative group cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-[var(--blue)]"
                  onClick={() => setLightbox(p.src)}
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width:768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </button>
              ))
            : PLACEHOLDERS.map((p, i) => (
                <div
                  key={i}
                  className="aspect-[4/3] rounded-2xl flex items-center justify-center font-display text-white/70 text-lg tracking-wide border-2 border-dashed border-white/20"
                  style={{ background: p.bg }}
                >
                  📸 {p.label}
                </div>
              ))}
        </div>

        <p className="mt-5 font-mono text-[11px] text-[var(--muted)] tracking-wider">
          High-resolution press photos available on request — contact us below.
        </p>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh]">
            <Image
              src={lightbox}
              alt="Photo enlarged"
              width={1200}
              height={800}
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
