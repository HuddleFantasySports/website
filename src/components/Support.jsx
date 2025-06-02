// src/components/Support.jsx
import React from "react";

export function Support() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 text-gray-300">
      <h1 className="text-3xl font-bold mb-4">Need help?</h1>
      <p className="text-lg">
        Please reach out to{" "}
        <a
          href="mailto:support@meshleagues.com"
          className="text-[#A1F0E0] hover:underline"
        >
          support@meshleagues.com
        </a>{" "}
        and a member from our team will be in touch shortly. Thanks!
      </p>
    </div>
  );
}
export default Support;
