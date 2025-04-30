// components/UniversityCarousel.jsx
"use client";

import Marquee from "react-fast-marquee";

const logos = [
  { name: "University of Washington", src: "/logos/Washington.png" },
  { name: "University of Michigan", src: "/logos/um-logo.png" },
  { name: "University of Kentucky", src: "/logos/Kentucky.png" },
  { name: "University of Nebraska", src: "/logos/nebraska.png" },
  { name: "University of Iowa", src: "/logos/iowa.png" },
  { name: "Indiana University", src: "/logos/indiana.svg" },
];

export default function UniversityCarousel() {
  return (
    <section className="my-16">
      {/* center the content in a max-width wrapper */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-sm text-gray-400 uppercase text-center mb-6">
          Organizations We Work With
        </h2>

        {/* marquee itself will fill the wrapper, logos inside flex-centered */}
        <Marquee
          gradient={false}
          speed={25}
          pauseOnHover
          className="overflow-hidden"
        >
          <div className="flex items-center justify-center space-x-8">
            {logos.map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.name}
                className="h-16 w-auto object-contain grayscale brightness-0 invert opacity-60 hover:opacity-100 hover:grayscale-0 transition duration-300"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
