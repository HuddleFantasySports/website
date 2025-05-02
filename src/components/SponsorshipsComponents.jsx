import React from "react";

// Section: Case Study
export function CaseStudySection() {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto  px-6 py-12 rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="max-w-prose">
          <h2 className="text-2xl font-bold mb-2">
            From Sponsor to Squad Favorite
          </h2>
          <p className="text-lg font-medium mb-6">
            How Monster Energy Saw an 81% Brand Affinity Boost
          </p>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong>81% Brand Affinity Increase</strong> – Perception jumped
              from 4.3 to 7.8/10 after sponsoring the Univ Greek League.
            </li>
            <li>
              <strong>Campus-Wide Engagement</strong> – Reached 1,200+ students
              with millions of in-app impressions at $2–3 CPM.
            </li>
            <li>
              <strong>Gamified Sponsorship</strong> – Giveaways, in-app
              activations, and incentives kept Monster central all season.
            </li>
          </ul>
        </div>
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
          {/* Replace with actual image */}
          <span className="text-gray-400">Image Placeholder</span>
        </div>
      </div>
    </section>
  );
}

// Section: Engagement Features
export function EngagementSection() {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-6 ">
        <h2 className="text-2xl font-bold text-center mb-2">
          Get Involved, Not Ignored.
        </h2>
        <p className="text-center mb-8">
          Build lasting relationships with Gen Z through immersive, value-driven
          experiences.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-500 p-6 rounded-lg shadow max-w-xs mx-auto">
            <h3 className="font-semibold mb-2">Philanthropy Donations</h3>
            <p className="text-sm ">
              Associate your brand with Greek and campus causes for goodwill and
              student trust.
            </p>
          </div>
          <div className="bg-gray-500 not-only:p-6 rounded-lg shadow max-w-xs mx-auto">
            <h3 className="font-semibold mb-2">In-App Exposure</h3>
            <p className="text-sm ">
              Custom messaging, gamified activations, and weekly touchpoints
              that keep you top-of-mind.
            </p>
          </div>
          <div className="bg-gray-500 p-6 rounded-lg shadow max-w-xs mx-auto">
            <h3 className="font-semibold mb-2">Exclusive Merch & Giveaways</h3>
            <p className="text-sm ">
              Reward top squads with branded prizes, discounts, and in-league
              hype.
            </p>
          </div>
          <div className="bg-gray-500 p-6 rounded-lg shadow max-w-xs mx-auto">
            <h3 className="font-semibold mb-2">Local Business Boosts</h3>
            <p className="text-sm ">
              Drive foot traffic with exclusive in-league offers and brand
              integrations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Section: League Sponsorships
export function LeaguesSection() {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-6 py-12 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-2">
          Not Just for College Students—Sponsor a League That Fits Your
          Audience.
        </h2>
        <p className="text-center  mb-8">
          Whether you're targeting college students, influencers, or corporate
          teams, MESH creates immersive brand experiences that deliver real
          results.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gray-500 p-6 rounded-lg shadow max-w-xs mx-auto">
            <h3 className="font-semibold mb-2">Greek Life Leagues</h3>
            <p className="text-sm ">
              Connect with college students in high-energy, social-driven
              leagues.
            </p>
          </div>
          <div className="bg-gray-500 p-6 rounded-lg shadow max-w-xs mx-auto">
            <h3 className="font-semibold mb-2">Influencer Leagues</h3>
            <p className="text-sm ">
              Partner with digital creators and reach their highly engaged
              audiences.
            </p>
          </div>
          <div className="bg-gray-500 p-6 rounded-lg shadow max-w-xs mx-auto">
            <h3 className="font-semibold mb-2">Bar & Restaurant Leagues</h3>
            <p className="text-sm ">
              Drive traffic and weekly engagement through local competition
              leagues.
            </p>
          </div>
          <div className="bg-gray-500 p-6 rounded-lg shadow max-w-xs mx-auto">
            <h3 className="font-semibold mb-2">Corporate Leagues</h3>
            <p className="text-sm ">
              Boost employee engagement while staying top-of-mind with business
              leaders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
