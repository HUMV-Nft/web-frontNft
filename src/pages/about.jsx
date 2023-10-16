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
          The HUMV team is a dedicated group committed to providing unwavering
          support to military families across the nation. With deep respect and
          gratitude for the sacrifices made by our brave servicemen and women,
          HUMV strives to offer assistance, guidance, and a strong sense of
          community to those who have served their country. HUMVE mission
          encompasses a wide range of services, including financial counseling,
          mental health support, housing assistance. Their unwavering dedication
          to military families ensures that those who have sacrificed so much
          are never alone in their journey. Through various programs and
          outreach initiatives, HUMV serves as a beacon of hope, strength, and
          unity for the military community, fostering a sense of belonging and
          gratitude for the heroes who protect our nation.
        </p>
      </section>
      <Footer />
    </>
  );
}
