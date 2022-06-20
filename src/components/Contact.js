import React from "react";

const Contact = () => {
  return (
    <>
      <div
        name="contact"
        className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
      >
        <form
          action="https://getform.io/f/3fc5ee9e-79f7-4c33-82b8-1977a7b9499d"
          className="flex flex-col max-w-[600px] w-full"
          method="post"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-green-300 text-gray-300">
              Contact
            </p>
          </div>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email -
            <span className="text-2xl text-green-400">
              sijan.pradhan2020@gmail.com
            </span>
          </p>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="bg-[#ccd6f6] p-2"
          />
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="my-4 p-2 bg-[#ccd6f6]"
          />
          <textarea
            name="message"
            cols="10"
            rows="10"
            className="bg-[#ccd6f6] p-2"
            placeholder="Message"
          ></textarea>
          <button
            className="text-white border-2 hover:bg-green-300 hover:border-green-300 w-fit mx-auto px-4 py-3 my-8 flex items-center"
            type="submit"
          >
            Let's Collaborate
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
