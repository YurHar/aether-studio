export const CHAT_HINT_TEXT = "Let's talk with Aether AI";

export const CAPABILITIES = [
  "Interface Design",
  "Motion",
  "Prototyping",
  "Front-end",
] as const;

export const CONTACT_INFO = {
  email: "tech@aether.studio",
  availability: "Open for select collaborations",
  timezones: "GMT+4 • JST • EST friendly",
};

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "Twitter", href: "#" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yuri-harutyunyan/",
  },
] as const;

export type CityId = "tokyo" | "newyork";

export const CITY_CONFIG: Record<
  CityId,
  { name: string; timezone: string; markerPosition: { left: string; top: string } }
> = {
  tokyo: {
    name: "Tokyo, JP",
    timezone: "JST (UTC+9)",
    markerPosition: { left: "68%", top: "38%" },
  },
  newyork: {
    name: "New York, US",
    timezone: "EST (UTC-5 / UTC-4)",
    markerPosition: { left: "24%", top: "46%" },
  },
};
