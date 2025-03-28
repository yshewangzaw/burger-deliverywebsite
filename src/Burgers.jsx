import React from "react";

// Make sure to import images at the top if you're using ES6 imports
import burger2 from "./assets/burger2.png";
import burgerrr from "./assets/burgerrr.jpeg";
import burger1 from "./assets/burger1.png";
import burgerr from "./assets/burgerr.jpeg";

const Burgers = () => {
  const burgers = [
    {
      id: 1,
      title: "Classic Cheeseburger",
      description:
        "A classic cheeseburger with lettuce, tomato, onion, and our special sauce.",
      image: burger2, // Use the imported image
    },
    {
      id: 2,
      title: "BBQ Bacon Burger",
      description:
        "A delicious burger topped with BBQ sauce, crispy bacon, and onion rings.",
      image: burgerrr, // Use the imported image
    },
    {
      id: 3,
      title: "Mushroom Swiss Burger",
      description:
        "Juicy beef patty topped with sautéed mushrooms and Swiss cheese.",
      image: burger1, // Use the imported image
    },
    {
      id: 4,
      title: "Plant-Based Burger",
      description: "A plant-based patty served with all the classic toppings.",
      image: burgerr, // Use the imported image
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Our Burgers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {burgers.map((burger) => (
          <div key={burger.id} className="border p-4 rounded-lg shadow-md">
            <img
              src={burger.image}
              alt={burger.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{burger.title}</h2>
            <p className="mt-2">{burger.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Burgers;
