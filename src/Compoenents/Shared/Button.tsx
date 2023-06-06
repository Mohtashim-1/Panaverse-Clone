import React, { FC } from "react";

const Button: FC<{ text: string }> = ({ text }) => {
  return (
    <div>
      <button className="px-6 py-3 mt-2  text-white bg-[#00616C] rounded-full shadow-lg text-lg font-medium ">
        {text}
      </button>
    </div>
  );
};

export default Button;
