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
import CTAButton from "./ui/CTAbutton";
import {
  ArrowRight,
  Shield,
  Eye,
  Share2,
  Lock,
  ShieldCheck,
  User,
} from "lucide-react";

// Feature data with corresponding preview screens
const features = [
  {
    id: 1,
    title: "Draft",
    description: "Collaborative Drafting with Built-In Strategy Voting",
    isHighlighted: true,
    preview: {
      title: "Draft",
      subtitle: "Collaborative Drafting with Built-In Strategy Voting",
      features: [
        {
          description:
            "Squads work together in real-time to build their rosters, casting votes, proposing picks, and debating draft strategy. Whether a draft happens over a couple of hours or a few weeks, every member has a say — because your draft is a team decision, not a solo mission.",
        },
      ],
      hasButton: true,
      buttonText: "Get Your Chapter Involved",
    },
  },
  {
    id: 2,
    title: "Starting Lineup",
    description: "Weekly Lineup Debates with Majority Rules",
    isHighlighted: false,
    preview: {
      title: "Starting Lineup",
      subtitle: "Weekly Lineup Debates with Majority Rules",
      features: [
        {
          description:
            "Every squad member gets a say in who starts each week by casting their vote. The final lineup is a team decision — not one person calling the shots. The more active your squad, the better your team performs. Start/Sit debates just got way more fun.",
        },
      ],
      hasButton: true,
      buttonText: "Join an Influencer Squad",
    },
  },
  {
    id: 3,
    title: "Waivers Add/Drops",
    description: "Suggest as a squad. Final say from the coach.",
    isHighlighted: false,
    preview: {
      title: "Waivers Add/Drops",
      subtitle: "Suggest as a squad. Final say from the coach.",
      features: [
        {
          description:
            "Anyone on the squad can suggest who to add or drop. After voting, the Head Coach or Waiver Admins make the final call and submit the claim. It’s a squad-driven process where everyone has input, but leadership locks it in.",
        },
      ],
      hasButton: true,
      buttonText: "Find a Local Squad",
    },
  },
  {
    id: 4,
    title: "Trades",
    description: "Trade Talks, Group-Approved",
    isHighlighted: false,
    preview: {
      title: "Trades",
      subtitle: "Trade Talks, Group-Approved",
      features: [
        {
          description:
            "All trade proposals must be squad-approved before being sent or accepted. Trade chat threads allow members to suggest, debate, and vote on offers, keeping deals fair and transparent within the team.",
        },
      ],
      hasButton: true,
      buttonText: "Bring MESH to Work",
    },
  },
  {
    id: 5,
    title: "Gamification",
    description: "Squad success now carries into next season.",
    isHighlighted: false,
    preview: {
      title: "Gamification",
      subtitle: "Squad success now carries into next season.",
      features: [
        {
          description:
            "Earn badges, trophies, and bragging rights as a unit — not just for one season, but across every year you compete. Top-performing squads build lasting legacies and unlock invites to next year’s invitational leagues, where the best in the country battle for BIG prizes.",
        },
      ],
      hasButton: true,
      buttonText: "Start a League",
    },
  },
];

export function SquadFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef(null);
  const [api, setApi] = useState(null);

  // Handle feature box click
  const handleFeatureClick = (index) => {
    setActiveIndex(index);
    api?.scrollTo(index);
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      if (autoplay) startAutoplay();
    }
  };

  // Start autoplay function
  const startAutoplay = () => {
    autoplayRef.current = setInterval(() => {
      const nextIndex = (activeIndex + 1) % features.length;
      setActiveIndex(nextIndex);
      api?.scrollTo(nextIndex);
    }, 5000);
  };

  // Initialize and clean up autoplay
  useEffect(() => {
    if (autoplay) startAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [autoplay, activeIndex, api]);

  // Sync carousel with active index when API is available
  useEffect(() => {
    if (api) api.scrollTo(activeIndex);
  }, [api, activeIndex]);

  // Handle carousel change
  useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      const selectedIndex = api.selectedScrollSnap();
      setActiveIndex(selectedIndex);
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        if (autoplay) startAutoplay();
      }
    };
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, autoplay]);

  // Icon component mapping (if you choose to render icons anywhere)
  const IconComponent = ({ icon }) => {
    switch (icon) {
      case "shield":
        return <Shield className="h-4 w-4" />;
      case "eye":
        return <Eye className="h-4 w-4" />;
      case "share":
        return <Share2 className="h-4 w-4" />;
      case "lock":
        return <Lock className="h-4 w-4" />;
      case "shield-check":
        return <ShieldCheck className="h-4 w-4" />;
      case "user":
        return <User className="h-4 w-4" />;
      default:
        return <Shield className="h-4 w-4" />;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Explore Squad Based Features
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Left side – Feature descriptions */}
        <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="
                p-[1px]
                bg-gradient-to-r from-purple-500 to-teal-500
                rounded-lg
                transition-shadow duration-300
                hover:shadow-lg hover:shadow-purple-500/50
              "
            >
              <div
                onClick={() => handleFeatureClick(index)}
                className={`
                  p-4 sm:p-6
                  bg-[#212731]
                  text-white
                  rounded-lg
                  cursor-pointer
                  transition-all
                  duration-300
                  ${index === activeIndex ? "shadow-sm" : ""}
                `}
              >
                <h3 className="text-base sm:text-md font-medium mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-white">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right side – Preview carousel */}
        <div className="order-1 md:order-2">
          <Carousel className="w-full" setApi={setApi}>
            <CarouselContent>
              {features.map((feature) => (
                <CarouselItem key={feature.id}>
                  <div className="p-[1px] bg-gradient-to-r from-purple-500 to-teal-500 rounded-2xl shadow-md">
                    <Card className="bg-[#212731] rounded-2xl">
                      <CardContent className="p-4 sm:p-6">
                        <div className="text-center border-b pb-3 sm:pb-4 mb-3 sm:mb-4">
                          <h3 className="text-lg sm:text-2xl text-white font-bold">
                            {feature.preview.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-white">
                            {feature.preview.subtitle}
                          </p>
                        </div>
                        <div className="space-y-3 sm:space-y-4">
                          {feature.preview.features.map(
                            (previewFeature, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2 sm:gap-3"
                              >
                                <p className="text-xs sm:text-sm text-white">
                                  {previewFeature.description}
                                </p>
                              </div>
                            )
                          )}

                          {feature.preview.hasButton && (
                            <div className="flex justify-center mt-4 sm:mt-6">
                              <CTAButton className="w-full max-w-[180px] sm:max-w-[240px] min-h-[44px] sm:min-h-[48px] text-center text-xs sm:text-base whitespace-normal break-words px-2 flex items-center justify-center">
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

            <div className="flex justify-center mt-3 sm:mt-4 py-3 sm:py-5">
              <CarouselPrevious className="relative static transform-none mx-1 sm:mx-2" />
              <CarouselNext className="relative static transform-none mx-1 sm:mx-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
export default SquadFeatures;
