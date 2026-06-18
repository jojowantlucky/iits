"use client";
import { useState } from "react";

// ── MAILING LIST SETUP ────────────────────────────────────────────────────────
// When you have your mailing list provider details, update the handleSubmit
// function below. Common options:
//
// Mailchimp: POST to their embed form action URL with `EMAIL` field
// ConvertKit: Use their JS embed or API endpoint
// Buttondown: POST to https://buttondown.email/api/emails/embed-subscribe/{username}
//
// For now, the form is wired up with a placeholder success state.

export default function MailingList() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async () => {
    if (!email || !email.includes("@")) return;
    setStatus("loading");

    // ── Replace this block with your provider's submit logic ──
    await new Promise((r) => setTimeout(r, 800)); // fake delay
    setStatus("success");
    // ─────────────────────────────────────────────────────────
  };

  return (
    <section id="mailing-list" className="py-24 px-6 md:px-12 bg-[var(--red)] text-center">
      <div className="max-w-xl mx-auto">
        <p className="font-mono text-[11px] tracking-[.18em] uppercase text-white/60 mb-2">Stay In The Loop</p>
        <h2 className="font-display text-5xl text-white mb-4">Join the Mailing List</h2>
        <p className="text-white/80 text-[1.05rem] leading-relaxed mb-8">
          Be the first to know about upcoming shows, new videos, and the occasional message we send because we're excited about something Weezer-related.
        </p>

        {status === "success" ? (
          <div className="bg-white/15 rounded-2xl px-8 py-6 border border-white/25">
            <div className="text-3xl mb-2">🤘</div>
            <p className="font-display text-2xl text-white mb-1">You're on the list!</p>
            <p className="text-white/70 text-sm">We'll be in touch. In the meantime — go listen to Pinkerton.</p>
          </div>
        ) : (
          <>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder="your@email.com"
                aria-label="Email address"
                className="flex-1 sm:max-w-xs px-5 py-3.5 rounded-xl bg-white/15 border-2 border-white/30 focus:border-white outline-none text-white placeholder-white/50 font-sans text-base transition-colors"
              />
              <button
                onClick={handleSubmit}
                disabled={status === "loading"}
                className="font-mono text-xs tracking-widest uppercase bg-white text-[var(--red)] hover:bg-[var(--sand)] px-7 py-3.5 rounded-xl font-bold transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Signing up…" : "Sign me up"}
              </button>
            </div>
            <p className="mt-4 font-mono text-[10px] text-white/50 tracking-wider">
              No spam. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
