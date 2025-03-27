import React from "react";
import HeroBg from "./assets/polygon1.jpeg";
import { FaUser } from "react-icons/fa";

const bgStyle = {
  backgroundImage: `url(${HeroBg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100vh", // Full viewport height
};

function Aboutus({ HandlePopup }) {
  return (
    <div>
      <div style={bgStyle} className="py-14">
        <div className="container mx-auto min-h-[500px] relative z-10 px-4">
          <h1
            data-aos="fade"
            className="pt-20 tracking-wider text-4xl font-semibold text-white text-center md:text-5xl"
          >
            About Us
          </h1>
          {/* Card Section */}
          <div
            data-aos="fade"
            data-aos-delay="300"
            className="bg-white/80 my-10 p-6 rounded-md shadow-md md:p-10"
          >
            <p className="text-gray-800 text-base md:text-lg">
              Welcome to{" "}
              <span className="font-bold text-fuchsia-400">Burger Haven</span>,
              where we believe that a great burger is not just a meal but a
              celebration of flavor. Our mission is to deliver mouth-watering
              burgers straight to your door, ensuring that every bite is a
              delight.
            </p>
            <p className="mt-2 text-gray-800 text-base md:text-lg">
              We understand the hustle and bustle of modern life, which is why
              we’ve made it our priority to provide fast, convenient, and
              delicious burger delivery. Our burgers are crafted from the
              freshest ingredients, grilled to perfection, and customized to
              satisfy your cravings. Join us in savoring the joy of great
              burgers, made easy!
            </p>
          </div>
          <div className="pt-10 flex justify-center">
            <button
              onClick={HandlePopup}
              className="flex justify-center items-center gap-2"
              style={{
                backgroundColor: "#D2691E", // Match the navbar logo color
                color: "#fff", // White text for contrast
                height: "40px",
                fontSize: "1.25rem",
                padding: "0 1.25rem", // Adjust padding
                borderRadius: "0.375rem", // Rounded corners
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <FaUser />
              My Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
