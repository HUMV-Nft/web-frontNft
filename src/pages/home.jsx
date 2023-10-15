import Banner from "../components/Banner/Banner";
import Footer from "../components/footer/footer";
import LeftSideBar from "../components/left-side-bar/left-side-bar";
import Nav from "../components/menu/Nav";
import RightSideBar from "../components/right-side-bar/right-side-bar";

import army from "../assets/images/army.jpg";
import air from "../assets/images/airforce.jpg";
import marine from "../assets/images/marine.jpg";
import navy from "../assets/images/navy.jpg";

export default function Home() {
  return (
    <>
      <Banner />
      <Nav />
      <section className="px-4">
        <h1 className="text-5xl text-green-400 font-bold text-center py-16">
          -HUMV-
        </h1>
        <p className="text-white pb-24 text-center w-[70%] mx-auto text-lg">
          At HUMV , collectors and creators alike come together to explore the
          world of digital art. We combine cutting-edge technology with
          sensational artists to pioneer this exciting new art form. Our
          physical gallery in New York, provides a space for both existing and
          emerging collectors to purchase digital art with the support of
          blockchain technology, accepting payment in both Crypto and Fiat
        </p>
        <div className="flex justify-center">
          <LeftSideBar />
          <div className="w-[80%]">
            <div className="text-white text-center py-10">
              <h2 className="text-4xl font-semibold">
                Honoring Sacrifice and Resilience
              </h2>
              <p className="text-zinc-300 py-16 w-[90%] mx-auto text-lg">
                Supporting military families is an essential and noble endeavor
                that reflects our deep gratitude for the sacrifices made by
                those who serve in the armed forces. These families demonstrate
                unwavering strength and resilience in the face of unique
                challenges. Our commitment to supporting military families is a
                testament to our collective responsibility to ensure their
                well-being.
              </p>
            </div>
            <div className="text-white text-center py-10">
              <h2 className="text-4xl font-semibold">The Weight of Service</h2>
              <p className="text-zinc-300 py-16 w-[90%] mx-auto text-lg">
                Military families often endure long separations, frequent
                relocations, and the stress of deployments. They embody the true
                meaning of sacrifice and patriotism. As a community, we come
                together to provide them with the support, resources, and
                appreciation they rightfully deserve. By offering assistance
                with housing, childcare, education, and mental health services,
                we aim to alleviate the burdens they may face.
              </p>
            </div>
          </div>
          <RightSideBar />
        </div>
        <div className="py-16">
          <h2 className="text-green-400 text-center text-5xl font-bold mb-16 uppercase">
            -Branches-
          </h2>
          <div className="grid grid-cols-4 gap-5">
            <div>
              <h4 className="text-white text-2xl text-center font-medium">
                Airforce
              </h4>
              <img src={air} alt="solider" className="rounded-full p-4" />
            </div>
            <div>
              <h4 className="text-white text-2xl text-center font-medium">
                Army
              </h4>
              <img src={army} alt="solider" className="rounded-full p-4" />
            </div>
            <div>
              <h4 className="text-white text-2xl text-center font-medium">
                Navy
              </h4>
              <img src={navy} alt="solider" className="rounded-full p-4" />
            </div>
            <div>
              <h4 className="text-white text-2xl text-center font-medium">
                Marine
              </h4>
              <img src={marine} alt="solider" className="rounded-full p-4" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
