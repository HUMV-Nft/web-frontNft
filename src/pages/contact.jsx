import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import Footer from "../components/footer/footer";
import Nav from "../components/menu/Nav";

export default function ContactUs() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_agwftua",
        "template_bm2qn4f",
        form.current,
        "NuGkx_kv8quG1Y3td"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmail("");
          setLastname("");
          setMessage("");
          setName("");
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Nav />
      <section className="pt-20">
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
        {loading ? (
          <div className="max-w-5xl mx-auto overflow-hidden">
            <h2 className="text-white text-5xl text-center animate-ping py-72">
              Loading
            </h2>
          </div>
        ) : (
          <>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="grid w-[90%] md:w-[60%] mx-auto gap-10 py-16">
              <div className="grid md:flex md:justify-center gap-10">
                <input
                  type="text"
                  className="bg-black/20 p-5 text-white rounded-md w-full h-14 text-xl"
                  placeholder="Name"
                  name="user_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  className="bg-black/20 p-5 text-white rounded-md w-full h-14 text-xl"
                  placeholder="Last Name"
                  name="last_name"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <input
                className="bg-black/20 p-5 rounded-md w-full h-14 text-xl text-white"
                type="email"
                placeholder="Email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                type="text"
                className="bg-black/20 text-white rounded-md h-32 p-5 text-xl"
                placeholder="Message . . ."
              />
              <button
                type="submit"
                className=" w-fit bg-green-400 px-8 py-3 rounded-xl mx-auto text-white font-medium text-xl hover:bg-green-600 transition-all duration-300">
                Submit
              </button>
            </form>
          </>
        )}
      </section>
      <Footer />
    </>
  );
}
