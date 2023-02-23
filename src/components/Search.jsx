import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-5 gap-4 px-4" id="book">
      <div className="lg:col-span-3 flex flex-col justify-evenly mr-2">
        <div>
          <h2>Where Stories Were Born</h2>
          <p className="pt-7 pb-4">
            The world is vast. It contains myriad wonders. But with the advent
            of the internet, thousands of guides, articles and experts have
            risen up to tell you how to experience it. They can be overwhelming,
            exhausting. What’s more, they rarely ask you how you want to feel.
            But for us, an unforgettable travel begins with a feeling. We are as
            concerned with the highest drama as the smallest moments. Big and
            small, quiet and loud. We create luxury travel experiences beyond
            the borders of your imagination. Through our unique process, we
            explore everything from your deepest passions to your most simple
            requests. Then we’ll tailor an itinerary that will have you counting
            the days.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div className="pl-2">
              <h3>Premium Service</h3>
              <p>We strive for excellence with each and every interaction</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div className="pl-1.5">
              <h3>Global Bookings</h3>
              <p>Search your perfect travel from anywhere to anywhere</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2">
        <div className="border text-center">
          <p className="py-2">GET AN ADDITIONAL 10% OFF ON YOUR FIRST TRIP</p>
          <p className="pb-2">24 HOURS LEFT</p>
          <p className="bg-gray-800 text-white py-2">BOOK NOW AND SAVE</p>
        </div>
        <form className="w-full lg:col-span-2">
          <div className="flex flex-col mt-4 mb-2">
            <label>Destination</label>
            <select className="border rounded-md p-2">
              <option>Bora Bora</option>
              <option>Costa Mujeres</option>
              <option>Fiji</option>
              <option>Greece</option>
              <option>Ibiza</option>
              <option>Indonesia</option>
              <option>Key West</option>
              <option>Maldives</option>
              <option>Seychelles</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label>Check-In</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col my-2">
            <label>Check-Out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div>
            <button className="w-full my-4">Rates & Availabilities</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
