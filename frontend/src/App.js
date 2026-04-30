import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import Journal from "@/components/Journal";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import MobileBottomNav from "@/components/MobileBottomNav";

const Home = () => (
  <div className="bg-[#FAFAFA] text-[#1A1A1A] min-h-screen font-[Outfit,sans-serif] antialiased pb-24 lg:pb-0">
    <Header />
    <main>
      <Hero />
      <About />
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
