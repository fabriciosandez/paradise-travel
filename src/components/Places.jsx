import React from "react";
import Maldivas from "../assets/Maldivas01.jpg";
import Fiji from "../assets/Fiji01.jpg";
import Seychelles from "../assets/Seychelles01.jpg";
import Polynesia from "../assets/Borabora01.jpg";
import Greece from "../assets/Greece01.jpg";

const Places = () => {
  return (
    <div className="max-w-[1240px] mx-auto pt-16 pb-12 px-4 text-center" id="travel">
      <h2>Best Luxury All-Inclusive Resort</h2>
      <p className="py-4">New Horizons, New Experiences</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src={Maldivas}
          alt=""
        />
        <img className="w-full h-full object-cover" src={Fiji} alt="" />
        <img className="w-full h-full object-cover" src={Seychelles} alt="" />
        <img className="w-full h-full object-cover" src={Polynesia} alt="" />
        <img className="w-full h-full object-cover" src={Greece} alt="" />
      </div>
    </div>
  );
};

export default Places;
