import { useEffect, useMemo, useState } from "react";

interface BrandLogoProps {
  className?: string;
  alt?: string;
}

const LOGO_DARK =
  "https://cdn.builder.io/api/v1/image/assets%2F1da36f95da37465c94eb5c810eac35c8%2Fe0dc083b75d04e75a99d8c4ee7226917?format=webp&width=800"; // white logo
const LOGO_LIGHT =
  "https://cdn.builder.io/api/v1/image/assets%2F1da36f95da37465c94eb5c810eac35c8%2F6ac2946c44574b16a0c5acc459426f9d?format=webp&width=800"; // black logo

export default function BrandLogo({
  className = "h-14 w-auto",
  alt = "Brand logo",
}: BrandLogoProps) {
  const getInitialDark = () =>
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark");

  const [isDark, setIsDark] = useState<boolean>(getInitialDark());

  useEffect(() => {
    const handler = () => setIsDark(getInitialDark());
    window.addEventListener("theme-change", handler as EventListener);
    // Fallback: observe class changes on <html>
    const observer = new MutationObserver(handler);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => {
      window.removeEventListener("theme-change", handler as EventListener);
      observer.disconnect();
    };
  }, []);

  const src = useMemo(() => (isDark ? LOGO_DARK : LOGO_LIGHT), [isDark]);

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} object-contain`}
      loading="eager"
      fetchPriority="high"
      decoding="async"
    />
  );
}
