import React from 'react'
import { VscVerifiedFilled } from "react-icons/vsc";
import { MdStars } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";


const About = () => {
  return (
    <>
      
      <section className='flex flex-col-reverse lg:flex-row px-6 lg:px-16 py-12 lg:py-20 gap-10 lg:gap-16 items-center'>

        
        <div className="flex flex-col gap-6 max-w-xl text-center lg:text-left">

          <p className='text-[#2563EB] text-sm'>
            Meet Your Practitioner
          </p>

          <h1 className='text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight'>
            The Art Of Clinical <br/>
            <span className='text-[#2563EB]'>Precision</span>
          </h1>

          <p className='text-gray-500'>
            Dr. Julian Vance combines twenty years of cardiothoracic expertise with a bespoke, patient-centered approach that prioritizes longevity and holistic well-being.
          </p>

          
          <div className='flex flex-col sm:flex-row gap-6'>

           
            <div className='flex items-center gap-4'>
              <div className='bg-blue-100 p-2 rounded-full'>
                <VscVerifiedFilled className='text-blue-600 text-xl' />
              </div>
              <div>
                <p className='font-semibold'>Board Certified</p>
                <p className='text-sm text-gray-500'>American Board of Surgery</p>
              </div>
            </div>

           
            <div className='flex items-center gap-4'>
              <div className='bg-blue-100 p-2 rounded-full'>
                <MdStars className='text-blue-600 text-xl' />
              </div>
              <div>
                <p className='font-semibold'>Top Physician</p>
                <p className='text-sm text-gray-500'>Health Excellence Award '23</p>
              </div>
            </div>

          </div>

        </div>

        
        <div className="w-full max-w-md lg:max-w-xl">
          <img 
            className='rounded-xl w-full h-[400px] lg:h-[500px] object-cover shadow-md'
            src="https://images.unsplash.com/photo-1736289162890-78f1ff4f8bd3?q=80&w=746&auto=format&fit=crop"
            alt="Doctor"
          />
        </div>

      </section>

      
      <section className='flex flex-col lg:flex-row px-6 lg:px-16 py-12 lg:py-20 gap-10 bg-gray-100 rounded-lg'>

        
        <div className='text-2xl sm:text-3xl font-semibold'>
          <h1>
            <span className='border-b-4 border-[#2563EB] pb-1 inline-block'>
              Defin
            </span>
            ing a New Era of Care
          </h1>
        </div>

        <div className='flex flex-col gap-5 text-gray-500 max-w-2xl'>
          <p>
            Born in New York and trained at the world's most prestigious medical institutions, Dr. Julian Vance realized early in his career that modern medicine often lacks the “Atelier” touch — a space where care is carefully curated for the individual.
          </p>

          <p>
            With over two decades of experience in complex cardiovascular systems, he founded The Care Atelier to bridge the gap between surgical precision and personalized attention.
          </p>

          <p>
            Today, he leads a team dedicated to ensuring every patient feels seen, heard, and meticulously cared for.
          </p>
        </div>

      </section>

      <section>
        <h1>Academic  & Professional Journey</h1>
        <div><RiGraduationCapFill/>
        <h1>Education</h1>
        <div>
          <span>Johns Hopkins University</span>
          <span>
            Doctor of Medicine(M.D)
          </span>
        </div>
        <div>
          <span>Hardward Medical School</span>
          <span>
            Master Of Science in Health Policy
          </span>
        </div>
        </div>
      </section>
    </>
  )
}

export default About