import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Button({ style, children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={style}
      className="flex justify-center items-center gap-2 h-[40px] px-5 py-2 rounded-lg transition-transform duration-300 hover:scale-105"
    >
      {children}
    </button>
  );
}
export default Button;
