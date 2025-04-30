import React, { useState, useEffect } from "react";

// A simple phone frame placeholder
function PhonePreview({ label }) {
  return (
    <div className="w-64 h-[480px] bg-white rounded-3xl shadow-lg overflow-hidden flex items-center justify-center">
      <div className="w-56 h-[440px] bg-gray-200 rounded-2xl flex items-center justify-center">
        <span className="text-gray-500">{label || "Screen"} Preview</span>
      </div>
    </div>
  );
}

// Carousel of phone previews (only one visible at a time, with fade transition)
export function AppPreviewCarouselPlaceholder() {
  const screens = [
    "Lineups",
    "Waivers",
    "Trades",
    "Squad Gamification",
    "Drafts",
  ];
  const [idx, setIdx] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // fade-out after 4.5s
    const fadeTimer = setTimeout(() => setHidden(true), 2500);
    // swap and fade-in at 5s
    const swapTimer = setTimeout(() => {
      setIdx((i) => (i + 1) % screens.length);
      setHidden(false);
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(swapTimer);
    };
  }, [idx]);

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <div className="relative w-64 h-[480px] mx-auto">
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${
            hidden ? "opacity-0" : "opacity-100"
          }`}
        >
          <PhonePreview label={screens[idx]} />
        </div>
      </div>
    </div>
  );
}
