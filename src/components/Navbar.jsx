import { NavLink } from "react-router-dom";

const Navbar = () => {

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    {name: "Testimonial", path:"/tesimonial"}
  ];

  return (
    <div className='flex justify-between items-center px-7 py-3 bg-[#F9FAFB]'>

      <div className='font-bold text-lg'>The Care Atelier</div>

      <ul className="flex items-center gap-6">
        {navItems.map((nav) => (
          <NavLink
            key={nav.name}
            to={nav.path}
            className={({ isActive }) =>
              `pb-1 transition-all duration-200 cursor-pointer ${
                isActive
                  ? "text-[#2563EB] border-b-2 border-[#2563EB]"
                  : "text-[#616D7F]"
              } hover:text-[#2563EB] hover:border-b-2 hover:border-[#2563EB]`
            }
          >
            {nav.name}
          </NavLink>
        ))}
      </ul>

      <button className='px-4 py-2 text-white bg-[#2563EB] rounded-full'>
        Book Appointment
      </button>

    </div>
  );
};

export default Navbar;