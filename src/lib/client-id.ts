/**
 * Safe UUID v4 generator — works in HTTP, HTTPS, everywhere.
 * 
 * `crypto.randomUUID()` is only available in "secure contexts" (HTTPS/localhost).
 * Since the site may be accessed over HTTP, we use a pure JS implementation
 * that generates RFC 4122 version 4 UUIDs using Math.random().
 */

const CLIENT_ID_KEY = "aicoloring-client-id";

function generateUUID(): string {
  // UUID v4 format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
  // where y is one of [8, 9, a, b]
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Get or create a persistent client ID stored in localStorage.
 * This ID can be sent as a header to backend services for quota tracking.
 */
export function getClientId(): string {
  if (typeof window === "undefined") {
    return "";
  }
  try {
    let id = localStorage.getItem(CLIENT_ID_KEY);
    if (!id) {
      id = generateUUID();
      localStorage.setItem(CLIENT_ID_KEY, id);
    }
    return id;
  } catch {
    // localStorage may not be available (e.g., private browsing in some browsers)
    return generateUUID();
  }
}

export { generateUUID };
