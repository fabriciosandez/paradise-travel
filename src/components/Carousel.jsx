import React, { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import Resort01 from "../assets/Resort01.jpg";
import Resort02 from "../assets/Resort02.jpg";
import Resort03 from "../assets/Resort03.jpg";
import Resort04 from "../assets/Resort04.jpg";
import Resort05 from "../assets/Resort05.jpg";
import Resort06 from "../assets/Resort06.jpg";

const gallery = [Resort01, Resort02, Resort03, Resort04, Resort05, Resort06];

const Carousel = () => {
  const [photo, setPhoto] = useState(0);
  const length = gallery.length;

  const previousPhoto = () => {
    setPhoto(photo === length - 1 ? 0 : photo + 1);
  };
  const nextPhoto = () => {
    setPhoto(photo === 0 ? length - 1 : photo - 1);
  };

  return (
    <div
      className="max-w-[1240px] mx-auto px-4 pt-6 pb-12 relative justify-center items-center"
      id="gallery"
    >
      <BsArrowLeftSquareFill
        onClick={previousPhoto}
        className="absolute top-[50%] text-3xl text-white cursor-pointer left-8"
      />
      <BsArrowRightSquareFill
        onClick={nextPhoto}
        className="absolute top-[50%] text-3xl text-white cursor-pointer right-8"
      />
      <h2 className="text-center pb-8">Discover amazing places</h2>
      {gallery.map((item, index) => (
        <div className={index === photo ? "opacity-100" : "opacity-0"}>
          {index === photo && <img className="w-full" src={item} alt="" />}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
