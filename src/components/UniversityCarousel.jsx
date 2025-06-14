// components/UniversityCarousel.jsx
"use client";

import Marquee from "react-fast-marquee";

const logos = [
  { name: "University of Washington", src: "/logos/Washington.png" },
  { name: "University of Michigan", src: "/logos/michigan2.png" },
  { name: "University of Kentucky", src: "/logos/Kentucky.png" },
  { name: "University of Nebraska", src: "/logos/nebraska.png" },
  { name: "University of Iowa", src: "/logos/Block-IOWA-BLACK.png" },
  // { name: "Indiana University", src: "" }, website needs login
  { name: "University of Florida", src: "/logos/unf.png" }, // needs a login for real version
  { name: "University of North Carolina", src: "/logos/UNC.png" },
  {
    name: "University of Tennessee",
    src: "/logos/University - HorizLeftLogo-OnDark (RGB).png",
  },
  { name: "University of Georgia", src: "/logos/georgia.png" },
  // { name: "University of Alabama", src: "/logos/alabama.jpg" }, need login
  // { name: "University of Ohio", src: "/logos/ohiostate.jpg" },needs login
];

export default function UniversityCarousel() {
  return (
    <section className="my-16">
      {/* center the content in a max-width wrapper */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-sm text-gray-400 uppercase text-center mb-6">
          Find us at these campuses
        </h2>

        {/* marquee itself will fill the wrapper, logos inside flex-centered */}
        <Marquee
          gradient={false}
          speed={25}
          pauseOnHover
          className="overflow-hidden"
        >
          <div className="flex items-center justify-center space-x-8 ">
            {logos.map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.name}
                className="h-16 w-auto object-contain grayscale brightness-0 invert opacity-60 hover:opacity-100 hover:grayscale-0 transition duration-300"
              />
            ))}
            <div style={{ width: "1rem" }} />
          </div>
        </Marquee>
      </div>
    </section>
  );
}
