import React from "react";
import { FaBus } from "react-icons/fa";

function WhyChoose() {
  return (
    <div className="py-14 md:py-28 bg-gray-50 flex justify-center items-center">
      <div className="container">
        {/* Heading Section */}
        <h1
          data-aos="fade"
          className="py-8 tracking-wider text-2xl font-semibold text-dark text-center"
        >
          Why Choose Us
        </h1>
        {/* Card Section */}
        <div>
          <div
            data-aos="fade"
            data-aos-delay="300"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4"
          >
            <div className="text-center flex justify-center items-center flex-col gap-2 px-2">
              <FaBus className="text-6xl text-amber-600" />{" "}
              <h3 className="text-dark/70 font-semibold">Fresh Ingredients</h3>
              <p className="text-gray-600">
                We source the freshest ingredients for all our meals to ensure
                high quality and flavor.
              </p>
            </div>

            <div className="text-center flex justify-center items-center flex-col gap-2 px-3">
              <FaBus className="text-6xl text-amber-800" />{" "}
              <h3 className="text-dark/70 font-semibold">Quick Delivery</h3>
              <p className="text-gray-600">
                Enjoy fast and reliable delivery right to your door, so you can
                eat fresh whenever you want.
              </p>
            </div>
            {/* 3rd Card */}
            <div className="text-center flex justify-center items-center flex-col gap-2 px-2">
              <FaBus className="text-6xl text-amber-600" />{" "}
              {/* Increased size */}
              <h3 className="text-dark/70 font-semibold">Healthy Options</h3>
              <p className="text-gray-600">
                Our meal plans cater to various dietary needs and preferences,
                ensuring everyone can enjoy healthy food.
              </p>
            </div>

            <div className="text-center flex justify-center items-center flex-col gap-2 px-3">
              <FaBus className="text-6xl text-amber-800" />{" "}
              <h3 className="text-dark/70 font-semibold">Affordable Pricing</h3>
              <p className="text-gray-600">
                Get delicious meals at competitive prices without compromising
                on quality or nutrition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
