import React from 'react'

const HeroSection = () => {
  return (
    <>
     <div className='flex px-5 py-16 gap-16 justify-center items-center'>
        <div className="flex flex-col gap-5 justify-center">
            <p className='text-white bg-[#a5b7ee] w-56 px-2 py-1 text-sm rounded-full'>INTERNAL MEDICINE SPECIALIST</p>
            <h1 className='text-black text-6xl font-bold '>Precision Care <br/>
            <span className='text-[#2563EB]'>Defined By You</span> </h1>
            <p className='text-gray-500 w-[420px]'>Exprecience a new standard of healthcare at The Care Atelier, Where Dr. Julian Vane Blends clinical excellence with a bespoke, patient-centered philosphy</p>
            <div className='flex justify-start items-center font-semibold gap-4'>
            <button  className='px-4 py-2 text-white bg-[#2563EB] rounded-full' >Schedule Consultation</button>
            <button className='px-4 py-2 text-[#2563EB] bg-[#F9FAFB] rounded-full'>Explore Services</button>

            </div>
        
        </div>

        <div className="right">
            <img className='rounded-lg w-[570px]' src="https://images.unsplash.com/photo-1673865641073-4479f93a7776?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image is loading" />
        </div>
        </div> 
    </>
  )
}

export default HeroSection
