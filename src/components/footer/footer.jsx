import logo from "../../assets/images/logo.png";
import insta from "../../assets/images/insta.webp";
import dis from "../../assets/images/dis.webp";
import tele from "../../assets/images/telewebp.webp";
import twiiter from "../../assets/images/twiiter.webp";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black/50 py-20">
      <div className="grid xl:flex items-start gap-10 max-w-[1500px] mx-auto">
        <div className="w-full px-5">
          <div className="grid xl:flex w-[80%] xl:mx-0  mx-auto">
            <img className="w-52 h-52 mx-auto" src={logo} alt="logo" />
            <p className="text-white text-lg mt-10 text-center xl:text-start">
              HUMV stands as a steadfast ally for military families, offering a
              diverse range of services from financial counseling to mental
              health support, ensuring they never face their challenges alone.
              With unwavering dedication, HUMV embodies the spirit of unity and
              gratitude for our nation's heroes.
            </p>
          </div>
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
        <div className="hidden xl:grid w-fit mx-auto xl:mx-0 xl:w-[200px]">
          <h2 className="uppercase text-xl font-medium text-green-400 my-5 text-center xl:text-start">
            pages
          </h2>
          <ul className="text-white text-lg grid gap-5 uppercase text-center xl:text-start">
            <li className="hover:text-green-400 duration-200  xl:w-fit">
              <Link to="/">home</Link>
            </li>
            <li className="hover:text-green-400 duration-200 xl:w-fit">
              <Link to="/donate">donate</Link>
            </li>
            <li className="hover:text-green-400 duration-200 xl:w-fit">
              <Link to="/about-us">about us</Link>
            </li>
            <li className="hover:text-green-400 duration-200 xl:w-fit">
              <Link>contact us</Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-[600px] hidden xl:block mx-auto xl:mx-0">
          <h2 className="uppercase text-xl font-medium text-green-400 my-5 text-center xl:text-start">
            newsletter
          </h2>
          <p className="text-white text-lg text-center xl:text-start">
            Join our military family newsletter to receive essential updates,
            valuable tips, and inspiring stories. Stay connected with a
            community that understands the unique challenges military families
            face. Subscribe now and be a part of our supportive network.
          </p>
          <div className="py-5">
            <div className="w-fit xl:w-full xl:mx-0 mx-auto">
              <input
                type="emali"
                placeholder="Your email address"
                className="bg-black/50 p-5 h-14 text-white text-lg w-2/3"
              />
              <button className="w-fit px-8 py-3 bg-green-400 text-white hover:bg-green-800 transition-all duration-300 font-medium text-lg">
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="grid lg:flex xl:hidden">
          <div className="grid w-fit mx-auto xl:mx-0 xl:w-[200px] pb-20">
            <h2 className="uppercase text-xl font-medium text-green-400 my-5 text-center xl:text-start">
              pages
            </h2>
            <ul className="text-white text-lg grid gap-5 uppercase text-center xl:text-start">
              <li className="hover:text-green-400 duration-200  xl:w-fit">
                <Link to="/">home</Link>
              </li>
              <li className="hover:text-green-400 duration-200 xl:w-fit">
                <Link to="/donate">donate</Link>
              </li>
              <li className="hover:text-green-400 duration-200 xl:w-fit">
                <Link to="/about-us">about us</Link>
              </li>
              <li className="hover:text-green-400 duration-200 xl:w-fit">
                <Link>contact us</Link>
              </li>
            </ul>
          </div>
          <div className="w-[90%] md:w-[600px] mx-auto xl:mx-0">
            <h2 className="uppercase text-xl font-medium text-green-400 my-5 text-center xl:text-start">
              newsletter
            </h2>
            <p className="text-white text-lg text-center xl:text-start">
              Join our military family newsletter to receive essential updates,
              valuable tips, and inspiring stories. Stay connected with a
              community that understands the unique challenges military families
              face. Subscribe now and be a part of our supportive network.
            </p>
            <div className="py-5">
              <div className="w-fit xl:w-full xl:mx-0 mx-auto">
                <input
                  type="emali"
                  placeholder="Your email address"
                  className="bg-black/50 p-5 h-14 text-white text-lg w-2/3"
                />
                <button className="w-fit px-8 py-3 bg-green-400 text-white hover:bg-green-800 transition-all duration-300 font-medium text-lg">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
