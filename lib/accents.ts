export type AccentKey = "blue" | "teal" | "amber" | "violet";

export const accentStyles: Record<
  AccentKey,
  { text: string; border: string; bg: string }
> = {
  blue: {
    text: "text-accent-blue",
    border: "border-t-accent-blue",
    bg: "bg-accent-blue",
  },
  teal: {
    text: "text-accent-teal",
    border: "border-t-accent-teal",
    bg: "bg-accent-teal",
  },
  amber: {
    text: "text-accent-amber",
    border: "border-t-accent-amber",
    bg: "bg-accent-amber",
  },
  violet: {
    text: "text-accent-violet",
    border: "border-t-accent-violet",
    bg: "bg-accent-violet",
  },
};
