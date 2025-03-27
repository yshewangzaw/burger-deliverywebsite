import React from "react";
import pisa from "./assets/burgerrr.jpeg";
import Button from "./button";
import avocado from "./assets/burgerr.jpeg";
import pisaa from "./assets/pissa.png";

function Banner() {
  return (
    <div className="container py-14 relative">
      <div className="relative z-20">
        <h1
          data-aos="fade-up"
          data-aos-delay="300"
          className="py-8 tracking-wider text-2xl font-semibold text-dark text-center"
        >
          Taste the Juicy Difference
        </h1>
        {/* Text Content Section */}
        <div data-aos="fade-up" data-aos-delay="500" className="space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
            <div>
              <p
                style={{
                  color: "#8B4513",
                  fontFamily: "Playfair Display, serif",
                }}
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
                  color: "#8B4513",
                  fontFamily: "Playfair Display, serif",
                }}
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
              backgroundColor: "#D2691E", // Match the navbar logo color
              color: "#fff", // White text for contrast
            }}
          >
            Order Your Burger
          </Button>
        </div>
      </div>
      {/* Background Burger Images */}
      <div className="absolute top-5 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
        <img
          src={pisa}
          alt="Juicy Burger"
          className="max-w-[100px] object-cover" // Added object-fit
        />
      </div>
      <div className="absolute -bottom-16 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
        <img
          src={avocado}
          alt="Burger Ingredients"
          className="max-w-[80px] object-cover" // Added object-fit
        />
      </div>
      <div className="absolute top-10 -right-16 sm:right-20 opacity-50 sm:opacity-100">
        <img
          src={pisa}
          alt="Delicious Burger"
          className="max-w-[100px] object-cover" // Added object-fit
        />
      </div>
      <div className="hidden sm:block absolute bottom-0 right-0">
        <img
          src={pisaa}
          alt="Burger Toppings"
          className="max-w-[100px] object-cover" // Added object-fit
        />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2 opacity-50 sm:opacity-100">
        <img
          src={pisa}
          alt="Burger Delight"
          className="max-w-[100px] object-cover" // Added object-fit
        />
      </div>
    </div>
  );
}

export default Banner;
