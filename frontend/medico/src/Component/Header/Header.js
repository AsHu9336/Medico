import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="flex flex-wrap items-center justify-between p-3 bg-gradient-to-r to-emerald-300 from-sky-200">
      {/* <img
        src="https://tailwindflex.com/public/favicon.ico"
        className="h-10 w-10"
        alt=""
      /> */}
      <h1 class="mb-2 text-2xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Medico
        </span>{" "}
      </h1>
      <div className="flex md:hidden">
        <button id="hamburger">
          <img
            className="toggle block"
            src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
            width="48"
            height="48"
          />
          <img
            className="toggle hidden"
            src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
            width="48"
            height="48"
          />
        </button>
      </div>

      {/* Middle Section */}
      <div className="toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-teal-900 md:border-none">
        <Link
          href="#"
          className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none"
        >
          Home
        </Link>
        <Link
          href="#"
          className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none"
        >
          Products
        </Link>
        <Link
          href="#"
          className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none"
        >
          Pricing
        </Link>
        <Link
          href="#"
          className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none"
        >
          Contact
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Link>
        <img
          class="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800 mx-auto my-4"
          src="https://randomuser.me/api/portraits/women/21.jpg"
          alt=""
        ></img>
        </Link>

        <Link
          href="#"
          className="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-teal-900 hover:bg-teal-500 text-white md:rounded"
        >
          Create Account
        </Link>
      </div>
    </nav>
  );
}
