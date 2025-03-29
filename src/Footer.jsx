import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FFFAF0] py-8 border-t border-[#D2691E]/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          {/* Quick Links Section */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold mb-3 text-[#D2691E]">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-[#8B4513] hover:text-[#D2691E] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#8B4513] hover:text-[#D2691E] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#8B4513] hover:text-[#D2691E] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="text-center">
            <h2 className="text-lg font-bold mb-3 text-[#D2691E]">Follow Us</h2>
            <div className="flex justify-center space-x-5">
              <a
                href="https://www.facebook.com"
                className="text-[#8B4513] hover:text-[#D2691E] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={22} />
              </a>
              <a
                href="https://www.twitter.com"
                className="text-[#8B4513] hover:text-[#D2691E] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={22} />
              </a>
              <a
                href="https://www.instagram.com"
                className="text-[#8B4513] hover:text-[#D2691E] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="https://www.linkedin.com"
                className="text-[#8B4513] hover:text-[#D2691E] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
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

        {/* Copyright Section */}
        <div className="mt-8 text-center pt-6 border-t border-[#D2691E]/30">
          <p className="text-sm text-[#8B4513]">
            &copy; {new Date().getFullYear()} Kiya Burger
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
