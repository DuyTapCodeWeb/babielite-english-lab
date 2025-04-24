
import Layout from "@/components/Layout";
import Hero from "@/components/home/Hero";
import SkillCards from "@/components/home/SkillCards";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <SkillCards />
      <Features />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
};

export default Index;
