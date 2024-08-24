"use client";
import Link from "next/link";
import Image from "next/image";
import { navlinks } from "../Constants";
import { nav_icon } from "../Constants";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  const toogleMenu = () => {
    setisOpenMenu(!isOpenMenu);
  };

  const [isActive, setisActive] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    setisActive(mediaQuery.matches);

    const handleResize = (event: MediaQueryListEvent) => {
      setisActive(event.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);
  return (
    <header>
      <nav>
        <div
          id="home"
          className={`${
            isOpenMenu
              ? "flex items-baseline bg-[#2e2e2e]"
              : "map_cont flex items-center"
          } justify-center px-4 py-6 text-[18px] leading-7`}
        >
          <ul
            className={
              isOpenMenu ? "flex items-baseline" : "flex items-center space-x-4"
            }
          >
            <div className="cont-open-menu flex justify-center text-left text-[15px]">
              <ul
                className={
                  isOpenMenu
                    ? "open-menu nav-links-con-2 flex flex-col items-start justify-center"
                    : "hidden"
                }
              >
                {navlinks.map((nav) => (
                  <li
                    key={nav.id}
                    className="max-lg:truncate group relative cursor-pointer p-2 text-white active:bg-gradient-to-r active:from-[#13B0F5] active:via-purple-500 active:to-[#E70FAA]"
                  >
                    <Link href={`#${nav.id}`} className="relative z-10">
                      {nav.title}
                    </Link>
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-[#13B0F5] via-purple-500 to-[#E70FAA] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={!isOpenMenu ? "cont-logp" : "hidden"}>
              <Image src="/icons/logo.png" width={97} height={59} alt="logo" />
            </div>
            <div className="cont-nav-links flex items-center gap-10 laptop:text-[13px]">
              <div
                className={
                  !isActive
                    ? "cont-titles flex justify-center gap-10 desktop:pl-80 ldesktop:pl-80 xldesktop:pl-[32rem]"
                    : "hidden"
                }
              >
                {navlinks.map((nav) => (
                  <li
                    key={nav.id}
                    className="max-lg:truncate group relative p-2 text-white"
                  >
                    <Link href={`#${nav.id}`}>{nav.title}</Link>
                    <span className="group-hover:opacity-100bg-secondary absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-[#13B0F5] via-purple-500 to-[#E70FAA] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></span>
                  </li>
                ))}
              </div>
            </div>
            <div
              className={
                !isActive ? "humeicon-wrapper hidden" : "flex flex-col pl-40"
              }
            >
              <button onClick={toogleMenu}>
                <Image
                  src="/icons/burger-menu.png"
                  width={30}
                  height={30}
                  alt="Menu"
                />
              </button>
            </div>

            <div
              className={
                !isActive ? "cont-icons flex gap-5 laptop:hidden" : "hidden"
              }
            >
              {nav_icon.map((icon) => (
                <li className="laptop:hidden" key={icon.title}>
                  <Link href={`${icon.url}`}>
                    <Image src={icon.path} width={30} height={30} alt="icons" />
                  </Link>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
