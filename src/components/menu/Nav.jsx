import logo from "../../assets/images/logo.png";

import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <nav className="">
      <ul className="flex items-center w-full justify-center gap-20 text-white text-2xl font-medium">
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
      </ul>
    </nav>
  );
}
