import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import sureshImage from "../assets/suresh.jpg";

const Home = () => {
  return (
    <div
      name="home"
      className="bg-[#0a192f] w-full h-screen flex items-center justify-between"
    >
      {/* Container */}
      <div className="w-[1300px] flex mx-auto">
        <div className=" px-8 flex flex-col justify-center h-full">
          <p className="text-pink-600 text-xl">Hi,my name is </p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] ">
            Suresh Alabani
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-gray-500">
            I'm a Front End Developer
          </h2>
          <p className="text-gray-400 py-4 max-w-[700px]">
            As a front-end developer, I have gained practical experience and
            improved my skills through working on various projects. I constantly
            seek opportunities to practice and enhance my abilities
          </p>
          <div>
            <button className=" group text-white flex justify-between items-center gap-2 border-2 px-6 py-3 my-2 hover:bg-pink-600 hover:border-white">
              View Work
              <HiArrowNarrowRight className="ml-3 group-hover:rotate-180 duration-300" />
            </button>
          </div>
        </div>
        <div>
          <img
            src={sureshImage}
            className="hidden lg:flex h-[450px] w-[360px] object-cover mr-9 rounded-3xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
