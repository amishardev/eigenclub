import Navigation from "@/component/Navigation";
import HeroSection from "@/component/HeroSection";
import AboutSection from "@/component/AboutSection";
import MissionCards from "@/component/MissionCards";
import MathCarousel from "@/component/MathCarousel";
import EventsSection from "@/component/EventsSection";
import LeadershipSection from "@/component/LeadershipSection";
import JoinSection from "@/component/JoinSection";
import GallerySection from "@/component/GallerySection";
import Footer from "@/component/Footer";

export default function Home() {
  return (
    <div className="smooth-scroll">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MissionCards />
      <MathCarousel />
      <EventsSection />
      <LeadershipSection />
      <JoinSection />
      <GallerySection />
      <Footer />
    </div>
  );
}