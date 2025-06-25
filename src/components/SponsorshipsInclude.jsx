"use client";

import React from "react";

const giveAwayItems = [
  {
    title: "Philanthropy / Goodwill Donations",
    subtitle: "Offset your CSR goals while driving impact.",
    description:
      "Squads compete for a donation pool—your brand gets the goodwill, they get to give back.",
    imgSrc: "/Sponsorships/goodwill.png",
  },
  {
    title: "Merch & Discount Giveaways",
    subtitle: "Put your brand in their hands.",
    description:
      "Squads win your products through weekly challenges—earning gear they’ll use, wear, and talk about.",
    imgSrc: "/Sponsorships/apparel.png",
  },
];

const unlockItems = [
  {
    title: "In-app Branding, Messaging, Promos",
    subtitle: "Connect where your ideal customers are engaged.",
    description:
      "Run authentic, in-context ads and promos that align with team identity. Be the only national or local brand featured in each league.",
    imgSrc: "/Sponsorships/horn.png",
  },
  {
    title: "Exclusive Affiliation with a League",
    subtitle: "Own the spotlight—on social and in the app.",
    description:
      "Whether it’s users or fans, your brand becomes the face of the league you sponsor. Total exclusivity. Total exposure.",
    imgSrc: "/Sponsorships/affiliation.png",
  },
];

export default function SponsorshipInclude() {
  return (
    <section className="py-8 px-2 sm:py-12 sm:px-4">
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
        {/* Giveaway Section */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-white">
            What your company can give away
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4 sm:gap-0 justify-center items-stretch">
            {giveAwayItems.map((item) => (
              <div
                key={item.title}
                className="w-full sm:w-96 rounded-2xl bg-gradient-to-r from-[#8A70F5] to-[#3DE29F] p-[1px] flex-shrink-0"
              >
                {/* Inner card */}
                <div className="bg-[#212731] rounded-[inherit] p-3 flex items-start h-full space-x-3">
                  {/* Icon */}
                  <div className="p-[2px] w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-2xl flex items-center border border-[#8A70F5] bg-[#212731]">
                    <img
                      src={item.imgSrc}
                      alt={item.title}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mx-auto"
                    />
                  </div>
                  {/* Text content */}
                  <div className="flex flex-col justify-center">
                    <h4 className="text-left text-sm sm:text-md font-semibold mb-1 text-white">
                      {item.title}
                    </h4>
                    <p className="text-left text-xs sm:text-sm text-[#8261C2] font-bold">
                      {item.subtitle}
                    </p>
                    <p className="text-left text-[#3AB298] text-xs sm:text-sm font-bold">
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
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-white">
            Capabilities you unlock in return
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4 sm:gap-0 justify-center items-stretch">
            {unlockItems.map((item) => (
              <div
                key={item.title}
                className="w-full sm:w-96 rounded-2xl bg-gradient-to-r from-[#8A70F5] to-[#3DE29F] p-[1px] flex-shrink-0"
              >
                {/* Inner card */}
                <div className="bg-[#212731] rounded-[inherit] p-3 flex items-start h-full space-x-3">
                  {/* Icon */}
                  <div className="p-[2px] w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-2xl flex items-center border border-[#8A70F5] bg-[#212731]">
                    <img
                      src={item.imgSrc}
                      alt={item.title}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mx-auto"
                    />
                  </div>
                  {/* Text content */}
                  <div className="flex flex-col justify-center">
                    <h4 className="text-left text-sm sm:text-md font-semibold mb-1 text-white">
                      {item.title}
                    </h4>
                    <p className="text-left text-xs sm:text-sm text-[#8261C2] font-bold">
                      {item.subtitle}
                    </p>
                    <p className="text-left text-[#3AB298] text-xs sm:text-sm font-bold">
                      {item.description}
                    </p>
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
