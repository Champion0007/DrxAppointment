import React from 'react'
import { VscVerifiedFilled } from "react-icons/vsc";
import { MdStars, MdTimeline } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";
import { HiTranslate } from "react-icons/hi";
import { MdOutlineElectricBolt } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { SiAdguard } from "react-icons/si";




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
            Born in New York and trained at the world's most prestigious medical institutions, Dr. Julian Vance realized early in his career that modern medicine often lacks the "Atelier" touch -a space where care is carefully curated for the individual.
          </p>

          <p>
            With over two decades of experience in complex cardiovascular systems, he founded The Care Atelier to bridge the gap between surgical precision and personalized attention.
          </p>

          <p>
            Today, he leads a team dedicated to ensuring every patient feels seen, heard, and meticulously cared for.
          </p>
        </div>

      </section>

      
      <section className='px-6 lg:px-16 py-12 bg-gray-50'>

        <h1 className='text-2xl sm:text-3xl font-semibold mb-8'>
          Academic & Professional Journey
        </h1>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>

         
          <div className='bg-white p-6 rounded-xl shadow-sm'>

            <div className='flex items-center gap-3 mb-5'>
              <RiGraduationCapFill className='text-[#2563EB] text-2xl'/>
              <h2 className='font-semibold text-lg'>Education</h2>
            </div>

            <div className='flex flex-col gap-4 text-gray-600'>
              <div>
                <p className='font-medium'>Johns Hopkins University</p>
                <p className='text-sm'>Doctor of Medicine (M.D.)</p>
              </div>

              <div>
                <p className='font-medium'>Harvard Medical School</p>
                <p className='text-sm'>Master of Science in Health Policy</p>
              </div>
            </div>

          </div>

       
          <div className='bg-white p-6 rounded-xl shadow-sm'>

            <div className='flex items-center gap-3 mb-5'>
              <MdTimeline className='text-[#2563EB] text-2xl'/>
              <h2 className='font-semibold text-lg'>Experience Timeline</h2>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>

              <div className='bg-gray-100 p-4 rounded-xl'>
                <p className='text-blue-600 text-sm font-semibold'>2018 -Present</p>
                <h3 className='font-semibold'>Chief of Surgery</h3>
                <p className='text-sm text-gray-500'>Metropolitan Health Institute</p>
              </div>

              <div className='bg-gray-100 p-4 rounded-xl'>
                <p className='text-blue-600 text-sm font-semibold'>2012 -2018</p>
                <h3 className='font-semibold'>Attending Surgeon</h3>
                <p className='text-sm text-gray-500'>Central York Cardiac Center</p>
              </div>

              <div className='bg-gray-100 p-4 rounded-xl'>
                <p className='text-blue-600 text-sm font-semibold'>2008 -2012</p>
                <h3 className='font-semibold'>Surgical Residency</h3>
                <p className='text-sm text-gray-500'>Stanford University Medical Center</p>
              </div>

              <div className='bg-gray-100 p-4 rounded-xl'>
                <p className='text-blue-600 text-sm font-semibold'>2004 -2008</p>
                <h3 className='font-semibold'>Fellowship in Cardiology</h3>
                <p className='text-sm text-gray-500'>Mayo Clinic College of Medicine</p>
              </div>

            </div>

          </div>

        </div>


        <div className='flex w-full justify-center items-center gap-5 px-5 py-5'>
          <div className='flex flex-col justify-center  gap-5'>
            <h1 className='text-3xl font-bold'>Board Certifications</h1>
            <p>Recognized by the leading global medical authorities for excellence in surgical  Practice and patient safety.</p>
            <div className='flex justify-center items-center text-xs gap-0.5'>
            <span className='bg-white shadow-lg rounded-xl px-2 py-2 font-semibold'>
              ABMS Certified 
            </span>
            <span className='bg-white shadow-lg rounded-xl px-2 py-2 font-semibold'>
              F.A.C.S
            </span>
            <span className='bg-white shadow-lg rounded-xl px-2 py-2 font-semibold'>
              AHA Gold Standard 
            
            </span>
          
            <span className='bg-white shadow-lg rounded-xl px-2 py-2 font-semibold'>
              Board of Vascular Surgery
            </span>
            </div>

            
          </div>
          <div  > <img className='rounded-lg shadow-lg w-96 ' src="/image.png" alt="" /></div>
          <div  className='flex flex-col bg-[#2562EB] px-2 py-2 rounded-xl text-white gap-10'> <span className='text-3xl '>
            <HiTranslate/>

            </span>

<div className='px-5 py-5'>
            <h1>Multilinugal Care</h1>
            <p>
              We Provide Consultation in  English, Spanish, and French for our international patients.
              </p>
              </div>
          </div>
        </div>

      </section>

      <section className='bg-[#2536EB] px-6 lg:px-16 py-16'>

  <div className='flex flex-col lg:flex-row gap-10 items-center'>

    
    <div className='bg-white/15 backdrop-blur-md text-white rounded-2xl shadow-lg p-8 w-full lg:w-1/2 flex flex-col gap-5'>

      <h2 className='text-white/80 text-sm tracking-wide'>OUR VISION</h2>

      <h1 className='text-2xl sm:text-3xl font-semibold leading-snug'>
        Redefining the standard of clinical excellence.
      </h1>

      <p className='text-white/70 text-sm leading-relaxed'>
        "We envision a world where high-acuity medical care is synonymous with tranquility. 
        At The Care Atelier, we don't just treat conditions; we nurture the environment in which healing occurs."
      </p>

    </div>

  
    <div className='flex flex-col gap-6 w-full lg:w-1/2'>

      
      <div className='flex items-start gap-4'>
        <div className='bg-white/20 p-3 rounded-full text-white'>
          <MdOutlineElectricBolt />
        </div>
        <div className='text-white'>
          <h3 className='font-semibold'>Innovation with Intent</h3>
          <p className='text-white/70 text-sm'>
            Utilizing the latest robotic and diagnostic technologies only when they enhance the human outcome.
          </p>
        </div>
      </div>

    
      <div className='flex items-start gap-4'>
        <div className='bg-white/20 p-3 rounded-full text-white'>
          <FaHeart/>
          
        </div>
        <div className='text-white'>
          <h3 className='font-semibold'>Empathetic Precision</h3>
          <p className='text-white/70 text-sm'>
            Merging clinical expertise with deep emotional intelligence to support patients and their families.
          </p>
        </div>
      </div>

     
      <div className='flex items-start gap-4'>
        <div className='bg-white/20 p-3 rounded-full text-white'>
        <SiAdguard/>

        </div>
        <div className='text-white'>
          <h3 className='font-semibold'>Radical Transparency</h3>
          <p className='text-white/70 text-sm'>
            Every procedure, every cost, and every risk explained with absolute clarity and honesty.
          </p>
        </div>
      </div>

    </div>

  </div>

  
 

</section>

<section>
   <div className='bg-white mt-16 rounded-xl py-12 px-6 flex flex-col items-center text-center gap-5'>

    <h2 className='text-2xl sm:text-3xl font-semibold text-gray-800'>
      Ready to prioritize your health?
    </h2>

    <p className='text-gray-500 max-w-xl'>
      Schedule a private consultation with Dr. Vance to discuss your surgical or cardiovascular needs.
    </p>

    <div className='flex flex-col sm:flex-row gap-4 mt-3'>
      <button className='bg-[#2563EB] text-white px-6 py-2 rounded-full shadow-md hover:scale-105 transition'>
        Book a Consultation
      </button>

      <button className='bg-blue-100 text-[#2563EB] px-6 py-2 rounded-full hover:scale-105 transition'>
        View Our Services
      </button>
    </div>

  </div>
</section>
    </>
  )
}

export default About