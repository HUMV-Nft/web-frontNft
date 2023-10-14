import Banner from "../components/Banner/Banner";
import Footer from "../components/footer/footer";
import LeftSideBar from "../components/left-side-bar/left-side-bar";
import Nav from "../components/menu/Nav";
import RightSideBar from "../components/right-side-bar/right-side-bar";

export default function Home() {
  return (
    <>
      <Banner />
      <Nav />
      <section className="px-4">
        <h1 className="text-5xl text-green-400 font-bold text-center py-16">
          -HUMV-
        </h1>
        <p className="text-white pb-24 text-center w-[90%] mx-auto text-lg">
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
                Art Blocks, Explained in 10 Collections
              </h2>
              <p className="text-zinc-300 py-16 w-[90%] mx-auto text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum,
                voluptates accusantium? Dolorum perspiciatis dolor quis, laborum
                nulla commodi harum eveniet a, saepe, ab consequatur ipsum velit
                dolore dignissimos sit ducimus Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Saepe dolorum corporis quia, ab
                animi sint alias officia aut culpa, eius unde! Similique enim
                recusandae totam fugit soluta, temporibus error eius!
              </p>
            </div>
            <div className="text-white text-center py-10">
              <h2 className="text-4xl font-semibold">Digital Canvas</h2>
              <p className="text-zinc-300 py-16 w-[90%] mx-auto text-lg">
                Digital Canvas—a perfect blend of classic elegance and modern
                technology. Showcase your cherished artworks with this sleek,
                high-resolution display that brings your art to life. With
                dynamic features, including slideshows, videos, and audio, it
                offers a versatile multimedia experience. Transform your living
                space into a personalised gallery with digital art. Seamlessly
                connect your devices for easy image transfer and sharing. Smart
                features ensure optimal viewing conditions, making our Digital
                Canvas a captivating addition to any home or office.
              </p>
            </div>
          </div>
          <RightSideBar />
        </div>
      </section>
      <Footer />
    </>
  );
}
