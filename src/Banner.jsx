import React from "react";
import pisa from "./assets/burgerrr.jpeg";
import Button from "./button";
import avocado from "./assets/burgerr.jpeg";
import pisaa from "./assets/pissa.png";

function Banner() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen py-14 bg-[#ffe4c4]">
      {/* Main Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
        <h1
          data-aos="fade-up"
          data-aos-delay="300"
          className="py-8 tracking-wider text-2xl sm:text-3xl font-semibold text-dark"
        >
          Taste the Juicy Difference
        </h1>
        {/* Text Content Section */}
        <div data-aos="fade-up" data-aos-delay="500" className="space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
            <div>
              <p
                style={{
                  color: "black",
                  fontFamily: "Playfair Display, serif",
                }}
                className="text-base sm:text-lg"
              >
                At <span className="text-fuchsia-400">Burger Haven</span>, we
                believe that a great burger is more than just a meal—it's an
                experience. Enjoy our delicious, freshly made burgers delivered
                right to your door, saving you time while satisfying your
                cravings.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
            <div></div>
            <div>
              <p
                style={{
                  color: "black",
                  fontFamily: "Playfair Display, serif",
                }}
                className="text-base sm:text-lg"
              >
                Craving something mouth-watering? Our burger delivery service is
                here to serve you the best quality ingredients, crafted into
                juicy burgers, all from the comfort of your home. Experience
                convenience without compromising on flavor!
              </p>
            </div>
          </div>
        </div>
        {/* Button Section */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex justify-center mt-10 sm:mt-14"
        >
          <Button
            style={{
              backgroundColor: "#D2691E",
              color: "#fff",
            }}
            className="py-2 px-4 rounded-lg transition duration-300 hover:bg-[#C65D1E]"
          >
            Order Your Burger
          </Button>
        </div>
      </div>
      {/* Background Burger Images */}
      <div className="absolute top-1/4 left-1/4 opacity-30">
        <img
          src={pisa}
          alt="Juicy Burger"
          className="max-w-[80px] sm:max-w-[100px] object-cover"
        />
      </div>
      <div className="absolute bottom-1/4 left-1/4 opacity-30">
        <img
          src={avocado}
          alt="Burger Ingredients"
          className="max-w-[60px] sm:max-w-[80px] object-cover"
        />
      </div>
      <div className="absolute top-1/4 right-1/4 opacity-30">
        <img
          src={pisa}
          alt="Delicious Burger"
          className="max-w-[80px] sm:max-w-[100px] object-cover"
        />
      </div>
      <div className="hidden sm:block absolute bottom-1/4 right-1/4 opacity-30">
        <img
          src={pisaa}
          alt="Burger Toppings"
          className="max-w-[80px] sm:max-w-[100px] object-cover"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30">
        <img
          src={pisa}
          alt="Burger Delight"
          className="max-w-[80px] sm:max-w-[100px] object-cover"
        />
      </div>
    </div>
  );
}

export default Banner;
