import React, { useState } from 'react'

const Navbar = () => {

  const [navItem, setNavItem] = useState([
    { item: "Home", isActive: true },
    { item: "About", isActive: false },
    { item: "Services", isActive: false },
    { item: "Contact", isActive: false }
  ]);

  const handleActive = (clickedIndex) => {
    const updatedNav = navItem.map((nav, index) => {
      return {
        ...nav,
        isActive: index === clickedIndex
      }
    });

    setNavItem(updatedNav);
  };

  return (
    <div className='flex justify-between items-center px-7 py-3 bg-[#F9FAFB]'>

      <div className='font-bold text-lg'>The Care Atelier</div>

      <ul className="flex items-center gap-6">
        {navItem.map((nav, index) => (
          <li
            key={index}
            onClick={() => handleActive(index)}
            className={`
              cursor-pointer pb-1 transition-all duration-200
              ${nav.isActive 
                ? "text-[#2563EB] border-b-2 border-[#2563EB]" 
                : "text-[#616D7F]"
              }
              hover:text-[#2563EB] hover:border-b-2 hover:border-[#2563EB]
            `}
          >
            {nav.item}
          </li>
        ))}
      </ul>

      <button className='px-4 py-2 text-white bg-[#2563EB] rounded-full'>
        Book Appointment
      </button>

    </div>
  )
}

export default Navbar