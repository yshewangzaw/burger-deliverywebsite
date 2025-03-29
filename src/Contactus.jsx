// Contactus.js
import React from "react";

const Contactus = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-semibold text-center mb-6 text-amber-600">
        Contact Us
      </h1>
      <p className="text-lg text-center mb-4">
        If you have any questions, feel free to reach out to us!
      </p>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input type="text" className="border p-2 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" className="border p-2 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea className="border p-2 w-full" required></textarea>
        </div>
        <button type="submit" className="bg-[#D2691E] text-white px-4 py-2">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contactus;
