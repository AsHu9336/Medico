import React from "react";
import { services } from "../../assets/data/services";
import ServiceCard from "./ServiceCard";
export default function ServiceList() {
  //console.log(services);
  return (
    <>
      <div className="flex flex-row flex-wrap ">
        {
            <ServiceCard detail = {services} />
        }
      </div>
    </>
  );
}
