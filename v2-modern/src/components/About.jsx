import { Sparkles } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="about">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full z-0" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-10 bg-primary/10 blur-[100px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative glass-card p-12 rounded-[3.5rem] shadow-2xl shadow-slate-100">
              <img
                src="https://images.unsplash.com/photo-1515940175183-6798529cb860?auto=format&fit=crop&q=80"
                alt="Gitika - Vedic Astrologer"
                className="w-full h-[500px] object-cover rounded-[2.5rem] mb-10 grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="space-y-6">
                <h3 className="font-serif text-4xl text-foreground">Gitika Sharma</h3>
                <p className="text-foreground/50 text-sm leading-relaxed font-light italic">
                  "Astrology is a map of the soul's journey. My goal is to help you navigate it with clarity and purpose."
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px w-12 bg-primary" />
                <span className="text-[10px] tracking-[0.6em] uppercase text-primary font-black">Our Philosophy</span>
              </div>
              <h2 className="font-serif text-5xl md:text-7xl text-foreground leading-tight tracking-tight">
                Aligning your <br />
                <span className="italic font-light text-primary text-glow-light">Cosmic Signature.</span>
              </h2>
            </div>

            <p className="text-foreground/60 text-lg leading-relaxed font-light">
              We believe that the stars don't just predict the future—they reveal the hidden patterns of your personality and potential. 
              Our method combines classical Vedic techniques with a modern intuitive approach.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 pt-6">
              {[
                { title: "Vedic Roots", desc: "Ancient wisdom from the Vedas." },
                { title: "Modern Vision", desc: "Intuitive and relevant analysis." },
                { title: "Personalized", desc: "Tailored to your unique chart." },
                { title: "Empowering", desc: "Actionable insights for growth." },
              ].map((item, i) => (
                <div key={i} className="space-y-3 p-6 rounded-2xl glass border-black/5 hover:bg-primary/5 transition-all">
                  <h4 className="font-serif text-xl text-foreground">{item.title}</h4>
                  <p className="text-foreground/40 text-xs leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-4 text-primary text-[10px] tracking-[0.4em] uppercase font-black group">
              <span>Our Story</span>
              <div className="w-12 h-12 rounded-full glass border-black/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Sparkles className="w-5 h-5" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
