import "@/App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroAstrology from "@/components/HeroAstrology";
import NebulaBackground from "@/components/NebulaBackground";
import About from "@/components/About";
import StatsBar from "@/components/StatsBar";
import ZodiacSigns from "@/components/ZodiacSigns";
import Services from "@/components/Services";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import Journal from "@/components/Journal";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import MobileBottomNav from "@/components/MobileBottomNav";

const Home = () => {
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
    <div className="bg-[#05050A] text-white min-h-screen font-[Outfit,sans-serif] antialiased pb-24 lg:pb-0">
      <Header />
      <main>
        <NebulaBackground />
        <HeroAstrology />
        <About />
        <StatsBar />
        <ZodiacSigns />
        <Services />
        <Courses />
        <Testimonials />
        <Journal />
      </main>
      <Footer />
      <CartDrawer />
      <MobileBottomNav />
    </div>
  );
};

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#1A1A1A",
            color: "#FAFAFA",
            border: "1px solid #B38B36",
            fontFamily: "Outfit, sans-serif",
          },
        }}
      />
    </CartProvider>
  );
}

export default App;
