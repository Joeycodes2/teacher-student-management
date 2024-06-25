import React from "react";
// import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer
      className="flex flex-row w-screen items-center  py-0 justify-between top-0
      mb-0 bg-[#2B2B2B] hover:bg-gray-900 cursor-pointer"
    >
      <Link href="/" className="flex items-center px-4 mx-auto">
        <p className="text-center text-xs text-slate-600 items-center mx-auto my-2 hover:text-slate-700">
          © {year} Joeycodes Development
        </p>
      </Link>
    </footer>
  );
}

export default Footer;
