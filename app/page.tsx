import Hero from "./components/sections/Hero";
import PositioningBand from "./components/sections/PositioningBand";
import CapabilitiesGrid from "./components/sections/CapabilitiesGrid";
import ACPSection from "./components/sections/ACPSection";
import SectorsSection from "./components/sections/SectorsSection";
import ApproachBand from "./components/sections/ApproachBand";
import EngagementsSection from "./components/sections/EngagementsSection";
import InsightsPreview from "./components/sections/InsightsPreview";
import ClosingCTA from "./components/sections/ClosingCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PositioningBand />
      <CapabilitiesGrid />
      <ACPSection />
      <SectorsSection />
      <ApproachBand />
      <EngagementsSection />
      <InsightsPreview />
      <ClosingCTA />
    </>
  );
}
