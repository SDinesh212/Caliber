import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import HowItWorks from "@/components/home/HowItWorks";
import HiringPipeline from "@/components/home/HiringPipeline";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Industries from "@/components/home/Industries";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <HowItWorks />
      <HiringPipeline />
      <WhyChooseUs />
      <Industries />
      <Testimonials />
      <CTA />
      <NewsletterSection />
    </>
  );
}