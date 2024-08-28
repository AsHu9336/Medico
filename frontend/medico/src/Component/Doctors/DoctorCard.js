import React, { startTransition } from "react";
import { RiStarFill } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import StarImg from "../../assets/images/Star.png";
export default function DoctorCard(DoctorsList) {
  console.log(DoctorsList.detail);
  return (
    <>
      {DoctorsList.detail.map((data, index) => (
        <div
          class="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-blue-400"
          key={index}
        >
          <div class="relative">
            <img
              class="w-full h-48 object-cover"
              src={data.photo}
              alt="Profile Image"
            />
          </div>
          <div class="px-6 py-4">
            <div class="text-xl font-semibold text-gray-800">{data.name}</div>

            <div className="flex flex-row justify-between">
              <span class="inline-block gap-2 px-2 py-1 font-semibold text-teal-900 bg-teal-200 ">
                {data.specialty}
              </span>
              <span class="flex flex-row px-2 py-1 font-semibold gap-2">
                {/* <RiStarFill className="flex bg-yellow-400 items-center justify-center " /> */}
                <img
                  class="w-4 h-4  object-cover"
                  src={StarImg}
                  alt="Profile Image"
                />
                {data.avgRating}({data.totalRating})
              </span>
            </div>
          </div>
          <div class="px-6 py-4 flex flex-row ">
            <div class="  text-gray-800">
              <h1 className="text-lg font-semibold">
                +{data.totalPatients} Patients
              </h1>
              <p className="text-sm">{data.hospital}</p>
            </div>

            <div className="h-12 w-12 rounded-full shadow-sm  shadow-gray-500  bottom-1 border-solid border-black flex justify-center items-center mx-auto hover:bg-blue-600">
              <FaArrowRightLong />
            </div>
          </div>

          <div class="px-6 py-4"></div>
        </div>
      ))}
    </>
  );
}
