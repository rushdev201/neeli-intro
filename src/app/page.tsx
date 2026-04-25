import HeroSection from "@/features/landing/components/HeroSection";
import FeaturesShowcase from "@/features/landing/components/FeaturesShowcase";
import AgencyBanner from "@/features/landing/components/AgencyBanner";
import SafetyHighlight from "@/features/landing/components/SafetyHighlight";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesShowcase />
      <AgencyBanner />
      <SafetyHighlight />
    </main>
  );
}
