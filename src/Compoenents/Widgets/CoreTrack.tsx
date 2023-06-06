import React from "react";
import Wrapper from "../Shared/Wrapper";
import Button from "../Shared/Button";

const CoreTrack = () => {
  const header = "Core Courses \n (Common in All Specializations):";
  return (
    <section className="md:mt-16 lg:mt-28">
      <Wrapper>
        {/* Content */}
        <div className="max-w-screen-sm">
          <h4 className="text-lg font-bold text-[#00616C]">
            Program of Studies
          </h4>
          <h2 className="text-4xl font-bold whitespace-pre-line">{header}</h2>
          <p className="mt-6 text-xl text-slate-600">
            Every participant of the program will start by completing the
            following three core courses:
          </p>
          <div className="mt-4">
            <Button text="Learn More" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default CoreTrack;
