import React from "react";

const Contact = () => {
  return (
    <main id="contact">
      <section className="cont-contact px-[15%] py-12">
        <h1 className="text-center text-5xl font-bold leading-4 text-white laptop:text-3xl">
          Contact Me
        </h1>
        <div className="stack-inner-header py-12 text-center text-[17px] font-medium capitalize text-[#ccc] smobile:text-[13px]">
          Any Question? Please Fill Out the form below
        </div>
        <form
          action="post"
          className="contact-form m-4 flex max-w-[60rem] flex-col items-center justify-center text-[#ccc]"
        >
          <input
            type="text"
            className="contact-name m-2 w-[90vw] max-w-[40rem] rounded-lg border-none bg-[#282828] px-4 py-2 font-medium sslaptop:px-8 sslaptop:py-4"
            placeholder="Enter Your Name"
          />
          <input
            type="email"
            className="contact-email m-2 w-[90vw] max-w-[40rem] rounded-lg border-none bg-[#282828] px-4 py-2 font-medium sslaptop:px-8 sslaptop:py-4"
            placeholder="Enter Your Email"
          />
          <textarea
            name="meassage"
            className="contact-msg m-2 w-[90vw] max-w-[40rem] rounded-lg border-none bg-[#282828] px-4 py-2 font-medium sslaptop:px-8 sslaptop:py-4"
            rows={5}
            placeholder="Your Message"
          ></textarea>
          <button
            type="submit"
            value="send"
            className="sub-btn m-8 rounded-lg border-none bg-white px-14 py-4 text-black"
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
