import React from "react";
import AboutImg from "./about.png";
import AboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <section>
        <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div class="mx-auto flex flex-col md:flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[130px]">
            {/* ----------------------************ Image Section ******************* ------------------------------ */}
            <div class="relative mt-12 md:mt-0">
              <img
                src={AboutImg}
                alt="About Us Image"
                class="object-cover rounded-lg shadow-md z-10"
              />

              <div class="absolute object-cover rounded-lg shadow z-20 right-[30%] lg:right-[-15%] bottom-4">
                <img src={AboutCardImg} alt="About Us Image" />
              </div>
            </div>
            {/* ---------------------------**************************---------------------- */}

            <div class="max-w-lg ">
              <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Proud to be one of the nations best
              </h2>
              <p class="mt-4 text-gray-600 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                quis eros at lacus feugiat hendrerit sed ut tortor. Suspendisse
                et magna quis elit efficitur consequat. Mauris eleifend velit a
                pretium iaculis. Donec sagittis velit et magna euismod, vel
                aliquet nulla malesuada. Nunc pharetra massa lectus, a fermentum
                arcu volutpat vel.
              </p>
              <div class="mt-8">
                <Link
                  to="/doctors"
                  class="text-blue-500 hover:text-blue-600 font-medium"
                >
                  <button
                    type="button"
                    class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
