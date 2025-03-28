import React from "react";
import { FaStar, FaCoffee, FaHamburger, FaClock } from "react-icons/fa"; // Import icons

const Promotions = () => {
  const promotions = [
    {
      id: 1,
      title: "Buy One Get One Free!",
      description:
        "Enjoy a buy one get one free offer on all burgers this weekend!",
      icon: <FaHamburger className="text-3xl text-white" />, // Icon for the promotion
    },
    {
      id: 2,
      title: "20% Off on Sides",
      description: "Get 20% off on all side orders with any burger purchase.",
      icon: <FaStar className="text-3xl text-white" />, // Icon for the promotion
    },
    {
      id: 3,
      title: "Free Drink with Every Meal",
      description: "Order any meal and get a free drink of your choice.",
      icon: <FaCoffee className="text-3xl text-white" />, // Icon for the promotion
    },
    {
      id: 4,
      title: "Happy Hour Special",
      description:
        "Join us from 4 PM to 6 PM for special prices on selected drinks.",
      icon: <FaClock className="text-3xl text-white" />, // Icon for the promotion
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#D2691E]">
        Current Promotions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {promotions.map((promo) => (
          <div
            key={promo.id}
            className="border p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            style={{
              backgroundColor: "#FFFAF0", // Light background color
              borderColor: "#D2691E", // Accent border color
            }}
          >
            <div className="flex items-center mb-4">
              {promo.icon}
              <h2 className="text-xl font-semibold text-[#8B4513] ml-3">
                {promo.title}
              </h2>
            </div>
            <p className="mt-2 text-gray-700">{promo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promotions;
