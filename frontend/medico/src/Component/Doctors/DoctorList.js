import React from "react";
import { doctors } from "../../assets/data/doctors";
import DoctorCard from "./DoctorCard";
export default function ServiceList() {
  //console.log(services);
  return (
    <>
      <section>
        <div class="bg-teal-500 text-white ">
          <div class="container mx-auto ">
            <div class="flex flex-col items-center py-10 text-center lg:py-20">
              <div class="w-full px-4 lg:w-1/2 lg:px-0">
                <div class="mb-8">
                  <h2 class="text-3xl lg:text-4xl font-bold mb-3">
                    Find a Doctor
                  </h2>
                  {/* <p class="text-lg lg:text-xl opacity-80">
                    Search the forum for the answer to your question
                  </p> */}
                </div>

                <div class="mb-10">
                  <div class="relative">
                    {/* <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        class="w-4 h-4 text-gray-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        ></path>
                      </svg>
                    </div> */}

                    <form action="#" method="GET">
                      <input
                        type="search"
                        name="search"
                        placeholder="Search here for threads"
                        class="p-4 pl-10 text-gray-600 rounded w-full border-gray-100"
                      />
                    </form>
                  </div>
                </div>

                {/* <div class="text-lg">
                  <p>
                    Can't find what you're looking for?
                    <br class="sm:hidden" />
                    <a href="#" class="border-b border-white pb-1">
                      Create a new thread
                    </a>
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20 lg:">
        <div className="flex flex-row flex-wrap ">
          {<DoctorCard detail={doctors} />}
        </div>
      </section>
    </>
  );
}
