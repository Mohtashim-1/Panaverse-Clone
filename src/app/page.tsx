import CoreTrack from "@/Compoenents/Widgets/CoreTrack";
import Hero from "@/Compoenents/Widgets/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <Hero />
        {/* CoreTrack Section */}
        <CoreTrack />
        {/* Boxes Section */}
      </main>
    </>
  );
}
