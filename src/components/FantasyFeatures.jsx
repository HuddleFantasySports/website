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
    description: "Draft Features",
    isHighlighted: true,
    preview: {
      title: "Draft Features",
      subtitle: "Draft Features",
      features: [
        {
          icon: "shield",
          title: "Trusted & secure",
          description:
            "Your information is handled securely with end-to-end encryption. Your credentials are not shared with Acme Co.",
        },
        {
          icon: "eye",
          title: "Privacy first",
          description:
            "You can review a list of permissions before granting Acme Co. access to your system.",
        },
        {
          icon: "share",
          title: "Data portability",
          description:
            "We do not sell your employer and employee data, and will only use it with your permission.",
        },
      ],
      hasButton: true,
      buttonText: "Continue",
    },
  },
  {
    id: 2,
    title: "Starting Lineup Features",
    description: "Description",
    isHighlighted: false,
    preview: {
      title: "Data Security",
      subtitle: "Review and approve exactly what data will be shared.",
      features: [
        {
          icon: "lock",
          title: "Granular permissions",
          description: "See exactly what data will be accessed and shared.",
        },
        {
          icon: "shield-check",
          title: "Explicit approval",
          description: "Nothing is shared without your explicit consent.",
        },
        {
          icon: "eye",
          title: "Transparency",
          description: "Clear visibility into all data access requests.",
        },
      ],
      hasButton: true,
      buttonText: "Review Permissions",
    },
  },
  {
    id: 3,
    title: "Waivers Add/Drop Features",
    description: "Description",
    isHighlighted: false,
    preview: {
      title: "Choose Your Provider",
      subtitle: "Connect with your preferred employment system.",
      features: [
        {
          icon: "user",
          title: "Wide compatibility",
          description: "Works with all major employment and HR systems.",
        },
        {
          icon: "share",
          title: "Easy selection",
          description: "Simple interface to find and connect your provider.",
        },
        {
          icon: "shield",
          title: "Secure connections",
          description:
            "All provider connections use secure authentication protocols.",
        },
      ],
      hasButton: true,
      buttonText: "Select Provider",
    },
  },
  {
    id: 4,
    title: "Trades Features",
    description: "Trade Description",
    isHighlighted: false,
    preview: {
      title: "Secure Authentication",
      subtitle: "Log in securely to grant access to your data.",
      features: [
        {
          icon: "lock",
          title: "Secure login",
          description:
            "Industry-standard authentication keeps your credentials safe.",
        },
        {
          icon: "shield-check",
          title: "No stored passwords",
          description: "We never store your login credentials.",
        },
        {
          icon: "user",
          title: "User control",
          description:
            "Revoke access at any time through your account settings.",
        },
      ],
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

  // Icon component mapping
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
        <h2 className="text-chart-4xl text-2xl font-bold mb-4 my-10">
          Explore Fantasy League Features
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left side - Feature descriptions */}
        <div className="space-y-4">
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
                <Card className="border shadow-md">
                  <CardContent className="p-6">
                    <div className="text-center border-b pb-4 mb-4">
                      <h3 className="text-2xl font-bold">
                        {feature.preview.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {feature.preview.subtitle}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {feature.preview.features.map((previewFeature, idx) => (
                        <div key={idx} className="flex items-start gap-3 h-25">
                          <div className="mt-1 bg-gray-100 p-1 rounded-full">
                            <div className="h-6 w-5 flex items-center justify-center text-gray-600">
                              <IconComponent icon={previewFeature.icon} />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">
                              {previewFeature.title}
                            </h4>
                            <p className="text-gray-500 text-xs">
                              {previewFeature.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4 py-5">
            <CarouselPrevious className="relative static transform-none mx-2" />
            <CarouselNext className="relative static transform-none mx-2" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
