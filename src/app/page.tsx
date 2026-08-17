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

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-30 px-4 pt-20 font-sans sm:px-6 lg:px-8">
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
