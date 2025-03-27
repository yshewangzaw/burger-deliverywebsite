import React from "react";
import { FaCaretDown, FaUser } from "react-icons/fa";
import LogoImage from "./assets/logo1.png"; // Replace with the path to your logo image

function TestNavbar({ HandlePopup }) {
  return (
    <div
      className="bg-[#FFFAF0] shadow-[0_2px_4px_rgba(0,0,0,0.1)] relative z-50" // Set z-index here
      data-aos="fade-up"
    >
      <div className="max-w-[1200px] mx-auto flex justify-between items-center p-4">
        {/* Logo Section */}
        <div>
          <img
            src={LogoImage}
            alt="Logo"
            className="h-30" // Adjust height as needed
          />
        </div>

        {/* Navlinks Section */}
        <div>
          <ul className="flex items-center gap-8 list-none">
            <li>
              <a
                href="#home"
                className="text-[#8B4513] hover:text-[#D2691E] transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-[#8B4513] hover:text-[#D2691E] transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-[#8B4513] hover:text-[#D2691E] transition-colors duration-300"
              >
                Contact
              </a>
            </li>

            {/* Dropdown Section */}
            <li className="relative group">
              <a className="flex items-center gap-1 text-[#8B4513] cursor-pointer">
                Dropdown{" "}
                <FaCaretDown className="transition-transform duration-300 group-hover:rotate-180" />
              </a>

              {/* Dropdown Menu */}
              <div className="absolute z-50 hidden w-48 bg-white text-black shadow-lg py-2 px-2 rounded-md group-hover:block">
                <ul>
                  <li>
                    <a
                      href="#"
                      className="block px-2 py-2 hover:bg-[#FFE4B5] transition-colors duration-300"
                    >
                      Burgers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-2 py-2 hover:bg-[#FFE4B5] transition-colors duration-300"
                    >
                      Sides
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-2 py-2 hover:bg-[#FFE4B5] transition-colors duration-300"
                    >
                      Drinks
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-2 py-2 hover:bg-[#FFE4B5] transition-colors duration-300"
                    >
                      Desserts
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            {/* User Account Button */}
            <li>
              <button
                onClick={HandlePopup}
                className="flex items-center gap-2 bg-[#D2691E] text-white h-10 px-4 rounded-lg transition-transform duration-300 hover:scale-105"
              >
                <FaUser />
                My Account
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TestNavbar;
