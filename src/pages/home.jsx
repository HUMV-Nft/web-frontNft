import Banner from "../components/Banner/Banner";
import Footer from "../components/footer/footer";
import LeftSideBar from "../components/left-side-bar/left-side-bar";
import Nav from "../components/menu/Nav";
import RightSideBar from "../components/right-side-bar/right-side-bar";

import army from "../assets/images/army.jpg";
import air from "../assets/images/airforce.jpg";
import marine from "../assets/images/marine.jpg";
import navy from "../assets/images/navy.jpg";
import close from "../assets/images/icons8-close (1).svg";
import arrow from "../assets/images/icons8-arrow-right-30.png";

import { useState } from "react";

const images = require.context("../assets/images/branch", true);
const imageList = images.keys().map((image) => images(image));

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setLightboxOpen(false);
  };

  const goToPrevImage = () => {
    const prevIndex = currentIndex === 0 ? 17 : currentIndex - 1;
    setSelectedImage(imageList[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const goToNextImage = () => {
    const nextIndex =
      currentIndex === imageList.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(imageList[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  return (
    <>
      <Nav />
      <Banner />
      <section className="px-4">
        <h1 className="text-5xl text-green-400 font-bold text-center py-16">
          -HUMV-
        </h1>
        <p className="text-white pb-24 text-center w-[70%] mx-auto text-lg">
          At HUMV , collectors and creators alike come together to explore the
          world of digital art. We combine cutting-edge technology with
          sensational artists to pioneer this exciting new art form.
        </p>
        <div className="grid xl:flex justify-center">
          <LeftSideBar />
          <div className="w-[80%] py-16 xl:py-0 mx-auto xl:mx-0">
            <div className="text-white text-center py-10">
              <h2 className="text-2xl lg:text-4xl font-semibold">
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
              <h2 className="text-2xl lg:text-4xl font-semibold">
                The Weight of Service
              </h2>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
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
        <h2 className="text-center text-green-400 text-5xl font-bold py-10 uppercase">
          -sample art works-
        </h2>
        <div className="grid w-[70%] mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-16">
          {imageList.map((image, index) => (
            <div className="">
              <img
                className="rounded-lg cursor-pointer"
                onClick={() => openLightbox(image, index)}
                key={index}
                src={image}
                alt="wolf army us"
              />
            </div>
          ))}
        </div>
        {lightboxOpen && (
          <div className="fixed flex items-center py-5 md:py-20 top-0 left-0 w-full h-screen bg-black/50">
            <img
              onClick={closeLightbox}
              className="absolute right-10 top-10 w-12 cursor-pointer"
              src={close}
              alt="close"
            />
            <img
              onClick={goToPrevImage}
              className="hidden sm:block rotate-180 active:bg-white cursor-pointer p-3 ml-3 bg-black/50 rounded-full"
              src={arrow}
              alt="arrow"
            />
            <img
              className="w-[70%] md:w-[50%] xl:w-[40%] mx-auto"
              src={selectedImage}
              alt="army in light box"
            />
            <img
              className="hidden sm:block cursor-pointer p-3 mr-3 bg-black/50 rounded-full active:bg-white"
              onClick={goToNextImage}
              src={arrow}
              alt="arrow"
            />
            <img
              onClick={goToPrevImage}
              className="block absolute bottom-10 sm:hidden left-20 rotate-180 active:bg-white cursor-pointer p-3 ml-3 bg-black/50 rounded-full"
              src={arrow}
              alt="arrow"
            />
            <img
              className="block sm:hidden absolute bottom-10 right-20 cursor-pointer p-3 mr-3 bg-black/50 rounded-full active:bg-white"
              onClick={goToNextImage}
              src={arrow}
              alt="arrow"
            />
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}
