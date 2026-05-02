import { useState } from "react";
import { Sparkles } from "lucide-react";
import { toast } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Please enter a valid email.");
      return;
    }
    toast.success("Welcome to the Celestial Journal ✦");
    setEmail("");
  };

  return (
    <footer
      id="contact"
      data-testid="site-footer"
      className="relative bg-slate-50 text-foreground pt-24 pb-12 overflow-hidden border-t border-black/5"
    >
      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 relative z-10">
        <div className="space-y-8">
          <div className="font-serif text-3xl tracking-tight text-foreground font-bold">
            CEL<span className="text-primary text-glow-light">ESTIAL</span>
          </div>
          <p className="text-foreground/40 text-sm leading-relaxed max-w-xs font-light">
            Your trusted source for professional astrological services and individual reports. 
            Guidance for your soul's journey in the light.
          </p>
          <div className="space-y-4">
            <p className="text-[10px] tracking-[0.2em] text-foreground/50 uppercase font-black">8901 Marmora Road, Glasgow, D04 89GR.</p>
            <p className="text-sm tracking-[0.1em] text-primary font-bold">+1 800 123 1234</p>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-xl text-foreground mb-10 uppercase tracking-[0.2em] font-bold">Services</h4>
          <ul className="space-y-5">
            {["Vedic Astrology", "Horoscope Matching", "Vastu Shastra", "Gemstone Therapy", "Numerology"].map((item) => (
              <li key={item}>
                <a href="#" className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 hover:text-primary transition-colors font-black">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl text-foreground mb-10 uppercase tracking-[0.2em] font-bold">Explore</h4>
          <ul className="space-y-5">
            {["About Us", "Our Gallery", "Horoscopes", "Contact Us", "Privacy Policy"].map((item) => (
              <li key={item}>
                <a href="#" className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 hover:text-primary transition-colors font-black">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl text-foreground mb-10 uppercase tracking-[0.2em] font-bold">Newsletter</h4>
          <div className="space-y-6">
            <p className="text-foreground/40 text-sm leading-relaxed italic font-light">
              "The stars do not compel, they incline." Join our weekly newsletter.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                className="bg-white border border-black/5 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-primary transition-all text-foreground placeholder:text-foreground/20 shadow-sm"
              />
              <button type="submit" className="bg-primary hover:bg-accent text-white py-4 rounded-xl text-[10px] tracking-[0.3em] uppercase font-bold transition-all shadow-lg shadow-primary/20">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] tracking-[0.3em] text-foreground/30 uppercase font-black relative z-10">
        <p>Copyright © {new Date().getFullYear()} Celestial Oracle. All rights reserved.</p>
        <div className="flex gap-10">
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
