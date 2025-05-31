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
            " Chapters compete against each other in squad-based leagues.Each house works together to draft, manage lineups, and make moves all season long. Compete for sponsor rewards, donations to philanthropy, and chapter-wide bragging rights.",
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
            " Influencers start the league — their fans help manage the team. Every vote impacts the roster, and top fans earn shoutouts, content drops, and more.It’s fantasy football as a fan experience.",
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
    description: "Bar & Restaurant Leagues",
    isHighlighted: false,
    preview: {
      title: "Bar & Restaurant Leagues",
      subtitle: "For Bars That Want to Win the Week",
      features: [
        {
          description:
            " Bars form squads with staff and customers managing one team together.Customers vote on decisions, unlock drink specials, and come back every week to support their squad. Great for building loyalty and boosting foot traffic.",
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
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-chart-4xl text-2xl font-bold mb-4 my-10">
          Choose Your League Type
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left side - Feature descriptions */}
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              onClick={() => handleFeatureClick(index)}
              className={`p-6  bg-gray-300 text-gray-800  rounded-lg cursor-pointer transition-all duration-300 ${
                index === activeIndex
                  ? feature.isHighlighted
                    ? "bg-blue-50"
                    : "border border-gray-200 shadow-sm"
                  : "hover:bg-gray-50"
              }`}
            >
              <h3
                className={`text-md font-medium mb-2 ${
                  index === activeIndex ? "text-primary" : ""
                }`}
              >
                {feature.title}
              </h3>
              <p className="text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Right side - Preview carousel */}
        <Carousel className="w-full" setApi={setApi}>
          <CarouselContent>
            {features.map((feature) => (
              <CarouselItem key={feature.id}>
                <Card className="border shadow-md  bg-gray-300">
                  <CardContent className="p-6">
                    <div className="text-center border-b pb-4 mb-4">
                      <h3 className="text-2xl font-bold">
                        {feature.preview.title}
                      </h3>
                      <p className="text-gray-8s00 text-sm">
                        {feature.preview.subtitle}
                      </p>
                    </div>
                    <div className="space-y-4">
                      {feature.preview.features.map((previewFeature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div>
                            <p className="text-gray-800 text-sm">
                              {previewFeature.description}
                            </p>
                          </div>
                        </div>
                      ))}
                      {feature.preview.image && (
                        <div className="flex justify-center mt-6">
                          <img
                            src={feature.preview.image}
                            alt={`${feature.preview.title} preview`}
                            className="w-[250px] h-auto rounded-2xl shadow-lg object-cover"
                          />
                        </div>
                      )}

                      {feature.preview.hasButton && (
                        <div className="flex justify-center mt-6">
                          <CTAButton className="w-60 h-10 text-center ">
                            {feature.preview.buttonText}
                          </CTAButton>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <div className="flex justify-center mt-4 py-5">
            <CarouselPrevious className="relative static transform-none mx-2" />
            <CarouselNext className="relative static transform-none mx-2" />
          </div> */}
        </Carousel>
      </div>
    </div>
  );
}
