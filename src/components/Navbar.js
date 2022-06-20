import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assests/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="fixed flex w-full h-[80px] justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div>
          <img src={Logo} alt="Logo Image" style={{ width: "60px" }} />
        </div>
        {/* Menu */}
        <ul className="hidden md:flex">
          <li className="hover:text-green-300 duration-150">
            <Link activeClass="active" to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="hover:text-green-300 duration-150">
            <Link activeClass="active" to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="hover:text-green-300 duration-150">
            <Link activeClass="active" to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>

          <li className="hover:text-green-300 duration-150">
            <Link
              activeClass="active"
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* Hamburger */}
        <div className="md:hidden z-10 absolute right-4" onClick={handleClick}>
          {nav === false ? <FaBars size={30} /> : <FaTimes size={30} />}
        </div>
        {/* Mobile Menu */}
        <div>
          <ul
            className={
              nav == false
                ? "hidden"
                : "absolute top-0 left-0 h-screen w-full bg-[#0a192f] flex flex-col justify-center items-center"
            }
          >
            <li className="py-6 text-4xl hover:text-green-300 duration-150">
              <Link
                onClick={handleClick}
                activeClass="active"
                to="home"
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="py-6 text-4xl hover:text-green-300 duration-150">
              <Link
                onClick={handleClick}
                activeClass="active"
                to="about"
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="py-6 text-4xl hover:text-green-300 duration-150">
              <Link
                onClick={handleClick}
                activeClass="active"
                to="skills"
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </li>

            <li className="py-6 text-4xl hover:text-green-300 duration-150">
              <Link
                onClick={handleClick}
                activeClass="active"
                to="contact"
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Social Menu */}
        <div className="hidden md:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[160px] h-[60px] ml-[-100px] duration-300 hover:ml-[-10px] opacity-80">
              <a
                href="https://www.linkedin.com/in/sijan-pradhan-b92a54235"
                className="flex justify-between px-2 h-full items-center w-full bg-blue-600  text-gray-300"
                target="_blank"
              >
                LinkedIn <FaLinkedin size={30} />
              </a>
            </li>

            <li className="w-[160px] h-[60px] ml-[-100px] duration-300 hover:ml-[-10px] opacity-80">
              <a
                href="https://github.com/CodingWithSijan"
                className="flex justify-between px-2 items-center w-full h-full text-gray-300 bg-[#333333]"
                target="_blank"
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] ml-[-100px] duration-300 hover:ml-[-10px] opacity-80">
              <a
                href="https://www.facebook.com/john.prad.948"
                className="flex justify-between px-2 h-full items-center bg-blue-800 w-full text-gray-300"
                target="_blank"
              >
                Facebook <FaFacebook size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] ml-[-100px] duration-300 hover:ml-[-10px] opacity-80">
              <a
                href="/"
                className="flex justify-between px-2 h-full items-center w-full bg-[#565f69] text-gray-300"
                target="_blank"
              >
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
