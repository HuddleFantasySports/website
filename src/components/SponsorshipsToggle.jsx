"use client";

import { useState } from "react";

function SponsorshipsToggle() {
  const [activeType, setActiveType] = useState("local");

  return (
    <section className="py-12 text-white">
      {/* Toggle Intro */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Choose Your Sponsorship Type
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          Mesh supports 1 exclusive, non-competitive local & national brand per
          league
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveType("local")}
          onMouseEnter={() => setActiveType("local")}
          className={`px-6 py-2 rounded-full border transition ${
            activeType === "local"
              ? "bg-white text-black"
              : "border-white text-white hover:bg-white hover:text-black"
          }`}
        >
          Local
        </button>
        <button
          onClick={() => setActiveType("national")}
          onMouseEnter={() => setActiveType("national")}
          className={`px-6 py-2 rounded-full border transition ${
            activeType === "national"
              ? "bg-white text-black"
              : "border-white text-white hover:bg-white hover:text-black"
          }`}
        >
          National
        </button>
      </div>

      {/* Local Layout */}
      {activeType === "local" && (
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Column: Centered Phone Mockup + Benefits */}
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
                  Endless possibilities on what to send – best part: we have
                  templates and ideas for your business ready to go. Connect in
                  an authentic, attention-grabbing way!
                </p>
              </div>
            </div>

            {/* Right Column: Fred’s Bar & Grill */}
            <div className="bg-[#1E2329CC] rounded-2xl border border-gray-600 p-4 space-y-6">
              <h3 className="text-lg font-semibold mb-4">
                Fred’s Bar &amp; Grill
              </h3>

              {/* Announcement #1 */}
              <div className="flex bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-1">
                <div className="flex items-start bg-[#1E2329CC] rounded-[inherit] flex-1 p-4 space-x-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 7v4a1 1 0 001 1h.586M7 11h10l3 4H7v-4zM12 3v6"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1">
                      BIG UNIVERSITY FOOTBALL WIN
                    </h4>
                    <p className="text-green-300 text-sm">
                      Come celebrate the big win @ Fred’s –{" "}
                      <span className="font-bold">
                        50% off drinks or food for all league members.
                      </span>{" "}
                      Skip the LINE by showing this pass:{" "}
                      <span className="text-yellow-300 font-semibold">
                        FREDxMESH
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Announcement #2 */}
              <div className="flex bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-1">
                <div className="flex items-start bg-[#1E2329CC] rounded-[inherit] flex-1 p-4 space-x-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4M16 12h-8m8 4H8m0 0l-4-8m16 8l-4-8"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1">
                      THURSDAY NIGHT FOOTBALL
                    </h4>
                    <p className="text-green-300 text-sm">
                      Don’t watch the game HUNGRY: Best wings in town, for{" "}
                      <span className="font-bold">
                        FREE when you bring 5 guys and order a drink!
                      </span>{" "}
                      Let’s watch the Seahawks get the win!
                    </p>
                  </div>
                </div>
              </div>

              {/* Announcement #3 */}
              <div className="flex bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-1">
                <div className="flex items-start bg-[#1E2329CC] rounded-[inherit] flex-1 p-4 space-x-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1">
                      Congrats Sigma Chi
                    </h4>
                    <p className="text-green-300 text-sm">
                      High scorers week 15! Sigma Chi dominated last week…{" "}
                      <span className="font-bold">
                        Sigma Chi’s come get a free T-shirt with any order this
                        week! (1 per member)
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* National Layout */}
      {activeType === "national" && (
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Column: Centered Phone Mockup + Benefits */}
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
                  Endless possibilities on what to send – best part: we have
                  templates and ideas for your business ready to go. Connect in
                  an authentic, attention-grabbing way!
                </p>
              </div>
            </div>

            {/* Right Column: BrandX + Announcement Boxes */}
            <div className="bg-[#1E2329CC] rounded-2xl border border-gray-600 p-4 space-y-6">
              <h3 className="text-lg font-semibold mb-4">BrandX</h3>

              {/* Announcement #1 */}
              <div className="flex bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-1">
                <div className="flex items-start bg-[#1E2329CC] rounded-[inherit] flex-1 p-4 space-x-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center">
                    {/* Replace with BrandX icon if available */}
                    <img
                      src="/Sponsorships/brandx-icon.png"
                      alt="BrandX Icon"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1">
                      🔥 Win a Squad Pack from BrandX
                    </h4>
                    <p className="text-green-300 text-sm">
                      TOP SCORING FRATERNITIES FOR WEEK 12
                      <br />
                      <span className="text-white">
                        This week, 3 lucky squads will win a BrandX Prize
                        Pack—tees, hats, and more.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Announcement #2 */}
              <div className="flex bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-1">
                <div className="flex items-start bg-[#1E2329CC] rounded-[inherit] flex-1 p-4 space-x-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center">
                    {/* Replace with BrandX icon if available */}
                    <img
                      src="/Sponsorships/brandx-icon.png"
                      alt="BrandX Icon"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1">
                      🍹 New Drop from BrandX
                    </h4>
                    <p className="text-green-300 text-sm">
                      FLAVOR LAUNCH JUST HIT CAMPUS
                      <br />
                      <span className="text-white">
                        Something fresh is brewing… Keep an eye out for the new
                        PEACH can from Hoop Tea. Chill vibes. Big flavor.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Announcement #3 */}
              <div className="flex bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-1">
                <div className="flex items-start bg-[#1E2329CC] rounded-[inherit] flex-1 p-4 space-x-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center">
                    {/* Replace with BrandX icon if available */}
                    <img
                      src="/Sponsorships/brandx-icon.png"
                      alt="BrandX Icon"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1">
                      📺 BRANDX NFL Fact of the Week
                    </h4>
                    <p className="text-green-300 text-sm">
                      BRADY’S GOT MORE RINGS THAN TEAMS
                      <br />
                      <span className="text-white">
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
    </section>
  );
}

export default SponsorshipsToggle;
