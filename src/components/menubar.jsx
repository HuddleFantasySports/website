import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const menuItems = [
  { title: "Home", to: "/" },
  { title: "Squad-Based Management", to: "/squad-based-management" },
  { title: "Fantasy Leagues", to: "/fantasy-leagues" },
  { title: "Testimonials", to: "/testimonials" },
  { title: "Sponsors", to: "/sponsors" },
  { title: "Contact", to: "/contact" },
];

export function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-transparent backdrop-blur-md font-sans text-white">
      <div className="flex flex-wrap items-center justify-between max-w-7xl mx-auto px-4 py-3">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="public/Mesh Base Logo.png"
              width={182}
              height={64}
              alt="Mesh Logo"
              className="h-10 w-auto max-w-full"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-lg mx-auto">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-white font-bold text-base hover:text-[#B59BF0]"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="px-2 text-base hover:bg-transparent focus-visible:ring-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <MobileLink
              to="/"
              className="flex items-center font-bold text-lg"
              onOpenChange={setIsOpen}
            >
              Mesh Leagues
            </MobileLink>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                {menuItems.map((item) => (
                  <MobileLink
                    key={item.to}
                    to={item.to}
                    onOpenChange={setIsOpen}
                    className="text-base"
                  >
                    {item.title}
                  </MobileLink>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function MobileLink({ to, onOpenChange, className = "", children }) {
  return (
    <Link
      to={to}
      onClick={() => onOpenChange?.(false)}
      className={`font-sans text-white ${className}`}
    >
      {children}
    </Link>
  );
}
