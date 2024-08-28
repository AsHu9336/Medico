import React from 'react'
import {services} from '../assets/data/services'
import ServiceCard from '../Component/Services/ServiceCard'

export default function Services() {
  return (
    <>
    <div className="flex flex-row flex-wrap ">
        {
            <ServiceCard detail = {services} />
        }
      </div>
    
    </>
  )
}
