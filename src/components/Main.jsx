import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Motorboat from "../assets/Motorboat.mp4";

const Main = () => {
  return (
    <div className="w-full h-screen relative" id="home">
      <video
        className="w-full h-full object-cover"
        src={Motorboat}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/25"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h2>Unique Travel Experiences</h2>
        <h3 className="py-4">Exclusive Destinations Around The World</h3>
        <form className="w-full max-w-[700px] flex justify-between items-center mx-auto p-1 border rounded-md text-black bg-gray-100">
          <div>
            <input
              className="bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none"
              type="text"
              placeholder="Search Destinations"
            />
          </div>
          <div>
            <button>
              <AiOutlineSearch
                size={20}
                className="icon"
                style={{ color: "#FFFFFF" }}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Main;
