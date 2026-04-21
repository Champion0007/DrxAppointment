import React from "react";
import { FaGlobe, FaAt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#F9FAFB] px-6 lg:px-16 py-12">

    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

    
        <div>
          <h2 className="text-xl font-semibold mb-4">The Care Atelier</h2>

          <p className="text-gray-500 text-sm leading-relaxed mb-5">
            Crafting health outcomes with precision and personalized care in the heart of the city.
          </p>

          <div className="flex gap-3">
            <div className="bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-gray-300">
              <FaGlobe />
            </div>
            <div className="bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-gray-300">
              <FaAt />
            </div>
          </div>
        </div>

       
        <div>
          <h3 className="font-semibold mb-4">Practice</h3>
          <ul className="flex flex-col gap-3 text-gray-500 text-sm">
            <li className="hover:text-[#2563EB] cursor-pointer">Our Approach</li>
            <li className="hover:text-[#2563EB] cursor-pointer">Patient Stories</li>
            <li className="hover:text-[#2563EB] cursor-pointer">Medical Research</li>
            <li className="hover:text-[#2563EB] cursor-pointer">Contact</li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="flex flex-col gap-3 text-gray-500 text-sm">
            <li className="hover:text-[#2563EB] cursor-pointer">Patient Portal</li>
            <li className="hover:text-[#2563EB] cursor-pointer">Privacy Policy</li>
            <li className="hover:text-[#2563EB] cursor-pointer">Terms of Service</li>
            <li className="hover:text-[#2563EB] cursor-pointer">Careers</li>
          </ul>
        </div>

      
        <div>
          <h3 className="font-semibold mb-4">Hours</h3>

          <div className="flex flex-col gap-3 text-gray-500 text-sm">
            <div className="flex justify-between">
              <span>Mon - Fri</span>
              <span>8:00 - 18:00</span>
            </div>

            <div className="flex justify-between">
              <span>Saturday</span>
              <span>9:00 - 14:00</span>
            </div>

            <div className="flex justify-between">
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </div>
        </div>

      </div>

    
      <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-3">

        <p>© 2024 The Curated Care Atelier. All rights reserved.</p>

        <div className="flex gap-6">
          <span className="hover:text-[#2563EB] cursor-pointer">Accessibility</span>
          <span className="hover:text-[#2563EB] cursor-pointer">NPI Registry</span>
        </div>

      </div>

    </footer>
  );
};

export default Footer;