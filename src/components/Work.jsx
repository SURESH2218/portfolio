import React from "react";
import frontend from "../assets/desktop-preview.jpg";
import second from "../assets/secondimage.jpg";
import netflix from "../assets/netflix.png";
import beats from "../assets/beats.jpg";
import data from "../assets/data.png";
import game from "../assets/game.png";

const Work = () => {
  return (
    <div name="work" className="bg-[#0a192f] w-full md:h-screen text-gray-300 ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-3xl font-bold inline border-b-4 border-pink-600 ">
            Work
          </p>
          <p className="py-6">Check out my recent works</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${frontend})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
           mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                react js application
              </span>
              <div className="pt-8 text-center ">
                <a href="https://kit-news-homepage.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 m-2 font-bold text-lg hover:scale-90 duration-100">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/SURESH2218/FrontEndMentor.io-challenges/tree/main/news-homepage-main">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 m-2 font-bold text-lg hover:scale-90 duration-100">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${second})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
           mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                react js application
              </span>
              <div className="pt-8 text-center ">
                <a href="https://results-summary-ang.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 m-2 font-bold text-lg hover:scale-90 duration-100">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/SURESH2218?tab=repositories">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 m-2 font-bold text-lg hover:scale-90 duration-100">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${netflix})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
           mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                react js application
              </span>
              <div className="pt-8 text-center ">
                <a href="https://netflixgpt-movie-suggestion-site.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 m-2 font-bold text-lg hover:scale-90 duration-100">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/SURESH2218/netflix-gpt">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 m-2 font-bold text-lg hover:scale-90 duration-100">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${beats})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
           mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                react js application
              </span>
              <div className="pt-8 text-center ">
                <a href="https://beats-landingpage121.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 m-2 font-bold text-lg hover:scale-90 duration-100">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/SURESH2218/fullstackwebdevelopment/tree/main/Project11-Beats%20Landing%20Page">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 m-2 font-bold text-lg hover:scale-90 duration-100">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${data})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
           mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                react js application
              </span>
              <div className="pt-8 text-center ">
                <a href="https://data-analyticspage121.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 m-2 font-bold text-lg hover:scale-90 duration-100">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/SURESH2218/fullstackwebdevelopment/tree/main/Project12-Data%20Analytics%20Landing%20Page">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 m-2 font-bold text-lg hover:scale-90 duration-100">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${game})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
           mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                react js application
              </span>
              <div className="pt-8 text-center ">
                <a href="https://gamming-landingpage123.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 m-2 font-bold text-lg hover:scale-90 duration-100">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/SURESH2218/fullstackwebdevelopment/tree/main/Project9-Gaming%20Landing%20Page">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 m-2 font-bold text-lg hover:scale-90 duration-100">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
