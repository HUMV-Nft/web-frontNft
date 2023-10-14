import logo from "../../assets/images/logo.png";
import insta from "../../assets/images/insta.webp";
import dis from "../../assets/images/dis.webp";
import tele from "../../assets/images/telewebp.webp";
import twiiter from "../../assets/images/twiiter.webp";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black/50 py-20">
      <div className="flex items-start gap-10 max-w-[1500px] mx-auto">
        <div className="max-w-[500px] px-5">
          <img className="w-52 mx-auto" src={logo} alt="logo" />
          <p className="text-white text-lg ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, in
            praesentium. Obcaecati rem nam, perferendis assumenda quia earum
            repellat quos eligendi labore blanditiis repellendus aperiam dicta
            harum! Perspiciatis, unde deleniti.
          </p>
          <div className="flex gap-5 py-6 justify-center">
            <img
              className="bg-zinc-700 rounded-full p-3"
              src={insta}
              alt="discord icon"
            />
            <img
              className="bg-zinc-700 rounded-full p-3"
              src={tele}
              alt="instagram icon"
            />
            <img
              className="bg-zinc-700 rounded-full p-3"
              src={twiiter}
              alt="telegram icon"
            />
            <img
              className="bg-zinc-700 rounded-full p-3"
              src={dis}
              alt="twitter icon"
            />
          </div>
        </div>
        <div className="grid">
          <h2 className="uppercase text-xl font-medium text-green-400 my-5">
            pages
          </h2>
          <ul className="text-white text-lg grid gap-5 uppercase">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/donate">donate</Link>
            </li>
            <li>
              <Link to="/about-us">about us</Link>
            </li>
            <li>
              <Link>contact us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="uppercase text-xl font-medium text-green-400 my-5">
            sipports
          </h2>
          <ul className="text-white grid gap-5 text-lg uppercase">
            <li className="cursor-pointer">setting</li>
            <li className="cursor-pointer">help & support</li>
            <li className="cursor-pointer">live auctions</li>
            <li className="cursor-pointer">item details</li>
          </ul>
        </div>
        <div className="w-[500px]">
          <h2 className="uppercase text-xl font-medium text-green-400 my-5">
            newsletter
          </h2>
          <p className="text-white text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
            nam autem vitae facilis assumenda eius laboriosam commodi
            doloremque, velit doloribus natus eos, blanditiis, iste quis!
            Suscipit repellendus vero a voluptatibus.
          </p>
          <div className="py-5">
            <input
              type="emali"
              placeholder="Your email address"
              className="bg-black/50 p-5 h-14 text-white text-lg"
            />
            <button className="w-fit px-8 py-3 bg-green-400 text-white hover:bg-green-800 transition-all duration-300 font-medium text-lg">
              Send
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
