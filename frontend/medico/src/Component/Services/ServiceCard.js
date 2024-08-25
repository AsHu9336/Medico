import React from "react";

export default function ServiceCard(services) {
  return (
    <>
      {services.detail.map((data , index) => (
        <div className="w-full sm:w-1/2 lg:w-1/3 py-10 px-3" key={index}  >
          <div className="relative h-full ml-0 md:mr-10" >
            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 shadow shadow-blue-800 rounded-lg"></span>
            <div  className="relative h-full p-5 border-2 border-blue-500 rounded-lg" style={{backgroundColor : `${data.bgColor}`, color : `${data.textcolor}`}} >
              <div className="flex items-center -mt-1">
                <h3 className="my-2 ml-3 text-lg font-bold" >
                  {data.name}
                  
                </h3>
              </div>
              <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">
                ------------
              </p>
              <p className="mb-2 text-gray-600">
               {data.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
      
    </>
  );
}
