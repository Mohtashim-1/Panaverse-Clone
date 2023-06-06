import React, { FC } from "react";

const Button: FC<{ text: string }> = ({ text }) => {
  return (
    <div>
      <button className="px-4 py-4 mt-2 font-semibold text-white bg-teal-700 rounded-full ">
        {text}
      </button>
    </div>
  );
};

export default Button;
