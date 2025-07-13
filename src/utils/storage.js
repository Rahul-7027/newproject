const STORAGE_KEY = "formTemplates";

export function saveTemplates(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function loadTemplates() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : null;
}
