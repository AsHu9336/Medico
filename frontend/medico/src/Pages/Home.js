import React from "react";
import { Link } from "react-router-dom";
import heroImg1 from "../assets/images/hero-img01.png";
import heroImg2 from "../assets/images/hero-img02.png";
import heroImg3 from "../assets/images/hero-img03.png";
import moduleName from "../";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import { FaArrowRight } from "react-icons/fa6";
import About from "../Component/About/About";
import ServiceList from "../Component/Services/ServiceList";


export default function Home() {
  return (
    <>
      {/* Hero Section Start here */}
      <main class="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
        <div className="bg-white dark:bg-gray-800 flex  relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex justify-center relative py-16">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
              <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
              <h1 className="font-bebas-neue uppercase text-5xl sm:text-4xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                We help Patients live a healthy life, longer life.
              </h1>
              <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                Dimension of reality that makes change possible and
                understandable. An indefinite and homogeneous environment in
                which natural events and human existence take place.
              </p>
              <div className="flex mt-8">
                <Link
                  href="#"
                  className="uppercase py-2 px-4 rounded-lg bg-gradient-to-r to-emerald-500 from-sky-400 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
                >
                  Request an Appointment
                </Link>
                {/* <a
                  href="#"
                  className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
                >
                  Read more
                </a> */}
              </div>
              <div className="flex mt-8">
                <p className="font-bebas-neue uppercase underline decoration-yellow-400 px-4 text-4xl sm:text-4xl font-black flex flex-col leading-none dark:text-white text-gray-500">
                  30+
                </p>
                <p className="font-bebas-neue uppercase underline decoration-purple-400 px-4 text-4xl sm:text-4xl font-black flex flex-col leading-none dark:text-white text-gray-600">
                  15+
                </p>
                <p className="font-bebas-neue uppercase underline decoration-green-400 px-4 text-4xl sm:text-4xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                  100+
                </p>
              </div>
            </div>
            <div className="flex gap-30px justify-end">
              <div>
                <img src={heroImg1} className="w-full" />
              </div>
              <div className="m-[30px]">
                <img
                  src={heroImg2}
                  className="max-w-xs md:max-w-sm mb-[30px]"
                />
                <img src={heroImg3} className="max-w-xs md:max-w-sm m-auto" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Hero Section end here */}

      <section>
        <div className="container mx-auto px-6 relative py-15">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="text-center text-[30px]">
              Providing the best medical services
            </h2>
            <p className="text-center text-para font-bebas-neue">
              World-class care for everyone. Our health system offer unmatched,
              expert health care
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex justify-center items-center ">
                <img src={icon01} alt=""></img>
              </div>
              <div className="mt-[30px]">
                <h1 className="text-24px text-center font-bold">
                  Find a Doctor
                </h1>
                <p className="text-center text-para font-bebas-neue">
                  World-class care for everyone. Our health system offer
                  unmatched, expert health care
                </p>
                <Link
                  to="/doctors"
                  className="h-12 w-12 rounded-full shadow-md shadow-gray-500 border-solid border-black flex justify-center items-center mx-auto hover:bg-blue-600"
                >
                  <FaArrowRight />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex justify-center items-center ">
                <img src={icon02} alt=""></img>
              </div>
              <div className="mt-[30px]">
                <h1 className="text-24px text-center font-bold">
                  Find a Location
                </h1>
                <p className="text-center text-para font-bebas-neue">
                  World-class care for everyone. Our health system offer
                  unmatched, expert health care
                </p>
                <Link
                  to="/doctors"
                  className="h-12 w-12 rounded-full shadow-md shadow-gray-500 border-solid border-black flex justify-center items-center mx-auto hover:bg-blue-600"
                >
                  <FaArrowRight />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex justify-center items-center ">
                <img src={icon03} alt=""></img>
              </div>
              <div className="mt-[30px]">
                <h1 className="text-24px text-center font-bold">
                  Book Appointment
                </h1>
                <p className="text-center text-para font-bebas-neue">
                  World-class care for everyone. Our health system offer
                  unmatched, expert health care
                </p>
                <Link
                  to="/doctors"
                  className="h-12 w-12 rounded-full shadow-md shadow-gray-500 border-solid border-black flex justify-center items-center mx-auto hover:bg-blue-600"
                >
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />

      <section>
        <div className="container mx-auto px-6 relative py-15">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="text-center text-[30px]">
              Our Medical Services
            </h2>
            <p className="text-center text-para font-bebas-neue">
              World-class care for everyone. Our health system offer unmatched,
              expert health care
            </p>
          </div>
          <ServiceList/>
        </div>

      </section>
    </>
  );
}
