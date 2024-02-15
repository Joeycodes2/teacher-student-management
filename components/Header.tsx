"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "/app/img/Logo.png";
import { Icon } from "@iconify/react";
import register from "./register.json";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [opened, setOpened] = useState(false);
  return (
    <header
      className="flex items-center px-4 py-2 fixed justify-between top-0 w-full 
    bg-white z-50 shadow"
    >
      <div className="flex md:flex-row md:mx-auto md:px-8 w-full">
        <Link href="/" className="">
          <Image
            src={Logo}
            height={50}
            width={60}
            alt="Logo"
            className="rounded-lg mr-1 xs:h-5 xs:w-5 md:mx-auto"
          />
        </Link>
        <a
          href="/"
          className="rounded-lg px-1 py-4 mx-1 transition-colors hover:text-orange-400"
        >
          <h2 className={`mb-3 text-2xl text-green-600 font-semibold`}>
            TEACHER - STUDENT PORTAL{" "}
          </h2>
        </a>

        <div className="relative flex flex-row mx-auto mr-8">
          <div className="relative flex items-center mx-1">
            <button
              className="flex font-semibold hover:text-green-600 focus:outline-none"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <span className="mx-1 items-center">
                <Icon icon="pajamas:user" className="h-6 w-6" />
              </span>
              REGISTER
              {!isOpen ? (
                <Icon icon="system-uicons:chevron-down" className="h-6 w-6" />
              ) : (
                <Icon icon="system-uicons:chevron-up" className="h-6 w-6" />
              )}
            </button>
            {isOpen && (
              <div
                className="absolute bg-slate-100  top-12 flex flex-col items-start rounded-lg 
              p-2 w-full"
              >
                {register.map((item, i) => (
                  <div
                    className="flex flex-col text-slate-700 w-full justify-between p-1
                    hover:bg-slate-600 hover:text-white cursor-pointer rounded-r-lg 
                    border-l-transparent hover:border-l-slate-400 border-l-4 bg-white"
                    key={i}
                  >
                    <Link href={"/teacherRegister"}>
                      <span className="font-semibold hover:underline">
                        {item.teacherRegister}
                      </span>
                    </Link>
                    <Link href={"/studentRegister"}>
                      <span className="font-semibold hover:underline">
                        {item.studentRegister}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center ml-3">
            <Link
              href="/"
              className="flex font-semibold hover:text-green-600 focus:outline-none"
            >
              <span className="mx-1 items-center">
                <Icon icon="ant-design:home-filled" className="h-6 w-6" />
              </span>
              Home
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
