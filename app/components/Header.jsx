"use client";
import { CircleX, Mail, Menu, Phone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function hanleMenuButton() {
    setIsOpenMenu((isOpenMenu) => !isOpenMenu);
  }

  function handleCloseButton() {
    setIsOpenMenu(false);
  }
  return (
    <nav className="w-full px-5 lg:px-8 xl:px-[10%] py-4 flex items-center justify-between z-50">
      <a href="">
        <Image src="/logo-white.png" width={140} height={40} alt="برنامه ۳۶۰" />
      </a>

      <ul className=" hidden lg:flex gap-6">
        <li>
          <a
            href="#top"
            className="hover:text-green-300 transition duration-200"
          >
            خانه
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="hover:text-green-300 transition duration-200"
          >
            خدمات
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="hover:text-green-300 transition duration-200"
          >
            درباره ما
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-green-300 transition duration-200"
          >
            ارتباط با ما
          </a>
        </li>
      </ul>

      <div className="flex gap-2">
        <a
          href="#Contact"
          className="flex items-center justify-center gap-2 bg-white rounded-full text-black px-4 py-2"
        >
          <span className="tracking-wide text-sm md:text-md">۰۹۰۲۱۱۱۳۹۶۹</span>
          <Phone className="size-4 " />
        </a>

        <button className="lg:hidden">
          <Menu onClick={hanleMenuButton} />
        </button>

        {/* mobile menu */}

        <ul
          className={`flex flex-col w-64 bg-gray-500 h-screen fixed gap-4 py-20 px-10 top-0 bottom-0  text-gray-100 transition-all duration-500 ${
            isOpenMenu ? "left-0" : "-left-64"
          }`}
        >
          <button
            className="absolute right-5 top-5"
            onClick={handleCloseButton}
          >
            <CircleX />
          </button>
          <li>
            <a href="#top" onClick={handleCloseButton}>
              خانه
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleCloseButton}>
              درباره ما
            </a>
          </li>
          <li>
            <a href="#services" onClick={handleCloseButton}>
              خدمات
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleCloseButton}>
              ارتباط با ما
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
