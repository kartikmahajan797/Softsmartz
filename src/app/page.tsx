import Navbar from "./navbar/page";
import HeroSection from "./heroSection/page";
import TrustedBrands from "./trustedBrands/page";
import CompanySection from "./companySection/page";
import ServiceSection from "./serviceSection/page";
import FlexibleEngagementModels from "./flexibleEngagementModels/page";
import DigitalTransformationHero from "./digitalTransformationHero/page";
import TechnologicalFramework from "./technologicalFramework/page";
import IndustrialExpertise from "./industrialExpertise/page";
import TestimonialSection from "./testimonialSection/page";
import ConsultationForm from "./consultationForm/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="">
        <HeroSection />
        <TrustedBrands />
        <CompanySection />
        <ServiceSection />
        <FlexibleEngagementModels />
        <DigitalTransformationHero />
        <TechnologicalFramework />
        <IndustrialExpertise />
        <TestimonialSection />
        <ConsultationForm />
      </main>
      <Footer />
    </>
  );
}
