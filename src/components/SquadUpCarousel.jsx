import { Carousel } from "antd";
import React from "react";

export function SquadUpCarousel() {
  return (
    <div className="max-w-md mx-auto my-5">
      {" "}
      {/* ← limits width to ~28rem and centers */}
      <Carousel autoplay>
        {[
          "Squad up with Your fraternity",
          "Squad up with Your favorite influencers ",
          "Squad up with Your Favorite Bar / Restaurant ",
          "Squad up with Your Co-workers ",
          "Your… Squad",
        ].map((item) => (
          <div key={item}>
            <div className="h-100 bg-gray-300 text-gray-800 flex items-center justify-center rounded-2xl ">
              <span className="text-2xl font-bold">{item}</span>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
