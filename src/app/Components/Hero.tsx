import Image from "next/image";
const Hero = () => {
  return (
    <section className="overflow-x-hidden laptop:pb-10">
      <div className="cont-main-hero grid min-h-screen grid-cols-2 items-center justify-items-center laptop:min-h-96 laptop:grid-cols-1 laptop:py-5 llaptop:min-h-[60vh]">
        <div className="cont-heading gradient-text !text-left text-[3rem] text-white laptop:order-2 laptop:text-[30px] mdesktop:text-[2rem] smobile:text-[1.8rem]">
          Hi<span className="inner-hero-text !text-white">👋</span>,{" "}
          <div className="inner-hero-text">My Name is </div>
          <div className="inner-name-cont !gradient-text text-gradient !text-left">
            Abdullah MG
          </div>
          <div className="inner-hero text">A Full Stack Developer</div>
        </div>

        <div className="cont-image w-[100%] laptop:w-[33rem]">
          {/* <Image
            src="/hero images/myimg.png"
            width={192}
            height={256}
            alt="image"
          /> */}

          <img src="/hero images/myimg.png" className=" " alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
