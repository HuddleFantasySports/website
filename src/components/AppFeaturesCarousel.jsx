"use client";

import { useState, useEffect } from "react";

// Phone mock UI
function PhonePreview({ label }) {
  return (
    <div className="w-64 h-[480px] bg-white rounded-3xl shadow-lg overflow-hidden flex items-center justify-center">
      <div className="w-56 h-[440px] bg-gray-200 rounded-2xl flex items-center justify-center">
        <span className="text-gray-500">{label} Preview</span>
      </div>
    </div>
  );
}

export function AppFeaturesCarousel() {
  const features = ["Lineups", "Waivers", "Trades", "Drafts"];
  const [idx, setIdx] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setHidden(true), 2500);
    const swapTimer = setTimeout(() => {
      setIdx((i) => (i + 1) % features.length);
      setHidden(false);
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(swapTimer);
    };
  }, [idx]);

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center space-y-8 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12">
        {/* Dynamic Vote Text */}
        <div className="flex-1 text-center md:text-left text-2xl font-semibold">
          <span>Vote on </span>
          <span
            className={`
              inline-block px-1
              transition-opacity duration-500 ease-in-out
              bg-clip-text text-transparent
              bg-gradient-to-r from-cyan-400 to-purple-500
              ${hidden ? "opacity-0" : "opacity-100"}
            `}
          >
            {features[idx]}
          </span>
          <span> as a squad</span>
        </div>

        {/* App Preview Carousel */}
        <div className="flex-1 relative w-64 h-[480px] mx-auto">
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${
              hidden ? "opacity-0" : "opacity-100"
            }`}
          >
            <PhonePreview label={features[idx]} />
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="flex space-x-3">
        {features.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-2 w-8 rounded-full transition-colors duration-300 ${
              idx === i ? "bg-purple-500" : "bg-gray-400"
            }`}
            aria-label={`Go to ${features[i]}`}
          />
        ))}
      </div>
    </div>
  );
}
