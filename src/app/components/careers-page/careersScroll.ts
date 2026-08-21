const SCROLL_Y_KEY = "kairo-careers-scroll-y";
const RESTORE_KEY = "kairo-careers-restore-scroll";

export function saveCareersScrollPosition() {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(SCROLL_Y_KEY, String(window.scrollY));
}

export function markCareersScrollRestore() {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(RESTORE_KEY, "1");
}

export function consumeCareersScrollPosition(): number | null {
  if (typeof window === "undefined") return null;

  if (sessionStorage.getItem(RESTORE_KEY) !== "1") {
    return null;
  }

  sessionStorage.removeItem(RESTORE_KEY);
  const raw = sessionStorage.getItem(SCROLL_Y_KEY);
  sessionStorage.removeItem(SCROLL_Y_KEY);

  if (raw == null) return null;

  const y = Number(raw);
  return Number.isFinite(y) ? y : null;
}
