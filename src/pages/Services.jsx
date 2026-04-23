import React from 'react'
import { SiAdguard } from "react-icons/si";


const Services = () => {
  return (
       <section className='flex flex-col-reverse lg:flex-row px-6 lg:px-16 py-12 lg:py-20 gap-10 lg:gap-16 items-center'>
<div className='flex justify-center items-center'>
  
        <div className="flex flex-col gap-6 max-w-xl text-center lg:text-left">

          <p className='text-[#2563EB] text-sm'>
            Precision Healthcare
          </p>

          <h1 className='text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight'>
            Our Curated  <br />
            <span className='text-[#2563EB]'> <span className='text-black'>Clinical</span> Services</span>
          </h1>

          <p className='text-gray-500'>
           Exprience a standard of medical excellence designed around your lifestyle. Our bespoke clinical program blend authoritative expertise with a serene, patient-first environment
          </p>

          </div>

          <div className='bg-gray-50 px-5 py-4 rounded-xl'> 
            <div className='flex flex-col gap-5'>
              <span className='text-3xl text-[#2536EB]'><SiAdguard/></span>
              <h1 className='text-2xl font-semibold '>Patient Quality Guarantee</h1>
              <p className=''>
                Every treatment path is meticulously  managed by our board-certified specialists.
              </p>
            </div>
          </div>


</div>
        
        </section>
  )
}

export default Services
