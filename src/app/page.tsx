import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedWork from "../components/FeaturedWork";
import Services from "../components/Services";
import Process from "../components/Process";
import AboutMe from "../components/AboutMe";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Background />

      <Navbar />

      <main className="mx-auto flex max-w-225 flex-col gap-30 px-6 pt-20 font-sans">
        <Hero />
        <Services />
        <FeaturedWork />
        <Process />
        <AboutMe />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
