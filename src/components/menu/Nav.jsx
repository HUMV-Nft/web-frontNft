import { useState } from "react";
import logo from "../../assets/images/logo.png";
import menuIcon from "../../assets/images/menu.svg";
import close from "../../assets/images/icons8-close (1).svg";

import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);

  return (
    <nav className="">
      <ul className="hidden top-0 fixed z-10 bg lg:flex items-center w-full justify-center lg:gap-10 xl:gap-20 text-white text-2xl font-medium">
        <li>
          <Link to="/">
            <img className="w-44 h-fit" src={logo} alt="logo" />
          </Link>
        </li>
        <li
          style={{
            color: pathname === "/" ? "#4ade80" : "white",
          }}
          className="text-white uppercase cursor-pointer tracking-widest hover:tracking-tighter transition-all duration-300 border-b-2 border-green-400 px-3 py-2">
          <Link to="/">Home</Link>
        </li>
        <li
          style={{
            color: pathname === "/donate" ? "#4ade80" : "white",
          }}
          className="hover:text-green-400 uppercase cursor-pointer tracking-widest hover:tracking-tighter transition-all duration-300 border-b-2 border-green-400 px-3 py-2">
          <Link to="/donate">DONATE</Link>
        </li>
        <li
          style={{
            color: pathname === "/about-us" ? "#4ade80" : "white",
          }}
          className="hover:text-green-400 uppercase cursor-pointer tracking-widest hover:tracking-tighter transition-all duration-300 border-b-2 border-green-400 px-3 py-2">
          <Link to="/about-us">About Us</Link>
        </li>
        <li
          style={{
            color: pathname === "/contact-us" ? "#4ade80" : "white",
          }}
          className="hover:text-green-400 uppercase cursor-pointer tracking-widest  hover:tracking-tighter transition-all duration-300 border-b-2 border-green-400 px-3 py-2">
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link to="/">
            <img className="w-44 h-fit" src={logo} alt="logo" />
          </Link>
        </li>
      </ul>
      <div className="flex fixed top-0 mb-20 bg w-full h-28 overflow-hidden lg:hidden">
        <div className="flex-1">
          <Link to="/">
            <img className="w-28 h-28" src={logo} alt="logo" />
          </Link>
        </div>
        <img
          className="w-10 mr-10 cursor-pointer"
          onClick={() => setShow(!show)}
          src={show ? close : menuIcon}
          alt="close icon"
        />
        {show ? (
          <div className="fixed z-40 w-1/2 top-0 bg-black/80 p-5 sm:p-10 h-full text-white sm:text-2xl font-medium">
            <ul className="grid gap-10">
              <li
                style={{
                  color: pathname === "/" ? "#4ade80" : "white",
                }}
                className="text-white uppercase cursor-pointer tracking-widest hover:tracking-tighter transition-all duration-300 border-b-2 border-green-400 px-3 py-2">
                <Link to="/">Home</Link>
              </li>
              <li
                style={{
                  color: pathname === "/donate" ? "#4ade80" : "white",
                }}
                className="hover:text-green-400 uppercase cursor-pointer tracking-widest hover:tracking-tighter transition-all duration-300 border-b-2 border-green-400 px-3 py-2">
                <Link to="/donate">DONATE</Link>
              </li>
              <li
                style={{
                  color: pathname === "/about-us" ? "#4ade80" : "white",
                }}
                className="hover:text-green-400 uppercase cursor-pointer tracking-widest hover:tracking-tighter transition-all duration-300 border-b-2 border-green-400 px-3 py-2">
                <Link to="/about-us">About Us</Link>
              </li>
              <li
                style={{
                  color: pathname === "/contact-us" ? "#4ade80" : "white",
                }}
                className="hover:text-green-400 uppercase cursor-pointer tracking-widest  hover:tracking-tighter transition-all duration-300 border-b-2 border-green-400 px-3 py-2">
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </nav>
  );
}
