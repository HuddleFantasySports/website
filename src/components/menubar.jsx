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
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-transparent backdrop-blur-md text-white">
      <div className="container mx-auto flex items-center justify-between px-4 ">
        {/* Logo on left */}
        <Link to="/">
          <img
            src="/Mesh Base Logo.png"
            className="h-14 w-auto"
            alt="Mesh Logo"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-lg font-semibold mx-auto ">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="hover:text-[#B59BF0] transition"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur px-4 py-4">
          <nav className="flex flex-col gap-4 text-base font-semibold">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className="hover:text-[#B59BF0] transition"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
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
