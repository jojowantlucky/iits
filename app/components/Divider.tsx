const colors: Record<string, string> = {
  red:   "var(--red)",
  green: "var(--green)",
  sky:   "var(--sky)",
  blue:  "var(--blue)",
};

export default function Divider({ color }: { color: "red" | "green" | "sky" | "blue" }) {
  return <div style={{ height: 6, background: colors[color] }} aria-hidden />;
}
