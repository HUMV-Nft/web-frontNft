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

const images = require.context("../assets/images/branch", false);
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
          -H.U.M.V.-
        </h1>
        <p className="text-white pb-24 text-center w-[70%] mx-auto text-lg">
          At H.U.M.V., we have built a synergy around taking care of those who
          served to protect us!
        </p>
        <div className="grid xl:flex justify-center">
          <LeftSideBar />
          <div className="w-[80%] py-16 xl:py-0 mx-auto xl:mx-0">
            <div className="text-white text-center py-10">
              <h2 className="text-2xl lg:text-4xl font-semibold">
                Honoring Sacrifice and Resilience
              </h2>
              <p className="text-zinc-300 py-16 w-[90%] mx-auto text-lg">
                As a nation, our involvement in supporting veterans and their
                families is an indispensable endeavor that we should all
                embrace. H.U.M.V.’s mission signifies our profound appreciation
                for the sacrifices made by those who serve in the armed forces.
                The determination and fortitude exhibited by veterans and their
                families exemplify an unwavering dedication to preserving
                freedom in the face of distinctive challenges. Our commitment to
                supporting veterans and their families stands as a testament to
                our internal belief in the collective responsibility we hold to
                ensure all veterans’ well-being.
              </p>
            </div>
            <div className="text-white text-center py-10">
              <h2 className="text-2xl lg:text-4xl font-semibold">
                The Weight of Service
              </h2>
              <p className="text-zinc-300 py-16 w-[90%] mx-auto text-lg">
                During active military service, members and their families often
                endure long separations, frequent relocations, and the stress of
                deployments. Once they return to civilian life from their period
                of sacrifice for our nation, many of them face steep uphill
                challenges while reintegrating into civilian life. As a
                community, H.U.M.V. has come together to provide some of the
                essential them with the support and resources needed to navigate
                everyday life. Our first offering will be financial assistance
                for food, followed later by transportation support and our
                long-term goal of housing accommodations. Join us as we strive
                to alleviate the everyday burdens our veterans and their
                families are facing!
              </p>
            </div>
            <div className="text-white text-center py-10">
              <h2 className="text-2xl lg:text-4xl font-semibold">
                Harvey B. Ryan Jr
              </h2>
              <p className="text-zinc-300 py-16 w-[90%] mx-auto text-lg">
                Harvey is Co-owner and a managing partner for H.U.M.V.  His
                vision of one day being an integral part of assisting
                underserved U.S. military veterans has now come to fruition. 
                With the help of his two business partners and other fellow
                veterans, the vision for Helping Underserved Military Veterans
                is now in plain view.  Being an Air Force disabled veteran
                himself, Harvey knows firsthand the struggle that often plagues
                our brave men and women AFTER their selfless service to our
                country.  From navigating through the V.A. system, to job
                searching and attempting to integrate back into civilian life,
                Harvey brings direct knowledge of how to successfully get
                through that process, and the oft-times-seeming lack of support
                while doing so.  Having never lost his zeal for serving our
                country, Harvey has embarked on a 20-year journey to offer the
                support to fellow veterans that often eluded him. 
              </p>
            </div>
            <div className="text-white text-center py-10">
              <h2 className="text-2xl lg:text-4xl font-semibold">
                Bobby Ray Howard, Sr.
              </h2>
              <p className="text-zinc-300 py-16 w-[90%] mx-auto text-lg">
                Having served honorably in the US Air Force and being deployed
                to Dharan Saudia Arabia in support of Desert Storm, Bobby has
                always maintained his passion for supporting his fellow
                veterans.  Understanding how challenging it can be to wade
                through the bureaucracy to get the help veterans need, Bobby has
                committed to a unique opportunity to partner with H.U.M.V.
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
                Marines
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
            <div key={index}>
              <img
                className="rounded-lg cursor-pointer"
                onClick={() => openLightbox(image, index)}
                src={image}
                alt="wolf army us"
              />
            </div>
          ))}
        </div>
        {lightboxOpen && (
          <div className="fixed flex items-center py-6 md:py-20 inset-0 w-full h-screen bg-black/50 z-50">
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
              className="w-[70%] md:w-[50%] xl:w-[40%] mx-auto z-50 relative"
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
