import Image from "next/image";
import HeroSection from "./Components/HeroSection";
import RoomsDataFetch from "./Components/RoomsDataFetch";
import WhyChooseUs from "./Components/WhyChooseUs";
import StudyNookStats from "./Components/StudyNookStats";
import Testimonials from "./Components/Testimonials";
import StudyNookCTA from "./Components/StudyNookCTA";

export default function Home() {
  return (
    <>
    <HeroSection />
    <RoomsDataFetch />
    <WhyChooseUs />
    <StudyNookStats />
    <Testimonials />
    <StudyNookCTA />
    </>
  );
}
