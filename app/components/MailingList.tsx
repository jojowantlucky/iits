"use client";
import { useState } from "react";

const SIGNUP_PAGE = "https://gem.godaddy.com/signups/def2cdcbdb4b467a9fd97abb1cf88f44/join";
const SUBMIT_URL  = "https://gem.godaddy.com/signups/standard_subscribe/def2cdcbdb4b467a9fd97abb1cf88f44";

export default function MailingList() {
  const [email, setEmail]   = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

 const handleSubmit = async () => {
  const trimmed = email.trim();
  if (!trimmed || !trimmed.includes("@")) return;
  setStatus("loading");

  try {
    const res = await fetch("/api/subscribe", {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify({ email: trimmed }),
    });

    if (!res.ok) throw new Error("Failed");
    setStatus("success");
  } catch {
    setStatus("error");
  }
};

  return (
    <section id="mailing-list" className="py-24 px-6 md:px-12 bg-[var(--red)] text-center">
      <div className="max-w-xl mx-auto">
        <p className="font-mono text-[11px] tracking-[.18em] uppercase text-white/60 mb-2">
          Stay In The Loop
        </p>
        <h2 className="font-display text-5xl text-white mb-4">Join the Mailing List</h2>
        <p className="text-white/80 text-[1.05rem] leading-relaxed mb-8">
          Be the first to know about upcoming shows, new videos, and the occasional
          message we send because we're excited about something Weezer-related.
        </p>

        {status === "success" && (
          <div className="bg-white/15 rounded-2xl px-8 py-6 border border-white/25">
            <div className="text-3xl mb-2">🤘</div>
            <p className="font-display text-2xl text-white mb-1">You're on the list!</p>
            <p className="text-white/70 text-sm">
              We'll be in touch. In the meantime — go listen to Pinkerton.
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="bg-white/15 rounded-2xl px-8 py-6 border border-white/25 mb-6">
            <p className="text-white font-medium">
              Something went wrong — please try again or email us directly.
            </p>
          </div>
        )}

        {status !== "success" && (
          <>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder="your@email.com"
                aria-label="Email address"
                className="flex-1 sm:max-w-xs px-5 py-3.5 rounded-xl bg-white/15 border-2 border-white/30 focus:border-white outline-none text-white placeholder-white/50 text-base transition-colors"
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