import React, { useState } from "react";
import { FaCaretDown, FaUser, FaBars, FaTimes } from "react-icons/fa";
import LogoImage from "./assets/logo1.png";
import { Link } from "react-router-dom";

function TestNavbar({ HandlePopup }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="bg-[#FFFAF0] shadow-[0_2px_4px_rgba(0,0,0,0.1)] relative z-50"
      data-aos="fade-up"
    >
      <div className="max-w-[1200px] mx-auto flex justify-between items-center p-4">
        <div>
          <img src={LogoImage} alt="Logo" className="h-30" />
        </div>

        <div className="hidden md:flex">
          <ul className="flex items-center gap-8 list-none">
            <li>
              <Link
                to="/"
                className="text-[#8B4513] hover:text-[#D2691E] transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-[#8B4513] hover:text-[#D2691E] transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-[#8B4513] hover:text-[#D2691E] transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
            <li className="relative group">
              <div className="flex items-center gap-1 text-[#8B4513] cursor-pointer">
                Menu{" "}
                <FaCaretDown className="transition-transform duration-300 group-hover:rotate-180" />
              </div>
              <div className="absolute z-50 hidden w-48 bg-white text-black shadow-lg py-2 px-2 rounded-md group-hover:block">
                <ul>
                  <li>
                    <Link
                      to="/burgers"
                      className="block px-2 py-2 hover:bg-[#FFE4B5] transition-colors duration-300"
                    >
                      Burgers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/specials"
                      className="block px-2 py-2 hover:bg-[#FFE4B5] transition-colors duration-300"
                    >
                      Specials
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/promotions"
                      className="block px-2 py-2 hover:bg-[#FFE4B5] transition-colors duration-300"
                    >
                      Promotions
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button
                onClick={HandlePopup}
                className="flex items-center gap-2 bg-[#D2691E] text-white h-10 px-4 rounded-lg transition-transform duration-300 hover:scale-105"
              >
                <FaUser /> My Account
              </button>
            </li>
          </ul>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-[#8B4513]" />
            ) : (
              <FaBars className="text-[#8B4513]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FFFAF0] shadow-lg">
          <ul className="flex flex-col items-center gap-4 p-4">
            <li>
              <Link
                to="/"
                className="text-[#8B4513] hover:text-[#D2691E] transition-colors duration-300"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-[#8B4513] hover:text-[#D2691E] transition-colors duration-300"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-[#8B4513] hover:text-[#D2691E] transition-colors duration-300"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/burgers"
                className="block px-2 py-2 hover:bg-[#FFE4B5] transition-colors duration-300"
                onClick={toggleMenu}
              >
                Burgers
              </Link>
            </li>
            <li>
              <Link
                to="/specials"
                className="block px-2 py-2 hover:bg-[#FFE4B5] transition-colors duration-300"
                onClick={toggleMenu}
              >
                Specials
              </Link>
            </li>
            <li>
              <Link
                to="/promotions"
                className="block px-2 py-2 hover:bg-[#FFE4B5] transition-colors duration-300"
                onClick={toggleMenu}
              >
                Promotions
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  HandlePopup();
                  toggleMenu();
                }}
                className="flex items-center gap-2 bg-[#D2691E] text-white h-10 px-4 rounded-lg transition-transform duration-300 hover:scale-105"
              >
                <FaUser /> My Account
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default TestNavbar;
