import React from "react";
import Wrapper from "../Shared/Wrapper";
import Image from "next/image";
import HeroPoster from "../Asset/Hero.png";
const Hero = () => {
  return (
    <section className="">
      <Wrapper>
        <div className="flex items-center">
          {/* Left Side */}
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-teal-800">
              President Initiative for Artificial Intelligence and
              Computing(PIAIC)
            </h4>
            <h1 className="text-5xl font-bold leading-[60px]">
              Certified Web 3.0 and Metaverse Developer{" "}
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies{" "}
            </p>
            <button className="px-4 py-4 mt-2 font-semibold text-white bg-teal-700 rounded-full ">
              Learn More
            </button>
          </div>
          {/* Right Side */}
          <div className="flex-1">
            <Image src={HeroPoster} alt="Hero Section" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
