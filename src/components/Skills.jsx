import React from "react";
import HTML from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImg from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="bg-[#0a192f] w-full h-screen text-gray-300 pl-4"
    >
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-3xl border-b-4 inline border-pink-600">
            Experience
          </p>
          <p className="py-4">These are the Technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 py-8 text-center">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={HTML} alt="" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-slate-950  hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={css} alt="" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={javascript} alt="" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={tailwind} alt="" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={reactImg} alt="" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={github} alt="" />
            <p className="my-4">GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
