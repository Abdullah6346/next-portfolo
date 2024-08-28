"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useForm as useFormspree } from "@formspree/react";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();
  const [formspreeState, formspreeSubmit] = useFormspree("movarlrg");

  const onSubmit = async (data) => {
    // If you want to handle data before sending
    try {
      await formspreeSubmit(data);
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  if (isSubmitSuccessful) {
    return (
      <p className="gradient-text text-gradient tect-[24px] px-14 py-4">
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
        {formspreeState.errors
          ? formspreeState.errors.length > 0 && (
              <p className="text-center text-red-500">
                There was an error submitting your form. Please try again.
              </p>
            )
          : ""}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="contact-form m-4 flex max-w-[60rem] flex-col items-center justify-center text-[#ccc]"
        >
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className={`contact-name m-2 w-[90vw] max-w-[40rem] rounded-lg border-none bg-[#282828] px-4 py-2 font-medium sslaptop:px-8 sslaptop:py-4 ${errors.name ? "border-red-500" : ""}`}
            placeholder="Enter Your Name"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "A valid email is required",
              },
            })}
            className={`contact-email m-2 w-[90vw] max-w-[40rem] rounded-lg border-none bg-[#282828] px-4 py-2 font-medium sslaptop:px-8 sslaptop:py-4 ${errors.email ? "border-red-500" : ""}`}
            placeholder="Enter Your Email"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          <textarea
            {...register("message", { required: "Message cannot be empty" })}
            className={`contact-msg m-2 w-[90vw] max-w-[40rem] rounded-lg border-none bg-[#282828] px-4 py-2 font-medium sslaptop:px-8 sslaptop:py-4 ${errors.message ? "border-red-500" : ""}`}
            rows={5}
            placeholder="Your Message"
          ></textarea>
          {errors.message && (
            <p className="text-red-500">{errors.message.message}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="sub-btn m-8 rounded-full border-none bg-[#282828] px-14 py-4 text-transparent"
          >
            <span className="gradient-text text-gradient">
              {isSubmitting ? "Submitting..." : "Submit"}
            </span>
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
