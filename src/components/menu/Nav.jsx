import logo from "../../assets/images/logo.png";

import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="">
      <ul className="flex items-center w-full justify-center gap-20 text-white text-2xl font-medium">
        <li>
          <Link to="/">
            <img className="w-44 h-fit" src={logo} alt="logo" />
          </Link>
        </li>
        <li className="text-green-400 uppercase cursor-pointer tracking-widest hover:tracking-tighter transition-all duration-300">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-green-400 uppercase cursor-pointer tracking-widest hover:tracking-tighter transition-all duration-300">
          <Link to="/donate">DONATE</Link>
        </li>
        <li className="hover:text-green-400 uppercase cursor-pointer tracking-widest hover:tracking-tighter transition-all duration-300">
          <Link to="/about-us">About Us</Link>
        </li>
        <li className="hover:text-green-400 uppercase cursor-pointer tracking-widest hover:tracking-tighter transition-all duration-300">
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
