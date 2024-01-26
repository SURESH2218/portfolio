import React, { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../assets/logo1.jfif";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleEvent = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]">
      <div>
        <img src={logo} alt="Load" className="w-[50px] rounded-full" />
      </div>
      <div className="hidden md:flex">
        <ul className="flex gap-5 text-white">
          <li className="cursor-pointer">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* hamburger */}
      <div
        onClick={handleEvent}
        className="md:hidden z-10 cursor-pointer text-white"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute text-white left-0 top-0 w-[100vw] h-[100vh] gap-5 flex flex-col items-center justify-center bg-[#0a192f]"
        }
      >
        <li className="cursor-pointer">
          <Link onClick={handleEvent} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link onClick={handleEvent} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link onClick={handleEvent} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link onClick={handleEvent} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link onClick={handleEvent} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className=" hidden lg:flex fixed flex-col top-[40%] left-0 text-white ">
        <ul className="flex flex-col gap-1">
          <li className="w-[110px] h-[40px] justify-between items-center ml-[-69px] hover:ml-[1px] duration-300 bg-blue-600 px-1 py-1 rounded-sm ">
            <a
              className="flex justify-between items-center "
              href="https://www.linkedin.com/in/suresh-alabani-b49724199/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[110px] h-[40px] justify-between items-center ml-[-69px] hover:ml-[1px] duration-300 bg-black px-1 py-1 rounded-sm ">
            <a
              className="flex justify-between items-center "
              href="https://github.com/SURESH2218"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[110px] h-[40px] justify-between items-center ml-[-69px] hover:ml-[1px] duration-300 bg-green-400 px-1 py-1 rounded-sm ">
            <a
              className="flex justify-between items-center "
              href="https://mail.google.com/mail/u/0/#inbox"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[110px] h-[40px] justify-between items-center ml-[-69px] hover:ml-[1px] duration-300 bg-gray-700 px-1 py-1 rounded-sm ">
            <button
              className="flex justify-between items-center "
              onClick={() => alert("Not yet Done!!!! 𒀖 𒁝𒃿")}
            >
              Resume <BsFillPersonLinesFill className="ml-2" size={30} />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
