import Footer from "../components/footer/footer";
import Nav from "../components/menu/Nav";

export default function AboutUs() {
  return (
    <>
      <Nav />
      <section>
        <div className="bg-about relative max-w-7xl mx-auto text-white text-center"></div>
        <h2 className="text-5xl text-center font-bold px-10 py-16 text-green-400">
          HUMV NFT{"'"}s
        </h2>
        <p className="text-xl py-16 text-white w-[70%] mx-auto text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus, eveniet officiis quidem autem saepe, voluptas
          doloremque quos officia natus ipsum in obcaecati, dolore vero corrupti
          aliquam veritatis incidunt. Placeat, tenetur.
        </p>
      </section>
      <Footer />
    </>
  );
}
