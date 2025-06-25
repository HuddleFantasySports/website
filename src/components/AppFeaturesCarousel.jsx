"use client";

import { useState, useEffect } from "react";

const voteFeatures = {
  Lineups: [
    { text: "Build your Lineup Together", img: "/VoteOnImages/Lineups1.png" },
    { text: "Optimize Based on Consensus", img: "/VoteOnImages/Lineups2.png" },
    // { text: "Lock in Before Game Time", img: "/VoteOnImages/Lineups3.png" },
  ],
  Waivers: [
    { text: "Vote on Waiver Priorities", img: "/VoteOnImages/Waivers1.png" },
    { text: "Avoid Conflicts", img: "/VoteOnImages/Waivers2.png" },
    // { text: "Get Everyone Involved", img: "/VoteOnImages/Waivers3.png" },
  ],
  Trades: [
    { text: "Approve or Veto Trades", img: "/VoteOnImages/Trades1.png" },
    { text: "Fair Trades via Squad Input", img: "/VoteOnImages/Trades2.png" },
    { text: "Track Trade History", img: "/VoteOnImages/Trades3.png" },
  ],
  Drafts: [
    { text: "Vote on Draft Picks", img: "/VoteOnImages/Draft1.png" },
    { text: "Team Strategy Comes First", img: "/VoteOnImages/Draft2.png" },
    { text: "Celebrate Your Top Picks", img: "/VoteOnImages/Draft3.png" },
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
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const category = categories[categoryIdx];
  const slides = voteFeatures[category];

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center space-y-8 py-8 px-2 sm:px-4 relative">
      {/* Heading */}
      <div className="text-center text-lg sm:text-2xl font-semibold">
        <p className="mb-2">
          Vote on{" "}
          <span
            className={`inline-block px-1 bg-clip-text text-transparent bg-gradient-to-r from-[#8A70F5] to-[#3DE29F] transition-opacity duration-500 ease-in-out ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {category}
          </span>{" "}
          as a Squad
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full flex items-center justify-center">
        {/* Hide arrows on mobile, show on sm+ */}
        <button
          className="hidden sm:block absolute left-0 text-2xl px-2 py-1 text-gray-400 hover:text-white z-10 top-1/2 -translate-y-1/2"
          onClick={() => {
            setFade(false);
            setTimeout(() => {
              setCategoryIdx(
                (categoryIdx - 1 + categories.length) % categories.length
              );
              setFade(true);
            }, 300);
          }}
          aria-label="Previous"
        >
          &#8592;
        </button>

        <div
          className={`flex justify-center items-center gap-2 xs:gap-3 sm:gap-6 transition-opacity duration-500 ease-in-out ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="w-28 h-40 xs:w-36 xs:h-56 sm:w-72 sm:h-[540px] rounded-2xl shadow-lg overflow-hidden flex flex-col items-center justify-center"
            >
              <div
                className="w-24 h-32 xs:w-32 xs:h-48 sm:w-64 sm:h-[500px] rounded-xl flex items-center justify-center cursor-pointer"
                onClick={() => setModalImage(slide.img)}
              >
                <img
                  src={slide.img}
                  alt={slide.text}
                  className="h-full w-full object-contain rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>

        <button
          className="hidden sm:block absolute right-0 text-2xl px-2 py-1 text-gray-400 hover:text-white z-10 top-1/2 -translate-y-1/2"
          onClick={() => {
            setFade(false);
            setTimeout(() => {
              setCategoryIdx((categoryIdx + 1) % categories.length);
              setFade(true);
            }, 300);
          }}
          aria-label="Next"
        >
          &#8594;
        </button>
      </div>

      {/* Progress indicators */}
      <div className="flex space-x-2 mt-4">
        {categories.map((_, i) => (
          <div
            key={i}
            className={`h-1 w-6 sm:w-10 rounded-full transition-colors duration-300 ${
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
