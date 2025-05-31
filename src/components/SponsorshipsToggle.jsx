import { useState } from "react";

function SponsorshipsToggle() {
  const [activeType, setActiveType] = useState("local");

  const sponsorshipData = {
    local: {
      title: "Be the MVP of the Greek System",
      points: [
        "🏈 Up to 500 direct players per league plus thousands more across campus.",
        "💡 Your brand is front and center during every league engagement.",
        "🎯 Hyper-local targeting at the chapter and school level.",
        "❤️ Support fraternity philanthropies through impactful donations.",
        "📲 Promote in-app deals that drive students to your location.",
        "🎉 Participate in exclusive giveaways, social events, and campus activations.",
        "📢 Custom push notifications and messaging (with exclusive packages).",
        "🚀 250% more foot traffic driven with exclusive sponsorship level.",
        "📸 Potential social media collaborations for wider reach.",
      ],
      imageAlt: "Local sponsorship opportunity highlights",
    },
    national: {
      title: "Become Part of a Greek System Tradition",
      points: [
        "🔥 81% brand affinity boost — from 4.3 to 7.8 after sponsorship (University of Washington case study).",
        "🏛️ Sponsor entire university leagues made up of 10–12 fraternities and up to 1,500 student members.",
        "🎯 Target 1,000–3,000 in-app users with 1.3M–4M seasonal impressions.",
        "🎁 Gamified Prizes — reward top performing squads and drive brand loyalty.",
        "💬 In-App Messaging — promote special offers directly to students.",
        "❤️ Philanthropic Donations — build goodwill while supporting student causes.",
        "💰 Competitive CPM (as low as $2.45) for deep Gen Z engagement.",
        "📈 Massive brand visibility throughout the full fantasy season (Sept–Jan).",
        "📞 Custom university selection available — sponsor by region or category (e.g., energy drinks, delivery).",
      ],
      imageAlt: "National sponsorship opportunity overview",
    },
  };

  const content = sponsorshipData[activeType];

  return (
    <section className="py-12 text-white">
      {/* Toggle Intro */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Choose Your Sponsorship Type
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          Mesh supports 1 exclusive, non-compeitive local & national brand per
          league
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        {["local", "national"].map((type) => (
          <button
            key={type}
            onClick={() => setActiveType(type)}
            onMouseEnter={() => setActiveType(type)}
            className={`px-6 py-2 rounded-full border transition ${
              activeType === type
                ? "bg-white text-black"
                : "border-white text-white hover:bg-white hover:text-black"
            }`}
          >
            {type === "local" ? "Local-Level" : "National"}
          </button>
        ))}
      </div>

      {/* Dynamic Content */}
      <div className="max-w-5xl mx-auto px-4">
        {activeType === "local" && (
          <>
            {/* Audience Overview */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Who's Competing?</h3>
              <p>
                Each league has 8–12 fraternities with 20–50 members each,
                reaching up to 500 players directly and thousands more across
                Greek life.
              </p>
            </div>

            {/* Benefits Box */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div className="bg-gray-500  p-6 rounded-lg shadow-md text-left">
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Why Partner Locally?
                </h3>
                <div className="space-y-2">
                  {content.points.map((point, idx) => (
                    <p key={idx}>{point}</p>
                  ))}
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg h-60 flex items-center justify-center text-gray-400">
                <span>{content.imageAlt} (Image Placeholder)</span>
              </div>
            </div>

            {/* Sponsorship Tiers */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                Local Sponsorship Tiers
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border  border-gray-700">
                  <thead>
                    <tr className="bg-gray-500">
                      <th className="p-3 border text-center">Tier</th>

                      <th className="p-3 border text-center">Benefits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border">Exclusive Local</td>

                      <td className="p-3 border">
                        Exclusive in-app local business presence, unlimited
                        in-app promos, event hosting, social media collabs,
                        brand giveaways, and more.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 border">Local Highlight</td>

                      <td className="p-3 border">
                        Shared in-app local business presence, shared in-app
                        promos, brand giveaways
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Advertising Differences */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4">
                Advertising Differences Across Levels
              </h3>
              <p className="mb-4 text-gray-300">
                Our gamified, exclusive offers cut through the noise at crucial
                times. Exclusive sponsors benefit from personalized messaging
                and larger visual presence in the app.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-500 rounded-lg p-4">
                  <h4 className="text-yellow-400 font-bold mb-2">
                    Exclusive Local
                  </h4>
                  <p className="mb-2">
                    Be the ONLY local business reaching customers.
                  </p>
                  <p className="mb-2">
                    Drives{" "}
                    <span className="text-yellow-400 font-semibold">
                      250% more foot traffic
                    </span>
                    .
                  </p>
                </div>
                <div className="bg-gray-500 rounded-lg p-4">
                  <h4 className="text-cyan-400 font-bold mb-2">
                    Local Highlight
                  </h4>
                  <p className="mb-2">
                    Be one of a handful of sponsors attracting customers with
                    offers.
                  </p>
                  <p className="mb-2">Compete for Greek life customers.</p>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <blockquote className="bg-gray-500 p-6 rounded-lg text-lg italic border-l-4 border-yellow-400">
              “Local sponsors make it way more fun — the deals, the prizes, it’s
              just sick having them involved and backing Greek life. [Bar] was
              our home for the NFL season.”
              <div className="text-right mt-2 text-sm text-gray-400">
                — University of Kentucky User
              </div>
            </blockquote>
          </>
        )}

        {activeType === "national" && (
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-500 p-6 rounded-lg shadow-md text-left">
              <h3 className="text-2xl font-semibold mb-4 text-center">
                {content.title}
              </h3>
              <ul className="space-y-3 list-inside text-left">
                {content.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-800 rounded-lg h-60 flex items-center justify-center text-gray-400">
              <span>{content.imageAlt} (Image Placeholder)</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default SponsorshipsToggle;
