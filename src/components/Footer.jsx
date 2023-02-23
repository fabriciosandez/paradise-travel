import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 pt-6 pb-5">
      <div className="max-w-[1240-px] mx-auto flex flex-col px-4">
        <div className="sm:flex text-center justify-between items-center">
          <h1>Paradise Travel</h1>
          <div className="flex justify-between w-full sm:max-w-[280px] my-4 mr-5">
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
        <div className="flex justify-between">
          <ul className="lg:flex">
            <li>About Us</li>
            <li>Careers</li>
            <li>Traveler Resources</li>
            <li>Newsroom</li>
            <li>Contact</li>
          </ul>
          <ul className="text-right lg:flex">
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
