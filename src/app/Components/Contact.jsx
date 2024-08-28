"use client";
import React from "react";

import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("movarlrg");
  if (state.succeeded) {
    return (
      <p className="gradient-text text-gradient  tect-[24px] px-14 py-4">
        Thanks For Your Message!
      </p>
    );
  }
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
          onSubmit={handleSubmit}
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
          ></textarea>{" "}
          <button
            type="submit"
            value="send"
            disabled={state.submitting}
            className="sub-btn m-8 rounded-full border-none bg-[#282828] px-14 py-4 text-transparent"
          >
            <span className="gradient-text text-gradient">
              {state.submitting ? "Submitting..." : "Submit"}
            </span>
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
