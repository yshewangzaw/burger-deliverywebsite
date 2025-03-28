import React from "react";
import burger from "./assets/burger2.png";
import Button from "./button";

const bgStyle = {
  backgroundColor: "#ffebcd", // Light color for a warm and inviting feel
  width: "100%",
  height: "100vh", // Full viewport height
  position: "relative", // Ensure it's positioned correctly
  zIndex: 10, // Lower than the navbar
};

function Hero() {
  return (
    <div style={bgStyle} className="flex items-center justify-center">
      <div className="container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
          {/* Text Content Section */}
          <div
            className="text-center sm:text-left"
            style={{ color: "#8B4513" }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold" data-aos="fade-up">
              Savor the Best Burgers
              <span className="text-amber-900 font-cursive text-6xl sm:text-7xl">
                Delivered
              </span>{" "}
              Right to Your Doorstep!
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-4 lg:pr-64 text-lg"
              style={{ color: "#333" }}
            >
              Indulge in our mouth-watering burgers made from the freshest
              ingredients, delivered hot and fresh from just 400 Birr per week.
            </p>
          </div>
          {/* Image Section */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="relative z-10 order-1 sm:order-2"
          >
            <img
              src={burger}
              alt="Delicious Burger"
              className="w-full sm:scale-125 sm:translate-y-16 rounded-lg shadow-lg"
            />
          </div>
        </div>
        {/* Button Section */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="mt-8 text-center"
        >
          <Button
            style={{
              backgroundColor: "#D2691E", // Match the navbar logo color
              color: "#fff", // White text for contrast
            }}
            className="hover:bg-[#C65D1E] transition duration-300" // Added hover effect
          >
            Order Your Burger Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
