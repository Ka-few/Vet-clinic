import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { AnnouncementBanner } from './components/sections/AnnouncementBanner';
import { TrustIndicators } from './components/sections/TrustIndicators';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Boarding } from './components/sections/Boarding';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { Appointment } from './components/sections/Appointment';
import { PetCareTips } from './components/sections/PetCareTips';
import { Testimonials } from './components/sections/Testimonials';
import { Gallery } from './components/sections/Gallery';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { FinalCTA } from './components/sections/FinalCTA';
import { BackToTop } from './components/ui/BackToTop';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
      {/* Layout */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <AnnouncementBanner />
        <TrustIndicators />
        <About />
        <Services />
        <Boarding />
        <WhyChooseUs />
        <Appointment />
        <PetCareTips />
        <Testimonials />
        <Gallery />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>

      <Footer />

      {/* Floating UI elements */}
      <BackToTop />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
