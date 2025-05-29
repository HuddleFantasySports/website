"use client";

import { useState, useEffect } from "react";

const voteFeatures = {
  Lineups: [
    { text: "Build your Lineup Together", img: "/VoteOnImages/1.png" },
    { text: "Optimize Based on Consensus", img: "/VoteOnImages/2.png" },
    { text: "Lock in Before Game Time", img: "/VoteOnImages/3.png" },
  ],
  Waivers: [
    { text: "Vote on Waiver Priorities", img: "/VoteOnImages/4.png" },
    { text: "Avoid Conflicts", img: "/VoteOnImages/5.png" },
    { text: "Get Everyone Involved", img: "/VoteOnImages/6.png" },
  ],
  Trades: [
    { text: "Approve or Veto Trades", img: "/VoteOnImages/7.png" },
    { text: "Fair Trades via Squad Input", img: "/VoteOnImages/8.png" },
    { text: "Track Trade History", img: "/VoteOnImages/9.png" },
  ],
  Drafts: [
    { text: "Vote on Draft Picks", img: "/VoteOnImages/10.png" },
    { text: "Team Strategy Comes First", img: "/VoteOnImages/11.png" },
    { text: "Celebrate Your Top Picks", img: "/VoteOnImages/12.png" },
  ],
};

const categories = Object.keys(voteFeatures);

export function AppFeaturesCarousel() {
  const [categoryIdx, setCategoryIdx] = useState(0);
  const [fade, setFade] = useState(true);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCategoryIdx((prev) => (prev + 1) % categories.length);
        setFade(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const category = categories[categoryIdx];
  const slides = voteFeatures[category];

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center space-y-8 py-12 px-4 relative">
      {/* Static Heading with dynamic feature in gradient and fade */}
      <div className="text-center text-2xl font-semibold">
        <p className="mb-2">
          Vote on{" "}
          <span
            className={`inline-block px-1 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 transition-opacity duration-500 ease-in-out ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {category}
          </span>{" "}
          as a squad
        </p>
      </div>

      {/* Phone previews with arrows and fade */}
      <div className="relative w-full flex items-center justify-center">
        <button
          className="absolute left-0 text-2xl px-4 py-2 text-gray-400 hover:text-white"
          onClick={() => {
            setFade(false);
            setTimeout(() => {
              setCategoryIdx(
                (categoryIdx - 1 + categories.length) % categories.length
              );
              setFade(true);
            }, 300);
          }}
        >
          &#8592;
        </button>

        <div
          className={`flex justify-center items-center gap-6 transition-opacity duration-500 ease-in-out ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="w-72 h-[540px] rounded-3xl shadow-lg overflow-hidden flex flex-col items-center justify-center"
            >
              <div className="w-64 h-[500px] rounded-2xl flex items-center justify-center">
                <img
                  src={slide.img}
                  alt={slide.text}
                  className="h-full w-full object-contain rounded-2xl"
                />
              </div>
            </div>
          ))}
        </div>

        <button
          className="absolute right-0 text-2xl px-4 py-2 text-gray-400 hover:text-white"
          onClick={() => {
            setFade(false);
            setTimeout(() => {
              setCategoryIdx((categoryIdx + 1) % categories.length);
              setFade(true);
            }, 300);
          }}
        >
          &#8594;
        </button>
      </div>

      {/* Thin progress bar indicators */}
      <div className="flex space-x-2 mt-6">
        {categories.map((_, i) => (
          <div
            key={i}
            className={`h-1 w-10 rounded-full transition-colors duration-300 ${
              i === categoryIdx ? "bg-purple-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Modal preview */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={() => setModalImage(null)}
        >
          <img
            src={modalImage}
            alt="Enlarged preview"
            className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}

export default AppFeaturesCarousel;
