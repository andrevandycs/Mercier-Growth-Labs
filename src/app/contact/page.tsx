import Background from "../../components/Background";
import Navbar from "../../components/Navbar";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Background />

      <Navbar />

      <main className="mx-auto max-w-5xl px-6 py-30 text-white">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Book a Free Consultation
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-300">
              Tell me a little about your business and what you're looking to
              accomplish. I'll review your information and reach out to schedule
              your free consultation.
            </p>
          </div>

          <ContactForm />
        </div>
      </main>

      <Footer />
    </>
  );
}
