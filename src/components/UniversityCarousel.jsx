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
    <section className="my-12 mx-0">
      {/* Heading */}
      <div className="py-8">
        <h2 className="text-center text-1xl font-semibold text-white">
          Organizations We Work With
        </h2>
      </div>

      {/* Carousel */}
      <div className="w-full py-6">
        <div className="max-w-[2000px] mx-auto overflow-hidden">
          <Marquee gradient={false} speed={50}>
            <div className="flex items-center gap-16">
              {logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.name}
                  className="h-16 w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition"
                />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}
