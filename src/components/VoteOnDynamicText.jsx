// components/HomeDynamicText.jsx
"use client";

import { useEffect, useState } from "react";

export function HomeDynamicText() {
  const options = [
    "Lineups",
    "Waivers",
    "Trades",
    "Squad Gamification",
    "Drafts",
  ];
  const [idx, setIdx] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // start fade‐out at 4.5s
    const fadeTimer = setTimeout(() => setHidden(true), 2500);
    // swap word + fade‐in at 5s
    const swapTimer = setTimeout(() => {
      setIdx((i) => (i + 1) % options.length);
      setHidden(false);
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(swapTimer);
    };
  }, [idx]);

  return (
    <div className="w-full max-w-md mx-auto text-center text-2xl font-semibold">
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
        {options[idx]}
      </span>
      <span> as a squad</span>
    </div>
  );
}
