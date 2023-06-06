import React, { FC } from "react";

const QuarterBox: FC<{
  heading: string;
  description: string;
  number: number;
}> = ({ heading, description, number }) => {
  return (
    <>
      <div className="flex flex-1 my-20">
        <div className="relative px-8 py-12 border rounded-md ">
          <h4 className="font-lg">{heading}</h4>
          <p className="mt-2 text-slate-600">{description}</p>
          <span className="absolute top-0 font-bold text-gray-200 -z-10 right-10 text-7xl ">
            {number}
          </span>
        </div>
      </div>
    </>
  );
};

export default QuarterBox;
