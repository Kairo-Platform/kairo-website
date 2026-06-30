export const KAIRO_CONTACT = {
  address: "4b Babatope Bejide Street, Lekki Phase 1, Lagos.",
  privacyEmail: "privacy@usekairo.co",
  legalEmail: "legal@usekairo.co",
  businessEmail: "business@usekairo.co",
  legalEntityName: "First Frontier Technologies Limited",
} as const;

export function createMailtoHref(email: string, subject?: string) {
  if (!subject) return `mailto:${email}`;

  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}

export const businessMailto = (subject: string) =>
  createMailtoHref(KAIRO_CONTACT.businessEmail, subject);
