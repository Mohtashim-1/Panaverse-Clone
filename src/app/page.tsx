import CoreTrack from "@/Compoenents/Widgets/CoreTrack";
import Hero from "@/Compoenents/Widgets/Hero";
// import QuarterBox from "@/Compoenents/Widgets/QuarterBox";
import SpecializedTrack from "@/Compoenents/Widgets/SpecializedTrack";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <Hero />
        {/* CoreTrack Section */}
        <CoreTrack />
        {/* Specialized Track */}
        {/* <SpecializedTrack /> */}
        {/* Quarter Box */}
        {/* <QuarterBox /> */}
      </main>
    </>
  );
}
