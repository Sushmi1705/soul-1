import "@/App.css";
import { useEffect } from "react";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import HeroAstrology from "@/components/HeroAstrology";
import About from "@/components/About";
import ZodiacSigns from "@/components/ZodiacSigns";
import Services from "@/components/Services";
import Calculators from "@/components/Calculators";
import Courses from "@/components/Courses";
import Panchang from "@/components/Panchang";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  useEffect(() => {
    const removeBadge = () => {
      document.querySelectorAll("#emergent-badge").forEach((el) => el.remove());
    };
    removeBadge();
    const interval = setInterval(removeBadge, 500);
    const observer = new MutationObserver(removeBadge);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return (
    <CartProvider>
      <div className="relative min-h-screen bg-white font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden antialiased">
        {/* Iridescent Background Layers */}
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(99,102,241,0.05)_0%,transparent_50%)]" />
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(232,121,249,0.05)_0%,transparent_50%)]" />
        
        <ParticleBackground />
        
        <Header />
        <main className="relative z-10">
          <HeroAstrology />
          <ZodiacSigns />
          <Services />
          <About />
          <Calculators />
          <Panchang />
          <Courses />
        </main>
        <Footer />
        <MobileBottomNav />
        <Toaster 
          position="top-center"
          toastOptions={{
            style: {
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              color: '#0F172A',
              fontFamily: 'serif',
            }
          }}
        />
      </div>
    </CartProvider>
  );
}

export default App;
