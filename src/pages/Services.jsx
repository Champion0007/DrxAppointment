import React from "react";
import { SiAdguard } from "react-icons/si";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { IoBagAddOutline } from "react-icons/io5";
import { PiHeartbeat } from "react-icons/pi";

const Services = () => {
  return (
    <>
      <section className="flex flex-col-reverse lg:flex-row px-6 lg:px-16 py-12 lg:py-20 gap-10 lg:gap-16 items-center">
        <div className="flex  items-center gap-10">
          <div className="flex flex-col  gap-6 max-w-xl text-center lg:text-left">
            <p className="text-[#2563EB] text-sm">Precision Healthcare</p>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
              Our Curated <br />
              <span className="text-[#2563EB]">
                {" "}
                <span className="text-black">Clinical</span> Services
              </span>
            </h1>

            <p className="text-gray-500">
              Exprience a standard of medical excellence designed around your
              lifestyle. Our bespoke clinical program blend authoritative
              expertise with a serene, patient-first environment
            </p>
          </div>

          <div className="bg-gray-50 px-5 py-4 rounded-xl">
            <div className="flex flex-col gap-5">
              <span className="text-3xl text-[#2536EB]">
                <SiAdguard />
              </span>
              <h1 className="text-2xl font-semibold ">
                Patient Quality Guarantee
              </h1>
              <p className="">
                Every treatment path is meticulously managed by our
                board-certified specialists.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-16 py-16 bg-gray-50">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* CARD 1 (Image + Content) */}
          <div className="flex bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
            <img
              className="w-1/2 object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAD4OPbmuFb8pYoEFnTHK6BLSLORVU3Kq065QokwJocjRSr5KWJU_3MEFtWkskvCLXTuIzYur9lW9WNKqoH69HVvnQgALOerfn9w_2StFTgPU5OKACNlheUZM5PLoV0uwNZ-RxOFp3EKCj06aNFjtLdkxCalw-uQF7_EJ_EytDpYDuMioPZW5uxzFFHDsLAqECq0PR21oE-bKhLDRCCpWvKctLj-MlPIPn00bhEg1Sy6f1E3vQQmPJ5FopAhud5SIqe-Eceq24BmYY"
              alt="service"
            />

            <div className="p-5 flex flex-col gap-3">
              <IoBagAddOutline className="text-[#2563EB] text-xl" />

              <h2 className="font-semibold text-lg">
                Executive Health Assessment
              </h2>

              <p className="text-gray-500 text-sm">
                Our signature full-body diagnostic suite, designed for those who
                value comprehensive insights.
              </p>

              <button className="text-[#2563EB] text-sm font-medium flex items-center gap-1">
                Learn More →
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col gap-3">
            <PiHeartbeat className="text-[#2563EB] text-xl" />

            <h2 className="font-semibold text-lg">Precision Cardiology</h2>

            <p className="text-gray-500 text-sm">
              Advanced cardiovascular screening utilizing latest imaging for
              early detection.
            </p>

            <a href="#" className="text-[#2563EB] text-sm font-medium">
              Learn More
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col gap-3">
            <h2 className="font-semibold text-lg">Concierge Mental Wellness</h2>
            <p className="text-gray-500 text-sm">
              Private, high-touch psychiatric care and stress management
              programs.
            </p>
            <a href="#" className="text-[#2563EB] text-sm font-medium">
              Learn More
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col gap-3">
            <h2 className="font-semibold text-lg">Concierge Mental Wellness</h2>
            <p className="text-gray-500 text-sm">
              Private, high-touch psychiatric care and stress management
              protocols for high performance individuals.
            </p>
            <a href="#" className="text-[#2563EB] text-sm font-medium">
              Learn More
            </a>
          </div>

          <div className="bg-[#0F172A] rounded-2xl overflow-hidden relative flex items-end p-5 text-white">
            <img
              className="absolute inset-0 w-full h-full object-cover opacity-60"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBE0-Ncm_X1EWA2jfDEa5ZWEfQqSeTJaaJnki2utP07L3Pip_tRJxz801ctAx_bmF4UwilV-NEIZCSF7_H45i624h79mIrDAk0FziB8iDh4GMvb0OeusL6sG0OBy_KvuPDEs32T1QMOB048cN2TRGLwwboheflX3x4ugYUcW-Zh2BfmZlAXVn1XlG6RU85qMUbi6FPTfQUnJ8oQdyuu9j8cGRmrEaDLND4g0VmmeaWeARdwDMq8FAoG_c0gV-PFWKt2S6y2t-y7kOLX"
              alt="diagnostics"
            />
            <div className="relative">
              <p className="text-sm opacity-70">TECHNOLOGY</p>
              <h2 className="text-xl font-semibold">In-house Diagnostics</h2>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col gap-3">
            <h2 className="font-semibold text-lg">Genetic Sequencing</h2>
            <p className="text-gray-500 text-sm">
              Personalized healthcare based on your unique DNA. We interpret your Genetic markers to predict and prevent future risks.
            </p>
            <a href="#" className="text-[#2563EB] text-sm font-medium">
              Learn More
            </a>
          </div>

          <div className="bg-[#2563EB] text-white p-6 rounded-2xl flex flex-col gap-4 justify-between">
            <h2 className="text-lg font-semibold">On-Call Pediatric Care</h2>
            <p className="text-sm opacity-90">
              Dedicated pediatrician available via private portal.
            </p>

            <button className="bg-white text-[#2563EB] px-4 py-2 rounded-full text-sm font-medium">
              Request Access
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
