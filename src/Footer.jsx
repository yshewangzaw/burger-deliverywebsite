import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FFFAF0] py-8 border-t border-[#D2691E]/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          {/* Links Section */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold mb-3 text-[#D2691E]">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/" // Use Link for navigation to Home
                  className="text-[#8B4513] hover:text-[#D2691E] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about" // Use Link for navigation to About
                  className="text-[#8B4513] hover:text-[#D2691E] transition-colors"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact" // Use Link for navigation to Contact
                  className="text-[#8B4513] hover:text-[#D2691E] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="text-center">
            <h2 className="text-lg font-bold mb-3 text-[#D2691E]">Follow Us</h2>
            <div className="flex justify-center space-x-5">
              <a
                href="#"
                className="text-[#8B4513] hover:text-[#D2691E] transition-colors"
              >
                <FaFacebook size={22} />
              </a>
              <a
                href="#"
                className="text-[#8B4513] hover:text-[#D2691E] transition-colors"
              >
                <FaTwitter size={22} />
              </a>
              <a
                href="#"
                className="text-[#8B4513] hover:text-[#D2691E] transition-colors"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="#"
                className="text-[#8B4513] hover:text-[#D2691E] transition-colors"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold mb-3 text-[#D2691E]">
              Contact Us
            </h2>
            <p className="text-[#8B4513]">info@kiyaburger.com</p>
            <p className="text-[#8B4513]">+2519123456</p>
          </div>
        </div>

        {/* Feed Up Section */}
        <div className="mt-8 text-center bg-[#D2691E] text-white p-6 rounded-md">
          <h2 className="text-lg font-bold mb-3">Feed Up</h2>
          <p className="mb-4">
            Join our mailing list for exclusive offers and updates on new menu
            items!
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-md border border-white focus:outline-none focus:ring-2 focus:ring-[#FFFAF0]"
            />
            <button className="bg-white text-[#D2691E] px-4 py-2 rounded-r-md hover:bg-[#FFFAF0] transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        <div className="mt-8 text-center pt-6 border-t border-[#D2691E]/30">
          <p className="text-sm text-[#8B4513]">
            &copy; {new Date().getFullYear()} kiyaburger
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
