import ConceptSection from "@/components/concept/concept-section";
import { Container } from "../../components/ui/container";
import Hero from "@/components/hero/hero";
import CtaFooter from "@/components/cta-footer/cta-footer";
import CtaSection from "@/components/cta-section/cta-section";
import AboutSection from "@/components/about/about-section";
import FaQSection from "@/components/faq/faq-section";
import HousesSection from "@/components/houses/house-section";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Container>
        <ConceptSection />
      </Container>
      <AboutSection
        namespace="about"
        leftImage="/Images/about-left.png"
        rightImage="/Images/about-right.png"
      />
      <CtaSection />
      <HousesSection />
      <FaQSection />
      <CtaFooter />
    </div>
  );
};

export default Home;
