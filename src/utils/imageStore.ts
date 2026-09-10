// Client-side image persistence store for user-uploaded artifacts & photos
const STORAGE_KEY_PREFIX = 'portfolio_custom_image_';
const LISTENERS: Set<() => void> = new Set();

export function getCustomImage(id: string): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY_PREFIX + id);
  } catch (e) {
    console.warn('Could not read from localStorage', e);
    return null;
  }
}

export function setCustomImage(id: string, dataUrl: string): void {
  try {
    localStorage.setItem(STORAGE_KEY_PREFIX + id, dataUrl);
    notifyListeners();
  } catch (e) {
    console.warn('Could not write image to localStorage', e);
  }
}

export function removeCustomImage(id: string): void {
  try {
    localStorage.removeItem(STORAGE_KEY_PREFIX + id);
    notifyListeners();
  } catch (e) {
    console.warn('Could not remove image from localStorage', e);
  }
}

export function subscribeToImageStore(listener: () => void): () => void {
  LISTENERS.add(listener);
  return () => {
    LISTENERS.delete(listener);
  };
}

function notifyListeners() {
  LISTENERS.forEach((l) => l());
}
