import React from "react";

// Import images
import chefsSpecial from "./assets/chefsSpecial.jpg";
import spicyChicken from "./assets/spicyChicken.jpg";
import veggieDelight from "./assets/veggieDelight.jpg";
import fishTacos from "./assets/fishTacos.jpg";

const Specials = () => {
  const specials = [
    {
      id: 1,
      title: "Chef's Special Burger",
      description:
        "A juicy beef patty topped with cheddar cheese, crispy bacon, and our special sauce.",
      image: chefsSpecial,
    },
    {
      id: 2,
      title: "Spicy Chicken Sandwich",
      description:
        "Crispy chicken breast with spicy mayo, lettuce, and pickles.",
      image: spicyChicken,
    },
    {
      id: 3,
      title: "Veggie Delight",
      description:
        "Grilled vegetables with hummus on a toasted bun, served with a side salad.",
      image: veggieDelight,
    },
    {
      id: 4,
      title: "Fish Tacos",
      description:
        "Three soft tacos filled with grilled fish, shredded cabbage, and lime crema.",
      image: fishTacos,
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Today's Specials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {specials.map((special) => (
          <div key={special.id} className="border p-4 rounded-lg shadow-md">
            <img
              src={special.image}
              alt={special.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{special.title}</h2>
            <p className="mt-2">{special.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specials;
