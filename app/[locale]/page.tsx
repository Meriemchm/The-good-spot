import ConceptSection from "@/components/ui/concept-section";
import { Container } from "../../components/ui/container";
import Hero from "@/components/hero/hero";
import CtaFooter from "@/components/cta-footer/cta-footer";
import CtaSection from "@/components/cta-section/cta-section";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Container>
        <ConceptSection />
      </Container>
      <CtaSection />
      <CtaFooter />
    </div>
  );
};

export default Home;
