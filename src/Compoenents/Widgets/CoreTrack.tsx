import React from "react";
import Wrapper from "@/Compoenents/Shared/Wrapper";
import Button from "@/Compoenents/Shared/Button";
// import QuarterBox from "@/Compoenents/Widgets/QuarterBox";
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
        <div className=" my-20 flex gap-x-4 max-w-screen-xl ">
          {
            CoreTrackData.map((item, i) => {
              // console.log(item.header);
              return (
                // <div className="flex flex-1 my-20">
                <div className="relative px-8 py-12 flex flex-col border rounded-md ">
                  <h4 className="font-lg font-bold">{item.header}  </h4>
                  <p className="mt-2 text-slate-600 z-0"> {item.description}</p>
                  <span className="absolute top-0 font-bold text-gray-200 -z-10 right-10 text-7xl ">{item.number}
                  </span>
                </div>
                // </div>
              );
            })
          }



        </div>
      </Wrapper>
    </section>
  );
};

export default CoreTrack;
