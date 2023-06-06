import React from "react";
import Wrapper from "../Shared/Wrapper";
import Image from "next/image";
import HeroPoster from "../Asset/Hero.png";
import Button from "../Shared/Button";
const Hero = () => {
  return (
    <section className="">
      <Wrapper>
        <div className="flex flex-col items-center md:flex-row">
          {/* Left Side */}
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-[#00616C]">
              President Initiative for Artificial Intelligence and
              Computing(PIAIC)
            </h4>
            <h1 className="sm: text-3xl md:text-5xl text-blank font-bold leading-[60px] ">
              Certified Web 3.0 and Metaverse Developer{" "}
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies{" "}
            </p>
            <Button text={"Enroll Now"} />
            <br />
            <Button text={"Sign Up"} />
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
