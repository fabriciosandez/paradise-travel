import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
    setLogo(!logo);
  };

  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
      <div>
        <h1 onClick={handleMenu} className={logo ? "hidden" : "block"}>
          Paradise Travel
        </h1>
      </div>
      <ul className="hidden md:flex">
      <li
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                window.location.replace("/#home");
              }}
            >
              Home
            </li>
            <li
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                window.location.replace("/#travel");
              }}
            >
              Travel
            </li>
            <li
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                window.location.replace("/#book");
              }}
            >
              Book
            </li>
            <li
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                window.location.replace("/#destinations");
              }}
            >
              Destinations
            </li>
            <li
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                window.location.replace("/#gallery");
              }}
            >
              Gallery
            </li>
      </ul>
      <div className="hidden md:flex">
        <BiSearch size={20} />
        <BsPerson size={20} />
      </div>
      {/* Hamburger Icon */}
      <div onClick={handleMenu} className="z-10 md:hidden">
        {menu ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>
      {/* Mobile Menu */}
      <div
        onClick={handleMenu}
        className={
          menu
            ? "absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-8 flex flex-col text-black"
            : "absolute left-[-100%]"
        }
      >
        <h1>Paradise Travel</h1>
        <ul className="mt-3">
          <li className="border-b">Home</li>
          <li className="border-b">Destinations</li>
          <li className="border-b">Travel</li>
          <li className="border-b">View</li>
          <li className="border-b">Book</li>
        </ul>
        <div className="flex flex-col">
          <button className="my-3">Register</button>
          <button className="my-1.5">Sign In</button>
        </div>
        <div className="flex justify-around mt-8 mb-1">
          <a href="https://www.facebook.com/">
            <FaFacebook className="icon" />
          </a>
          <a href="https://www.twitter.com/">
            <FaTwitter className="icon" />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram className="icon" />
          </a>
          <a href="https://www.pinterest.com/">
            <FaPinterest className="icon" />
          </a>
          <a href="https://www.youtube.com/">
            <FaYoutube className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
