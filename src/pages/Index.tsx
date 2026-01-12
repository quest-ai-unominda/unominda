import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GearIcon } from "@/components/layout/GearIcon";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { LeadershipSection } from "@/components/home/LeadershipSection";
import { InitiativesSection } from "@/components/home/InitiativesSection";
import { IdeasSection } from "@/components/home/IdeasSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <InitiativesSection />
        <LeadershipSection />
        <IdeasSection />
      </main>
      <Footer />
      <GearIcon />
    </div>
  );
};

export default Index;
