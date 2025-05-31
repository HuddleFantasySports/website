"use client";

import React from "react";

const giveAwayItems = [
  {
    title: "Philanthropy / Goodwill Donations",
    description:
      "Offset your CSR goals while driving impact. Squads compete for a donation pool—your brand gets the goodwill, they get to give back.",
    imgSrc: "/images/placeholder-donation.svg",
  },
  {
    title: "Merch & Discount Giveaways",
    description:
      "Put your brand in their hands. Squads win your products through weekly challenges—earning gear they’ll use, wear, and talk about.",
    imgSrc: "/images/placeholder-merch.svg",
  },
];

const unlockItems = [
  {
    title: "In-app Branding, Messaging, Promos",
    description:
      "Connect where your ideal customers are engaged. Run authentic, in-context ads and promos that align with team identity. Be the only national or local brand featured in each league.",
    imgSrc: "/images/placeholder-branding.svg",
  },
  {
    title: "Exclusive Affiliation with a League",
    description:
      "Own the spotlight—on social and in the app. Whether it’s users or fans, your brand becomes the face of the league you sponsor. Total exclusivity. Total exposure.",
    imgSrc: "/images/placeholder-affiliation.svg",
  },
];

export default function SponsorshipInclude() {
  return (
    <section className="py-12 px-4">
      {/* Centered Heading & Subtitle */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2 text-white">
          Sponsorships That Go Beyond Ads — Be Part of the Experience.
        </h2>
        <p className="text-lg text-gray-400">
          MESH leagues create real engagement, deep brand affinity, and 17 weeks
          of authentic exposure.
        </p>
      </div>

      {/* Stacked Sections */}
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Giveaway Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-center text-white">
            What your company can give away
          </h3>
          <div className="flex space-x-4 justify-center">
            {giveAwayItems.map((item) => (
              <div
                key={item.title}
                className="w-100 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 p-[2px]"
              >
                <div className="flex items-start p-3 bg-[#1E2329CC] rounded-[inherit] h-32">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="w-10 h-10 flex-shrink-0 mr-3"
                  />
                  <div>
                    <h4 className="text-md font-semibold mb-1">{item.title}</h4>
                    <p className="text-white -600 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Unlock Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-center text-white">
            Capabilities you unlock in return
          </h3>
          <div className="flex space-x-4 justify-center">
            {unlockItems.map((item) => (
              <div
                key={item.title}
                className="w-100 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 p-[2px]"
              >
                <div className="flex items-start p-3 bg-[#1E2329CC] rounded-[inherit] h-32">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="w-10 h-10 flex-shrink-0 mr-3"
                  />
                  <div>
                    <h4 className="text-md font-semibold mb-1">{item.title}</h4>
                    <p className="text-white-600 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
