export const localeKey = "locale-key";

export function setLocale(key: string) {
  return window.localStorage.setItem(localeKey, key);
}
export function getLocale() {
  return window.localStorage.getItem(localeKey);
}
