import React, { FC } from "react";

const Button: FC<{ text: string }> = ({ text }) => {
  return (
    <div>
      <button className="px-7 py-4  text-white bg-[#00616C] rounded-full  text-lg font-medium hover:scale-105 duration-300 shadow-2xl ">
        {text}
      </button>
    </div>
  );
};

export default Button;
