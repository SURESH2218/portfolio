import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-center pb-8 pl-4">
            <p className="text-3xl font-bold inline border-b-4 border-pink-600 text-[#ccd6f6] ">
              About
            </p>
          </div>
          <div className=""></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className="text-3xl sm:text-center font-bold pl-4 text-[#ccd6f6] ">
            <p>⨺➄⧻⒏⥱➯⢃⢻⽱⓽⅘␶⋵⿠⟖➝⹣⚠❐≷↼Ⲝ┃ℵ⚔☪⸺⧷ⱟℱ⥹⧖⿞⏗ₓ⡐⟄⏪┸⓳⡷⊢⠒┣⋰⡫</p>
          </div>
          <div>
            <p className="pl-4 text-[#ccd6f6] ">
              I constantly seek opportunities to practice and enhance my
              abilities, tackling challenges such as UI design, performance
              optimization, and cross-browser compatibility. By staying updated
              with the latest trends and actively participating in coding
              communities, I strive to refine my craft and deliver clean,
              user-friendly solutions. I am proud of my progress and look
              forward to contributing to impactful projects in the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
