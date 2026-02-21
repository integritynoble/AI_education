import StickyNav from "@/components/layout/StickyNav";
import Footer from "@/components/layout/Footer";
import ReadingProgress from "@/components/editorial/ReadingProgress";
import BackToTop from "@/components/editorial/BackToTop";
import Hero from "@/components/sections/Hero";
import ThreeScenarios from "@/components/sections/ThreeScenarios";
import TargetingSystem from "@/components/sections/TargetingSystem";
import MaturityModel from "@/components/sections/MaturityModel";
import IntelligenceStack from "@/components/sections/IntelligenceStack";
import AITutorVision from "@/components/sections/AITutorVision";
import HowItWorks from "@/components/sections/HowItWorks";
import LiveDashboard from "@/components/sections/LiveDashboard";
import CompareGPTSection from "@/components/sections/CompareGPTSection";
import Guardrails from "@/components/sections/Guardrails";
import Procurement from "@/components/sections/Procurement";
import JoinCTA from "@/components/sections/JoinCTA";

export default function Home() {
  return (
    <>
      <ReadingProgress />
      <StickyNav />
      <main>
        <Hero />
        <ThreeScenarios />
        <TargetingSystem />
        <MaturityModel />
        <IntelligenceStack />
        <AITutorVision />
        <HowItWorks />
        <LiveDashboard />
        <CompareGPTSection />
        <Guardrails />
        <Procurement />
        <JoinCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
