import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Mission from "./components/Mission";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsapp";

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink overflow-x-hidden">
      <Helmet>
        <title>Neo Translations | NAATI Certified Spanish Translator</title>
        <meta
          name="description"
          content="Professional NAATI certified translations English ↔ Spanish. Fast delivery for migration and legal documents in Australia."
        />
      </Helmet>
      <Navbar />

      <main>
        <Home />
        <About />
        <Mission />
        <Services />
        <Expertise />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
