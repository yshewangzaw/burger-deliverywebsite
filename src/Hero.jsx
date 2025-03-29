import React from "react";
import burger from "./assets/burger2.png";
import Button from "./button";

const bgStyle = {
  backgroundColor: "#ffebcd",
  width: "100%",
  height: "100vh",
  position: "relative",
  zIndex: 10,
};

function Hero() {
  return (
    <div style={bgStyle} className="flex items-center justify-center h-screen">
      <div className="container py-16 px-4 flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
          {/* Text Content Section */}
          <div
            className="text-center sm:text-left"
            style={{ color: "#8B4513" }}
          >
            <h1
              className="text-3xl sm:text-4xl font-bold mb-4"
              data-aos="fade-up"
            >
              Savor the Best Burgers
              <span className="text-amber-900 font-cursive text-5xl sm:text-6xl">
                Delivered
              </span>{" "}
              Right to Your Doorstep!
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-4 lg:pr-8 text-base sm:text-lg"
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
            className="relative z-10 order-1 sm:order-2 w-full flex justify-center"
          >
            <img
              src={burger}
              alt="Delicious Burger"
              className="w-full max-w-xs rounded-lg shadow-lg transition-transform duration-300 transform"
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
              backgroundColor: "#D2691E",
              color: "#fff",
            }}
            className="hover:bg-[#C65D1E] transition duration-300 px-6 py-2 rounded-lg"
          >
            Order Your Burger Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
