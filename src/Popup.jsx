import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

function Popup({ showPopup, setShowPopup }) {
  return (
    <div>
      {showPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white rounded-md duration-200 w-[300px]">
            {/* Header section */}
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-dark">Login</h1>
              <IoCloseOutline
                className="text-2xl cursor-pointer"
                onClick={() => setShowPopup(false)}
              />
            </div>
            <div>
              {/* Additional content can go here */}
              <div className="mt-4">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full rounded-md border border-gray-300 px-2 py-1 mb-4"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full rounded-md border border-gray-300 px-2 py-1 mb-4"
                />
                {/* Login button section */}
                <div>
                  <button
                    className="w-full bg-[#D2691E] text-white rounded-md py-2" // Button color matches theme
                    onClick={() => setShowPopup(false)}
                  >
                    Login
                  </button>
                </div>
                {/* Social login */}
                <div className="mt-4">
                  <p className="text-center">or login with</p>
                  <div className="flex justify-center gap-2 mt-2">
                    <FaFacebook className="text-3xl hover:text-[#3b5998] duration-200" />{" "}
                    {/* Facebook hover color */}
                    <FaGoogle className="text-3xl hover:text-[#D2691E] duration-200" />{" "}
                    {/* Google hover color */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
