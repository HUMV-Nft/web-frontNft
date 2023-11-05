import Footer from "../components/footer/footer";
import Nav from "../components/menu/Nav";

export default function AboutUs() {
  return (
    <>
      <Nav />
      <section className="pt-20">
        <div className="bg-about relative max-w-7xl mx-auto text-white text-center"></div>
        <h2 className="text-5xl text-center font-bold px-10 py-16 md:py-16 text-green-400">
          HUMV FAMILY
        </h2>
        <p className="text-xl py-16 text-white w-[70%] mx-auto text-center">
          At H.U.M.V., our unwavering mission is to honor and uplift the heroes
          who selflessly served to protect our nation. We are dedicated to
          empowering underserved military veterans, ensuring that their
          sacrifices are met with the support and respect they deserve. Our
          commitment is encapsulated in our tagline: 'Taking care of those who
          served to protect us!' We strive to make this promise a reality by
          eventually providing comprehensive assistance and unwavering advocacy
          for veterans facing hardships. Our first step in building a network of
          comprehensive services is to ensure that no veteran goes hungry. Over
          the next several months, we will feed several veterans and their
          families for up to a year at a time.
        </p>
        <p className="text-xl py-16 text-white w-[70%] mx-auto text-center">
          The H.U.M.V. community is committed to never leaving any veteran
          behind, just as our veterans never left our nation behind. Together,
          we stand as a testament to the enduring bonds of service, honor, and
          compassion! Contact us to find out how you can get involved.
        </p>
      </section>
      <Footer />
    </>
  );
}
