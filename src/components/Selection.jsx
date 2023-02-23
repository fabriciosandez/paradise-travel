import React from "react";
import Maldivas2 from "../assets/Maldivas02.jpg";
import Fiji2 from "../assets/Fiji02.jpg";
import Seychelles2 from "../assets/Seychelles02.jpg";
import Polynesia2 from "../assets/Borabora02.jpg";
import Greece2 from "../assets/Greece02.jpg";
import Mexico from "../assets/Mexico01.jpg";
import Ibiza from "../assets/Ibiza01.jpg";
import Indonesia from "../assets/Indonesia01.jpg";
import KeyWest from "../assets/Keywest01.jpg";
import Card from "./Card";

const Selection = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4" id="destinations">
      <Card bg={Polynesia2} text="Bora Bora" />
      <Card bg={Mexico} text="Costa Mujeres" />
      <Card bg={Fiji2} text="Fiji" />
      <Card bg={Greece2} text="Greece" />
      <Card bg={Ibiza} text="Ibiza" />
      <Card bg={Indonesia} text="Indonesia" />
      <Card bg={KeyWest} text="Key West" />
      <Card bg={Maldivas2} text="Maldives" />
      <Card bg={Seychelles2} text="Seychelles" />
    </div>
  );
};

export default Selection;
