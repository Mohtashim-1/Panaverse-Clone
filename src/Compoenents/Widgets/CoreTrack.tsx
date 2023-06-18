import React from "react";
import Wrapper from "@/Compoenents/Shared/Wrapper";
import Button from "@/Compoenents/Shared/Button";
import QuarterBox from "@/Compoenents/Widgets/QuarterBox";
const CoreTrackData = [
  {
    header: "Quarter I",
    description: "CS-101: Object-Oriented Programming using TypeScript",
    number: "1"
  }, {

    header: "Quarter II",
    description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number: "2"
  }, {

    header: "Quarter III",
    description: "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    number: "3"

  }
]
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
        {/* Boxes */}
        <div className="flex gap-x-4">
          <QuarterBox
            heading={"Quarter I"}
            description={"CS-101: Object-Oriented Programming using TypeScript"}
            number={1}
          />

          <QuarterBox
            heading={"Quarter II "}
            description={
              "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
            }
            number={2}
          />
          <QuarterBox
            heading={"Quarter III"}
            description={
              "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development"
            }
            number={3}
          />
        </div>
      </Wrapper>
    </section>
  );
};

export default CoreTrack;
