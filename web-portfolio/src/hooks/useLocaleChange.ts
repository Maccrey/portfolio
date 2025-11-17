import { useEffect } from "react";

export function useLocaleChange(callback: () => void) {
  useEffect(() => {
    document.addEventListener("maccrey-locale-change", callback);
    return () => document.removeEventListener("maccrey-locale-change", callback);
  }, [callback]);
}
