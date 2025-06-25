"use client";

import { useState } from "react";

function SponsorshipsToggle() {
  // ← Remove the `<"local" | "national">` type annotation here:
  const [activeType, setActiveType] = useState("local");

  return (
    <section className="py-12 text-white">
      {/* Toggle Intro */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Choose Your Sponsorship Type
        </h2>
        <p className="max-w-xl mx-auto">
          Mesh supports 1 exclusive, non-competitive local & national brand per
          league.
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveType("local")}
          onMouseEnter={() => setActiveType("local")}
          className={`
            px-6 py-2 rounded-full border transition
            ${
              activeType === "local"
                ? "bg-white text-black"
                : "border-white text-white hover:bg-white hover:text-black"
            }
          `}
        >
          Local
        </button>
        <button
          onClick={() => setActiveType("national")}
          onMouseEnter={() => setActiveType("national")}
          className={`
            px-6 py-2 rounded-full border transition
            ${
              activeType === "national"
                ? "bg-white text-black"
                : "border-white text-white hover:bg-white hover:text-black"
            }
          `}
        >
          National
        </button>
      </div>

      {/* Only render the active pane, so the container’s height adjusts automatically */}
      <div className="max-w-6xl mx-auto px-4">
        {activeType === "local" && (
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Column: Centered Phone + Benefits */}
            <div className="flex flex-col items-center space-y-6">
              <div className="w-full max-w-sm">
                <img
                  src="/Sponsorships/appPreviewLocal.png"
                  alt="App Phone Mockup"
                  className="w-full h-auto rounded-[inherit]"
                />
              </div>
              <div className="text-left space-y-2">
                <h3 className="text-xl font-semibold">Benefits</h3>
                <ul className="list-disc list-inside ml-4 text-gray-200">
                  <li>Drive foot-traffic with mass</li>
                  <li>Become a life-long favorite</li>
                  <li>Connect anytime, for any reason</li>
                  <li>Stand out in a way no other brand does</li>
                </ul>
                <p className="mt-4 text-gray-300">
                  Endless possibilities on what to send – the best part: we have
                  templates and ideas for your business ready to go. Connect in
                  an authentic, attention-grabbing way!
                </p>
              </div>
            </div>

            {/* Right Column: Fred’s Bar & Grill (gradient border & dark bg) */}
            <div className="bg-gradient-to-r from-[#8A70F5] to-[#3DE29F] rounded-2xl p-[1px]">
              <div className="bg-[#212731] rounded-[inherit] p-4 space-y-6">
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Fred’s Bar &amp; Grill
                </h3>

                {/* Announcement #1 */}
                <div className="bg-gradient-to-r from-[#8A70F5] to-[#3DE29F] rounded-lg p-[1px]">
                  <div className="flex items-start bg-[#212731] rounded-[inherit] p-4 space-x-4">
                    <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-[#212731]">
                      <img
                        src="/Sponsorships/restaurant.png"
                        alt="Fred’s Icon"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-left text-white font-semibold mb-1">
                        BIG UNIVERSITY FOOTBALL WIN
                      </h4>
                      <p className="text-left text-[#8261C2] font-bold text-sm">
                        Come celebrate the big win @ Fred’s
                        <span className="text-left block text-[#3AB298] mt-1">
                          50% off drinks or food for all league members. Skip
                          the LINE by showing this pass: FREDxMESH
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Announcement #2 */}
                <div className="bg-gradient-to-r from-[#8A70F5] to-[#3DE29F] rounded-lg p-[1px]">
                  <div className="flex items-start bg-[#212731] rounded-[inherit] p-4 space-x-4">
                    <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-[#212731]">
                      <img
                        src="/Sponsorships/restaurant.png"
                        alt="Fred’s Icon"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-left text-white font-semibold mb-1">
                        THURSDAY NIGHT FOOTBALL
                      </h4>
                      <p className="text-left text-[#8261C2] font-bold text-sm">
                        Don't watch the game HUNGRY
                        <span className="text-left block text-[#3AB298] mt-1">
                          Best wings in town, for FREE when you bring 5 guys and
                          order a drink! Let’s watch the Seahawks get the win!
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Announcement #3 */}
                <div className="bg-gradient-to-r from-[#8A70F5] to-[#3DE29F] rounded-lg p-[1px]">
                  <div className="flex items-start bg-[#212731] rounded-[inherit] p-4 space-x-4">
                    <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-[#212731]">
                      <img
                        src="/Sponsorships/restaurant.png"
                        alt="Fred’s Icon"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-left text-white font-semibold mb-1">
                        Congrats Sigma Chi
                      </h4>
                      <p className="text-left text-[#8261C2] font-bold text-sm">
                        High Scores week 15!
                        <span className=" text-left block text-[#3AB298] mt-1">
                          Sigma Chi dominated last week. Sig Chi's come get a
                          free T-shirt with any order this week! 1 per member
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeType === "national" && (
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Column: Centered Phone + Benefits */}
            <div className="flex flex-col items-center space-y-6">
              <div className="w-full max-w-sm">
                <img
                  src="/Sponsorships/AppNational.png"
                  alt="App Phone Mockup"
                  className="w-full h-auto rounded-[inherit]"
                />
              </div>
              <div className="text-left space-y-2">
                <h3 className="text-xl font-semibold">Benefits</h3>
                <ul className="list-disc list-inside ml-4 text-gray-200">
                  <li>Drive targeted web traffic</li>
                  <li>Highlight new products &amp; sales</li>
                  <li>Connect anytime, for any reason</li>
                  <li>Stand out in a way no other brand does</li>
                </ul>
                <p className="mt-4 text-gray-300">
                  Endless possibilities on what to send – the best part: we have
                  templates and ideas for your business ready to go. Connect in
                  an authentic, attention-grabbing way!
                </p>
              </div>
            </div>

            {/* Right Column: BrandX */}
            <div className="bg-gradient-to-r from-[#8A70F5] to-[#3DE29F] rounded-2xl p-[1px]">
              <div className="bg-[#212731] rounded-[inherit] space-y-6 p-4">
                <h3 className="text-lg font-semibold mb-4 text-white">
                  BrandX
                </h3>

                {/* Announcement #1 */}
                <div className="bg-gradient-to-r from-[#8A70F5] to-[#3DE29F] rounded-lg p-[1px]">
                  <div className="flex items-start bg-[#212731] rounded-[inherit] p-4 space-x-4">
                    <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-[#212731]">
                      <img
                        src="/Sponsorships/brand.png"
                        alt="BrandX Icon"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-left text-white font-semibold mb-1">
                        🔥 Win a Squad Pack from BrandX
                      </h4>
                      <p className="text-left text-[#8261C2] text-sm font-bold">
                        TOP SCORING FRATERNITIES FOR WEEK 12
                        <br />
                        <span className="text-left text-[#3AB298] font-bold block mt-1">
                          This week, 3 lucky squads will win a BrandX Prize
                          Pack—tees, hats, and more.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Announcement #2 */}
                <div className="bg-gradient-to-r from-[#8A70F5] to-[#3DE29F] rounded-lg p-[1px]">
                  <div className="flex items-start bg-[#212731] rounded-[inherit] p-4 space-x-4">
                    <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-[#212731]">
                      <img
                        src="/Sponsorships/brand.png"
                        alt="BrandX Icon"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-left text-white font-semibold mb-1">
                        🧃 New Drop from BrandX
                      </h4>
                      <p className="text-left text-[#8261C2] text-sm font-bold">
                        FLAVOR LAUNCH JUST HIT CAMPUS
                        <br />
                        <span className="text-left text-[#3AB298] font-bold block mt-1">
                          Something fresh is brewing… Keep an eye out for the
                          new PEACH can from Hoop Tea. Chill vibes. Big flavor.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Announcement #3 */}
                <div className="bg-gradient-to-r from-[#8A70F5] to-[#3DE29F] rounded-lg p-[1px]">
                  <div className="flex items-start bg-[#212731] rounded-[inherit] p-4 space-x-4">
                    <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-[#212731]">
                      <img
                        src="/Sponsorships/brand.png"
                        alt="BrandX Icon"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-left text-white font-semibold mb-1">
                        📘 BRANDX NFL Fact of the Week
                      </h4>
                      <p className="text-left text-[#8261C2] text-sm font-bold">
                        BRADY’S GOT MORE RINGS THAN TEAMS
                        <br />
                        <span className="text-left text-[#3AB298] font-bold block mt-1">
                          Tom Brady has 7 rings—more than any NFL franchise.
                          That’s one for each flavor of BRANDX! Greatness hits
                          different.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default SponsorshipsToggle;
