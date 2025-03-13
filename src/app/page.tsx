import Navbar from "@/components/Navbar";
import HeroSection from "@/components/landing-page-sections/hero";
import FeaturesSection from "@/components/landing-page-sections/feature";
import RoomShowcaseSection from "@/components/landing-page-sections/room-showcase";
import HowItWorksSection from "@/components/landing-page-sections/HowItWorks";
import TestimonialsSection from "@/components/landing-page-sections/testomonial";
import CTASection from "@/components/landing-page-sections/cta-section";
import FAQSection from "@/components/landing-page-sections/FAQ";
import TrustAndSafetySection from "@/components/landing-page-sections/trust-safety";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <FeaturesSection></FeaturesSection>
      <RoomShowcaseSection></RoomShowcaseSection>
      <HowItWorksSection></HowItWorksSection>
      <TestimonialsSection></TestimonialsSection>
      <CTASection></CTASection>
      <FAQSection></FAQSection>
      <TrustAndSafetySection></TrustAndSafetySection>
      <Footer></Footer>
    </div>
  );
}
