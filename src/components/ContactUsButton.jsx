import { MailOpen } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ContactUsButton() {
  return (
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSd3T6QcddOvZazpbhWU3M8Yoy6Del8wPOYcnsNqdAZcJ0z8qg/viewform?usp=header"
      target="_blank"
      rel="noopener noreferrer"
      className="ml-4"
    >
      <button
        type="button"
        className="
shadow-md px-4 py-2 text-sm font-semibold bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-700 text-white text-sm font-semibold hover:brightness-110 shadow-lg transition-all duration-200] rounded-md hover:bg-[#6e4eb6] transition"
      >
        Contact Us
      </button>
    </a>
  );
}
