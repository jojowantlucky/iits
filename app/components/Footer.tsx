// ── CONTACT DETAILS ────────────────────────────────────────────────────────────
// Update the email and social URLs below.
const BOOKING_EMAIL = "booking@islandinthesun.band";

const SOCIAL = [
  {
    label: "Facebook",
    href: "#", // e.g. "https://facebook.com/islandinthesunband"
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#", // e.g. "https://instagram.com/islandinthesunband"
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#", // e.g. "https://youtube.com/@islandinthesunband"
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.6.47a2.78 2.78 0 0 0-1.95 1.95A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[var(--ink)] px-6 md:px-12 pt-16 pb-0">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 pb-12">
        {/* Brand */}
        <div>
          <div className="font-display text-3xl text-white mb-3">
            Island in the <span className="text-[var(--sky)]">Sun</span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
            Portland's Weezer tribute band. Available for clubs, festivals, private events, and anywhere people love good music.
          </p>
          <div className="flex gap-2">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-10 h-10 rounded-xl bg-white/8 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-2xl text-white mb-6">Book Us</h3>
          <div className="space-y-4">
            <ContactRow
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              }
              label="Email"
              value={<a href={`mailto:${BOOKING_EMAIL}`} className="text-[var(--sky)] hover:underline">{BOOKING_EMAIL}</a>}
            />
            <ContactRow
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              }
              label="Based In"
              value="Portland, Oregon · Available Pacific Northwest + Travel"
            />
            <ContactRow
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              }
              label="Response Time"
              value="We reply to all inquiries within 24 hours"
            />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 max-w-7xl mx-auto">
        <span className="font-mono text-[11px] text-white/30 tracking-wider">
  © {new Date().getFullYear()} Noteworthy Productions, LLC · islandinthesun.band
</span>
<span className="font-mono text-[11px] text-white/25 tracking-wider">
  Website design by Joe Ebner · Not affiliated with Weezer or DGC Records
</span>
      </div>
    </footer>
  );
}

function ContactRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-9 h-9 bg-[var(--blue)] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
        {icon}
      </div>
      <div>
        <div className="font-mono text-[10px] tracking-widest uppercase text-white/40 mb-0.5">{label}</div>
        <div className="text-sm text-white/70">{value}</div>
      </div>
    </div>
  );
}
