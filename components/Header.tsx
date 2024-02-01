"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "/app/img/Logo.png";
import { Icon } from "@iconify/react";
import { useState } from "react";

function Header() {
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
            className="rounded-lg mr-1 md:mx-auto "
          />
        </Link>
        <a
          href="/"
          className="rounded-lg px-1 py-4 mx-1 transition-colors hover:text-orange-400"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            TEACHER - STUDENT PORTAL{" "}
          </h2>
        </a>

        <div className="flex flex-row mx-auto mr-8">
          <div className="flex items-center mx-1">
            <Link
              href="/Register"
              className="flex font-semibold hover:text-orange-400 focus:outline-none"
            >
              <span className="mx-1 items-center">
                <Icon icon="pajamas:user" className="h-6 w-6" />
              </span>
              Register
            </Link>
          </div>

          <div className="flex items-center ml-3">
            <Link
              href="/"
              className="flex font-semibold hover:text-orange-400 focus:outline-none"
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
