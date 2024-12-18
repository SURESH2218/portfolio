import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-[#0a192f] text-gray-300 p-5 flex justify-center items-center w-full h-screen"
    >
      <form
        method="POST"
        action="https://getform.io/f/ff0df322-d39f-4d62-8e34-4d05ab684952"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Contact
          </p>
          <p className="pt-2">
            Submit the form - myEmail - sureshalabani2785@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 rounded-sm placeholder-emerald-950 text-black"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] rounded-sm placeholder-emerald-950 text-black"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-2 bg-[#ccd6f6] rounded-sm  placeholder-emerald-950 text-black"
          name="message"
          id=""
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 px-4 py-3 my-8 mx-auto  flex items-center">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
