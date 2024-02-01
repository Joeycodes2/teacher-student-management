import React from "react";
// import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer
      className="flex flex-row text-white items-center  py-0 justify-between top-0 w-full 
      bg-[#2B2B2B]"
    >
      <div className="flex items-center px-4 mx-auto">
        <p className="text-xs text-slate-600 items-center mx-auto mt-2 mb-2 hover:text-slate-700">
          © {year} Joeycodes
        </p>
      </div>
    </footer>
  );
}

export default Footer;
