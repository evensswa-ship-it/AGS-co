import Header from "./components/Header";
import Hero from "./components/Hero";
import ProblemsSection from "./components/ProblemsSection";
import WhoWeServeSection from "./components/WhoWeServeSection";
import IARDSection from "./components/IARDSection";
import CourtierVsAgentSection from "./components/CourtierVsAgentSection";
import ApproachSection from "./components/ApproachSection";
import VisionSection from "./components/VisionSection";
import CTAFinalSection from "./components/CTAFinalSection";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ position: "relative" }}>
        <Hero />
        <ProblemsSection />
        <WhoWeServeSection />
        <IARDSection />
        <CourtierVsAgentSection />
        <ApproachSection />
        <VisionSection />
        <CTAFinalSection />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
