"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import CTAButton from "./ui/CTAbutton";

// Feature data with corresponding preview screens
const features = [
  {
    id: 1,
    title: "Greek System Leagues",
    description: "Fantasy Football for Fraternities & Sororities",
    isHighlighted: true,
    preview: {
      title: "Greek System Leagues",
      subtitle: "Fantasy Football for Fraternities & Sororities",
      features: [
        {
          description:
            " Chapters compete against each other in squad-based leagues. Each house works together to draft, manage lineups, and make moves all season long. Compete for sponsor rewards, donations to philanthropy, and chapter-wide bragging rights.",
        },
      ],
      hasButton: true,
      buttonText: "Get Your Chapter Involved",
      image: "/FantasyLeagues/1.png",
    },
  },
  {
    id: 2,
    title: "Influencer Leagues",
    description: "Where Creators & Fans Team Up",
    isHighlighted: false,
    preview: {
      title: "Influencer Leagues",
      subtitle: "Where Creators & Fans Team Up",
      features: [
        {
          description:
            " Influencers start the league — their fans help manage the team. Every vote impacts the roster, and top fans earn shoutouts, content drops, and more. It’s fantasy football as a fan experience.",
        },
      ],
      hasButton: true,
      buttonText: "Join an Influencer Squad",
      image: "/FantasyLeagues/2.png",
    },
  },
  {
    id: 3,
    title: "Bar & Restaurant Leagues",
    description: "For Bars That Want to Win the Week",
    isHighlighted: false,
    preview: {
      title: "Bar & Restaurant Leagues",
      subtitle: "For Bars That Want to Win the Week",
      features: [
        {
          description:
            "Bars form squads with staff and customers managing one team together. Customers vote on decisions, unlock drink specials, and come back every week to support their squad. Great for building loyalty and boosting foot traffic.",
        },
      ],
      hasButton: true,
      buttonText: "Find a Local Squad",
      image: "/FantasyLeagues/3.png",
    },
  },
  {
    id: 4,
    title: "Corporate Leagues",
    description: "Office Rivalries Meet Teamwork",
    isHighlighted: false,
    preview: {
      title: "Corporate Leagues",
      subtitle: "Office Rivalries Meet Teamwork",
      features: [
        {
          description:
            " Coworkers form squads and manage their fantasy team together. It’s fun, competitive, and a great way to build culture across departments. Play against other internal teams or companies in your space.",
        },
      ],
      hasButton: true,
      buttonText: "Bring MESH to Work",
      image: "/FantasyLeagues/4.png",
    },
  },
  {
    id: 5,
    title: "Other Groups",
    description: "Any Group Can Play",
    isHighlighted: false,
    preview: {
      title: "Other Groups",
      subtitle: "Any Group Can Play",
      features: [
        {
          description:
            " Friends. Clubs. Group chats. Rec leagues. Dorm floors. If you’ve got a crew, you can build a squad and start a league.Compete locally or nationally — the platform is built for your group.",
        },
      ],
      hasButton: true,
      buttonText: "Start a League",
      image: "/FantasyLeagues/5.png",
    },
  },
];

export function FantasyFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef(null);
  const [api, setApi] = useState(null);

  // Handle feature box click
  const handleFeatureClick = (index) => {
    setActiveIndex(index);
    // Move carousel to the corresponding slide
    api?.scrollTo(index);

    // Reset autoplay timer when manually changing slides
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      if (autoplay) {
        startAutoplay();
      }
    }
  };

  // Start autoplay function
  const startAutoplay = () => {
    autoplayRef.current = setInterval(() => {
      const nextIndex = (activeIndex + 1) % features.length;
      setActiveIndex(nextIndex);
      api?.scrollTo(nextIndex);
    }, 5000); // Change slide every 5 seconds
  };

  // Initialize and clean up autoplay
  useEffect(() => {
    if (autoplay) {
      startAutoplay();
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay, activeIndex, api]);

  // Sync carousel with active index when API is available
  useEffect(() => {
    if (!api) {
      return;
    }

    api.scrollTo(activeIndex);
  }, [api, activeIndex]);

  // Handle carousel change
  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      const selectedIndex = api.selectedScrollSnap();
      setActiveIndex(selectedIndex);

      // Reset autoplay timer when carousel changes
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        if (autoplay) {
          startAutoplay();
        }
      }
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, autoplay]);
  return (
    <div className="w-full max-w-6xl mx-auto box-border px-4 sm:px-0 overflow-x-hidden">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 my-10">
          Choose Your League Type
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-center">
        {/* Carousel cards ABOVE on mobile, right on desktop */}
        <div className="order-1 md:order-2 w-full max-w-full">
          <Carousel className="w-full max-w-full" setApi={setApi}>
            <CarouselContent>
              {features.map((feature) => (
                <CarouselItem key={feature.id} className="w-full max-w-full">
                  <div className="p-[1px] bg-gradient-to-r from-purple-500 to-teal-500 rounded-2xl shadow-md w-full max-w-full">
                    <Card className="bg-[#212731] rounded-2xl w-full max-w-full">
                      <CardContent className="p-3 sm:p-6 w-full max-w-full">
                        <div className="text-center border-b pb-2 sm:pb-4 mb-2 sm:mb-4">
                          <h3 className="text-base sm:text-2xl text-white font-bold">
                            {feature.preview.title}
                          </h3>
                          <p className="text-md sm:text-md text-white">
                            {feature.preview.subtitle}
                          </p>
                        </div>
                        <div className="space-y-2 sm:space-y-4">
                          {feature.preview.features.map(
                            (previewFeature, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-1 sm:gap-3"
                              >
                                <p className="text-md sm:text-md text-white">
                                  {previewFeature.description}
                                </p>
                              </div>
                            )
                          )}

                          {feature.preview.image && (
                            <div className="flex justify-center mt-3 sm:mt-6">
                              <img
                                src={feature.preview.image}
                                alt={`${feature.preview.title} preview`}
                                className="w-[140px] xs:w-[180px] sm:w-[250px] h-auto rounded-2xl shadow-lg object-cover max-w-full"
                              />
                            </div>
                          )}

                          {feature.preview.hasButton && (
                            <div className="flex justify-center mt-3 sm:mt-6">
                              <CTAButton className="w-full max-w-[160px] xs:max-w-[180px] sm:max-w-[240px] min-h-[40px] xs:min-h-[44px] sm:min-h-[48px] text-center text-xs sm:text-base whitespace-normal break-words px-2 flex items-center justify-center">
                                {feature.preview.buttonText}
                              </CTAButton>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Feature previews BELOW on mobile, left on desktop */}
        <div className="space-y-3 sm:space-y-6 order-2 md:order-1 w-full max-w-full">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="
                p-[1px]
                bg-gradient-to-r from-purple-500 to-teal-500
                rounded-lg
                transition-shadow duration-300
                hover:shadow-lg hover:shadow-purple-500/50
                w-full max-w-full
              "
            >
              <div
                onClick={() => handleFeatureClick(index)}
                onMouseEnter={() => setAutoplay(false)}
                onMouseLeave={() => setAutoplay(true)}
                className={`
    p-3 sm:p-6
    bg-[#212731]
    text-white
    rounded-lg
    cursor-pointer
    transition-all
    duration-300
    w-full max-w-full
    ${index === activeIndex ? "shadow-sm" : "hover:border-gray-200"}
  `}
              >
                <h3 className="text-base sm:text-md font-bold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-md sm:text-md">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
