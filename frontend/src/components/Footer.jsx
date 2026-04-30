import { useState } from "react";
import { Instagram, Facebook, Youtube, Mail, Sparkles } from "lucide-react";
import { toast } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Please enter a valid email.");
      return;
    }
    toast.success("Welcome to the Soul Karma journal ✦");
    setEmail("");
  };

  return (
    <footer
      id="contact"
      data-testid="site-footer"
      className="relative bg-[#1A1A1A] text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E\")",
        }}
      />

      {/* Newsletter */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 border-b border-white/10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#E5C06A]" />
              <span className="text-[11px] tracking-[0.4em] uppercase text-[#E5C06A]">
                Newsletter
              </span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl leading-tight">
              Your daily <em className="italic text-[#E5C06A]">horoscope,</em>{" "}
              delivered.
            </h3>
            <p className="text-white/60 text-sm mt-3 max-w-md">
              Horoscope, love scope and tarot pull — every morning in your inbox.
            </p>
          </div>
          <form
            onSubmit={handleSubscribe}
            className="flex bg-white/5 border border-white/15 rounded-full p-1.5 backdrop-blur"
          >
            <div className="flex items-center pl-4 text-[#E5C06A]">
              <Mail className="w-4 h-4" />
            </div>
            <input
              data-testid="newsletter-input"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent px-3 py-3 text-sm placeholder:text-white/40 focus:outline-none"
            />
            <button
              data-testid="newsletter-subscribe"
              type="submit"
              className="bg-[#E5C06A] hover:bg-white text-[#1A1A1A] text-xs tracking-[0.2em] uppercase px-6 py-3 rounded-full transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-5">
            <Sparkles className="w-5 h-5 text-[#E5C06A]" />
            <span className="font-serif text-3xl">Soul Karma</span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed max-w-sm">
            A modern sanctuary of Vedic astrology, vastu and numerology — guided
            by Gitika Sharma with over 15 years of practice.
          </p>
          <div className="flex gap-3 mt-6">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                data-testid={`social-${i}`}
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:border-[#E5C06A] hover:text-[#E5C06A] transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#E5C06A] mb-5">
            Services
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            {["Kundali Analysis", "Kundali Making", "Match Making", "Numerology", "Vastu", "Soul Purpose"].map(
              (s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-[#E5C06A] transition-colors">
                    {s}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#E5C06A] mb-5">
            Courses
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            {["Akashic Records", "Bhrigu Nandi Nadi", "Lal Kitab", "Palmistry", "Vastu Shastra"].map((s) => (
              <li key={s}>
                <a href="#courses" className="hover:text-[#E5C06A] transition-colors">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#E5C06A] mb-5">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li>hello@soulkarma.in</li>
            <li>+91 98XXX XXXXX</li>
            <li>New Delhi · India</li>
            <li className="pt-2">Mon – Sat · 9 AM to 7 PM</li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-6 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
        <div>© {new Date().getFullYear()} Soul Karma by Gitika Sharma. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#E5C06A]">Privacy</a>
          <a href="#" className="hover:text-[#E5C06A]">Terms</a>
          <a href="#" className="hover:text-[#E5C06A]">Refund Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
