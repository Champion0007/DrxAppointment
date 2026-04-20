import React from 'react'

const HeroSection = () => {
  return (
    <section className='flex flex-col-reverse lg:flex-row px-6 lg:px-16 py-12 lg:py-20 gap-10 lg:gap-16 items-center justify-between'>

      {/* LEFT CONTENT */}
      <div className="flex flex-col gap-5 text-center lg:text-left max-w-xl">
        
        <p className='text-white bg-[#a5b7ee] w-fit px-3 py-1 text-sm rounded-full mx-auto lg:mx-0'>
          INTERNAL MEDICINE SPECIALIST
        </p>

        <h1 className='text-3xl sm:text-4xl lg:text-6xl font-bold text-black leading-tight'>
          Precision Care <br/>
          <span className='text-[#2563EB]'>Defined By You</span>
        </h1>

        <p className='text-gray-500 text-sm sm:text-base'>
          Experience a new standard of healthcare at The Care Atelier, where 
          Dr. Julian Vane blends clinical excellence with a bespoke, patient-centered philosophy.
        </p>

        <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
          <button className='px-5 py-2 text-white bg-[#2563EB] rounded-full'>
            Schedule Consultation
          </button>

          <button className='px-5 py-2 text-[#2563EB] bg-[#F1F5F9] rounded-full'>
            Explore Services
          </button>
        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full max-w-md lg:max-w-xl">
        <img 
          className='rounded-xl w-full object-cover shadow-md'
          src="https://images.unsplash.com/photo-1673865641073-4479f93a7776?q=80&w=1470&auto=format&fit=crop"
          alt="Doctor"
        />
      </div>

    </section>
  )
}

export default HeroSection