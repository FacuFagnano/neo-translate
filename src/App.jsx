import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Mission from "./components/Mission";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink overflow-x-hidden">
      <Navbar />

      <main>
        <Home />
        <Mission />
        <Services />
        <Expertise />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}