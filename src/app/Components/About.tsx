import React from "react";
import { workDetails } from "../Constants";
import { eduDetails } from "../Constants";
import Image from "next/image";

const About = () => {
  return (
    <main id="about" className="cont-about-section px-[15%] py-12">
      <section className="cont-about-desc">
        <h1 className="text-5xl font-bold leading-4 text-white laptop:text-3xl">
          About Me
        </h1>
        <p className="py-14 text-[16px] capitalize leading-6 text-[#a7a7a7] lmobile:text-[18px]">
          Hi There! I am a Full Stack Developer with over 2 years of experience
          specializing in thes <span className="font-bold">MERN stack</span> . I
          have a strong foundation in designing and implementing highly
          efficient and scalable web applications . My expertise lies in
          developing robust front-end interfaces with React, building and
          maintaining RESTful APIs with Node.js and Express, and managing data
          storage and retrieval with <span className="font-bold">MongoDB</span>{" "}
          and other <span className="font-bold">SQL Databases</span>. I am
          passionate about modern technologies and best practices to deliver
          high-quality, user-centric solutions that meet business needs and
          exceed expectations.
        </p>
      </section>
      <section className="cont-experience">
        <h1 className="text-5xl font-bold leading-4 text-white laptop:text-3xl">
          Work Experience
        </h1>
        {workDetails.map((item, i) => (
          <article
            key={i}
            className="border-b-2 border-[#a7a7a7] border-opacity-20 pb-5 pt-14 text-[20px] text-[#a7a7a7] lmobile:text-[18px]"
          >
            <div className="cont-position flex items-center justify-between lmobile:flex-col lmobile:items-stretch lmobile:gap-3">
              <h1 className="">{item.Position}</h1>
              <div className="cont-type min-w-fit rounded-3xl bg-[#D7FFE0] px-3 py-1 text-center text-xs text-[#018c0f]">
                {item.Type}
              </div>
            </div>
            <div className="cont-company flex items-center justify-between gap-3 pt-3 text-[14px] lmobile:flex-col-reverse lmobile:items-start lmobile:pt-5">
              <div className="comp-loc flex items-center laptop:flex-col lmobile:items-stretch">
                <div className="comp flex items-center gap-1">
                  <Image
                    alt="icon"
                    height={24}
                    width={24}
                    src={
                      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAARElEQVR4nGNgGAUkgP9E4sFvAbH8wWvBfyrhgbOA0iD6P+AW/CcxCP4T6xC6WQADo3GAAUbjAAYGvqj4TysLRgEDNgAA9ODfIe8Lta8AAAAASUVORK5CYII="
                    }
                  />

                  <p>{item.Company}</p>
                </div>
                <div className="loc flex items-center justify-center">
                  <Image
                    alt="icon"
                    height={24}
                    width={24}
                    src={
                      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABUklEQVR4nOWVvUoDQRSFv3dQ0VrSi6WFbxAQC1nEQhG08gl01dSCjVk7C0EbSRFstRUL8Qf0FdSIiD/Y+INGBs7AJWzCTnatcuDC7My959yZO3cHegH9QAU4B15lbrwO9OUlnxRhs425tYk85D8iOgNWgEgWaxdN+QSLDABvItgDym1sXz4vocdVMZmXZS7zRBaZeb+TtRCBSwUtG/IHc/YNIxJrzgllhj+eKZFspxQ4MeK+4JnxpKBIJEmKwJbWpvX9GCJwqqDYZNkw5PdGfFVzJyECPuiopchVmS3ysXzdNc6MEvALfAGzHa7pnHxcLwwTiLoyq3cQOJRPjS4wql18AAsp5IvAp7IfoUvsKsOLFIErre2QA0P6DTiiDUO+qblnYJCcmBHZOzCvwvpGdD1QCGoivAZuND6g4EfnzjTabRGPTSvGdGu+gXH+CUuyHsIfYN6DgrSbDeMAAAAASUVORK5CYII="
                    }
                  />
                  <p>{item.Location}</p>
                </div>
              </div>
              <p>{item.Duration}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="cont-education py-14">
        <h1 className="text-5xl font-bold leading-4 text-white laptop:text-3xl">
          Education
        </h1>
        {eduDetails.map((item, i) => (
          <article
            key={i}
            className="border-b-2 border-[#a7a7a7] border-opacity-20 pb-5 pt-14 text-[20px] text-[#a7a7a7] lmobile:text-[18px]"
          >
            <div className="cont-position flex items-center justify-between lmobile:flex-col lmobile:items-stretch lmobile:gap-3">
              <h1 className="">{item.Position}</h1>
              <div className="cont-type min-w-fit rounded-3xl bg-[#D7FFE0] px-3 py-1 text-center text-xs text-[#018c0f]">
                {item.Type}
              </div>
            </div>
            <div className="cont-eduction flex items-center justify-between gap-3 pt-3 text-[14px] lmobile:flex-col-reverse lmobile:items-start lmobile:pt-5">
              <div className="comp-loc flex items-center laptop:flex-col lmobile:items-baseline">
                <div className="comp flex items-center gap-1">
                  <Image
                    alt="icon"
                    height={24}
                    width={24}
                    src={
                      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAARElEQVR4nGNgGAUkgP9E4sFvAbH8wWvBfyrhgbOA0iD6P+AW/CcxCP4T6xC6WQADo3GAAUbjAAYGvqj4TysLRgEDNgAA9ODfIe8Lta8AAAAASUVORK5CYII="
                    }
                  />

                  <p>{item.Company}</p>
                </div>
                <div className="loc flex items-center justify-center">
                  <Image
                    alt="icon"
                    height={24}
                    width={24}
                    src={
                      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABUklEQVR4nOWVvUoDQRSFv3dQ0VrSi6WFbxAQC1nEQhG08gl01dSCjVk7C0EbSRFstRUL8Qf0FdSIiD/Y+INGBs7AJWzCTnatcuDC7My959yZO3cHegH9QAU4B15lbrwO9OUlnxRhs425tYk85D8iOgNWgEgWaxdN+QSLDABvItgDym1sXz4vocdVMZmXZS7zRBaZeb+TtRCBSwUtG/IHc/YNIxJrzgllhj+eKZFspxQ4MeK+4JnxpKBIJEmKwJbWpvX9GCJwqqDYZNkw5PdGfFVzJyECPuiopchVmS3ysXzdNc6MEvALfAGzHa7pnHxcLwwTiLoyq3cQOJRPjS4wql18AAsp5IvAp7IfoUvsKsOLFIErre2QA0P6DTiiDUO+qblnYJCcmBHZOzCvwvpGdD1QCGoivAZuND6g4EfnzjTabRGPTSvGdGu+gXH+CUuyHsIfYN6DgrSbDeMAAAAASUVORK5CYII="
                    }
                  />
                  <p>{item.Location}</p>
                </div>
              </div>
              <p>{item.Duration}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default About;
