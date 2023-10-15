import Banner from "../components/Banner/Banner";
import Nav from "../components/menu/Nav";

import army from "../assets/images/army.jpg";
import air from "../assets/images/airforce.jpg";
import marine from "../assets/images/marine.jpg";
import navy from "../assets/images/navy.jpg";
import { useState } from "react";

export default function Donate() {
  const [selectItem, setSelectItem] = useState(0);

  function handelSelect(num) {
    if (num === selectItem) {
      setSelectItem(0);
    } else {
      setSelectItem(num);
    }
  }
  return (
    <>
      <Banner />
      <Nav />
      <section className="py-16">
        <div>
          <h2 className="text-white text-center text-5xl font-bold py-16 uppercase">
            You can donate each Branches you want !
          </h2>
          <p></p>
          <div>
            <div className="py-16">
              <div className="grid grid-cols-4 gap-5">
                <div onClick={() => handelSelect(1)} className="group">
                  <h4 className="text-white text-2xl text-center font-medium">
                    Airforce
                  </h4>
                  <img
                    style={{
                      border: selectItem === 1 ? "4px solid #4ade80" : "",
                    }}
                    src={air}
                    alt="solider"
                    className="rounded-full p-4 group-hover:border-4 group-hover:border-green-400 duration-100"
                  />
                </div>
                <div onClick={() => handelSelect(2)} className="group">
                  <h4 className="text-white text-2xl text-center font-medium">
                    Army
                  </h4>
                  <img
                    style={{
                      border: selectItem === 2 ? "4px solid #4ade80" : "",
                    }}
                    src={army}
                    alt="solider"
                    className="rounded-full p-4 group-hover:border-4 group-hover:border-green-400 duration-100"
                  />
                </div>
                <div onClick={() => handelSelect(3)} className="group">
                  <h4 className="text-white text-2xl text-center font-medium">
                    Navy
                  </h4>
                  <img
                    style={{
                      border: selectItem === 3 ? "4px solid #4ade80" : "",
                    }}
                    src={navy}
                    alt="solider"
                    className="rounded-full p-4 group-hover:border-4 group-hover:border-green-400 duration-100"
                  />
                </div>
                <div onClick={() => handelSelect(4)} className="group">
                  <h4 className="text-white text-2xl text-center font-medium">
                    Marine
                  </h4>
                  <img
                    style={{
                      border: selectItem === 4 ? "4px solid #4ade80" : "",
                    }}
                    src={marine}
                    alt="solider"
                    className="rounded-full p-4 group-hover:border-4 group-hover:border-green-400 duration-100"
                  />
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div>
            <form className="grid w-[60%] mx-auto gap-10 py-16">
              <div className="flex justify-center gap-10">
                <input
                  type="text"
                  className="bg-black/20 p-5 text-white rounded-md w-full h-14 text-xl"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="bg-black/20 p-5 text-white rounded-md w-full h-14 text-xl"
                  placeholder="Last Name"
                />
              </div>
              <input
                className="bg-black/20 p-5 rounded-md w-full h-14 text-xl text-white"
                type="email"
                placeholder="Email"
              />
              <div className="gird justify-center">
                <h4 className="text-white text-2xl font-medium text-center">
                  Amount Donate
                </h4>
                <div className="text-white flex gap-10 py-5 w-fit mx-auto">
                  <span className="border-2 rounded-lg font-medium hover:bg-white/30 cursor-pointer border-white px-3 py-1">
                    $10
                  </span>
                  <span className="border-2 rounded-lg font-medium hover:bg-white/30 cursor-pointer border-white px-3 py-1">
                    $100
                  </span>
                  <span className="border-2 rounded-lg font-medium hover:bg-white/30 cursor-pointer border-white px-3 py-1">
                    $300
                  </span>
                  <span className="border-2 rounded-lg font-medium hover:bg-white/30 cursor-pointer border-white px-3 py-1">
                    $500
                  </span>
                </div>
              </div>
              <input
                type="text"
                placeholder="Enter custom donate"
                className="rounded-lg px-4 py-2 text-lg bg-black/30  mx-auto text-white"
              />
              <textarea
                type="text"
                className="bg-black/20 text-white rounded-md h-32 p-5 text-xl"
                placeholder="Message . . ."
              />
              <button className=" w-fit bg-green-400 px-8 py-3 rounded-xl mx-auto text-white font-medium text-xl hover:bg-green-600 transition-all duration-300">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
