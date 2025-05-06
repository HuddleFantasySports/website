// src/pages/ContactPage.tsx
import React from "react";

export default function ContactForm() {
  return (
    <>
      <main className>
        <div className="container mx-auto px-4">
          {/* … founders & mission sections … */}

          {/* Embedded Google Form */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-center">Contact Us</h2>
            <div className="mt-8 flex justify-center">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSd3T6QcddOvZazpbhWU3M8Yoy6Del8wPOYcnsNqdAZcJ0z8qg/viewform?embedded=true"
                width="640"
                height="1000"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
