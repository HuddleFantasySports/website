// src/components/Footer.jsx
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full  text-gray-300">
      {/* Top border: full‐width, 1px gray line */}
      <div className="w-full border-t border-gray-700" />

      {/* Main footer content */}
      <div className="w-full py-8 flex flex-col items-center space-y-6">
        {/* 1) Replace this <img> src with your actual logo path */}
        <img
          src="/Mesh Base Logo.png"
          alt="MESH Logo"
          className="h-12 object-contain"
        />

        {/* 2) Vertical list of navigation links */}
        <nav className="flex flex-col items-center space-y-2">
          {/* <Link to="/faqs" className="hover:text-white transition">
            FAQs
          </Link>
          <Link to="/waitlist" className="hover:text-white transition">
            Waitlist
          </Link>*/}
          <Link to="/support" className="hover:text-white transition">
            Support
          </Link>
          <Link to="/privacy-policy" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className="hover:text-white transition">
            Terms of Service
          </Link>
        </nav>
      </div>

      {/* Bottom copyright bar */}
      <div className="w-full ]">
        <p className="text-center text-sm py-3">
          © 2025 MESH STUDIOS LLC, All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
