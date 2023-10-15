import Footer from "../components/footer/footer";
import Nav from "../components/menu/Nav";

export default function ContactUs() {
  return (
    <>
      <Nav />
      <section>
        <div className="bg-contact"></div>
        <h2 className="text-5xl text-center font-bold px-10 py-16 text-green-400">
          HUMV Community
        </h2>
        <p className="text-xl py-16 text-white w-[60%] mx-auto text-center">
          We value your connection and are here to address any inquiries or
          concerns you may have. Your feedback is important to us, as it helps
          us better serve military families. Please don't hesitate to reach out
          to the HUMV team using the contact information provided below. We look
          forward to hearing from you and continuing our mission to support and
          unite military families. Together, we can make a difference.
        </p>
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
          <textarea
            type="text"
            className="bg-black/20 text-white rounded-md h-32 p-5 text-xl"
            placeholder="Message . . ."
          />
          <button className=" w-fit bg-green-400 px-8 py-3 rounded-xl mx-auto text-white font-medium text-xl hover:bg-green-600 transition-all duration-300">
            Submit
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
}
