import Image from "next/image";
import { technologies } from "../Constants";
import { tools } from "../Constants";
const TechStack = () => {
  return (
    <section className="sect-techstack min-h-14 py-5 ">
      <div className="">
        <div
          id="stack"
          className="stack-inner-header overflow-hidden pb-4 pt-3 text-center text-[26px] font-bold leading-4 text-white slaptop:text-[23px]"
        >
          My Tech Stack
        </div>
        <div className="stack-inner-header smobile:text-[13px] text-center text-[17px] text-white">
          Technologies I’ve been working with recently
        </div>
        <div className="cont-tech-icons smobile:p-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-16 p-32">
          {technologies.map((item, i) => (
            <div key={i}>
              <Image
                src={item.icon}
                width={80}
                height={80}
                className=" w-[80px]"
                alt="icon"
              />

              <p className="text-center text-white">{item.name}</p>
            </div>
          ))}
        </div>
        <div className="stack-inner-header overflow-hidden pb-4 pt-3 text-center text-[26px] font-bold leading-4 text-white">
          Tools And Software
        </div>

        <div className="cont-tech-icons smobile:p-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-16 p-32">
          {tools.map((item, i) => (
            <div key={i}>
              <Image
                src={item.icon}
                width={80}
                height={80}
                className=" w-[83px]"
                alt="icon"
              />

              <p className="text-center text-white">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
