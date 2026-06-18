import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Island in the Sun — Weezer Tribute Band | Portland, OR",
  description:
    "Portland's premier Weezer tribute band. Available for clubs, festivals, and private events across Oregon and Washington. Book Island in the Sun today.",
  openGraph: {
    title: "Island in the Sun — Weezer Tribute",
    description: "Portland's Weezer tribute band. We play the hits, we play the deep cuts, we play all of it.",
    url: "https://islandinthesun.band",
    siteName: "Island in the Sun",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
