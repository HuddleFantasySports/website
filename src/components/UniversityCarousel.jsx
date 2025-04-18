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
    <section className="py-12 overflow-hidden">
      <h2 className="text-center text-1xl font-semibold mb-4 text-white">
        Organizations We Work With
      </h2>

      {/* Edge-to-edge white background */}
      <div className="fixed left-0 right-0 w-screen bg-white py-8 z-0">
        <Marquee gradient={false} speed={50}>
          <div className="flex items-center justify-around gap-12 px-6">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.name}
                className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
