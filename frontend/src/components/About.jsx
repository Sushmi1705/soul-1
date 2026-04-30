const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 md:py-36 bg-[#F3F1EC]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#EDE8DD]">
              <img
                src="https://gitikasharma.in/wp-content/uploads/2024/02/about-img-1.png"
                alt="Gitika Sharma"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:flex absolute -bottom-8 -right-8 w-44 h-44 rounded-full bg-[#B38B36] text-white flex-col items-center justify-center text-center p-6 shadow-xl">
              <span className="font-serif text-5xl leading-none">15</span>
              <span className="text-[10px] tracking-[0.25em] uppercase mt-2 opacity-90">
                Years Guiding Souls
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#B38B36]" />
              <span className="text-[11px] tracking-[0.4em] uppercase text-[#725D46]">
                About Us
              </span>
            </div>
            <h2
              data-testid="about-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#1A1A1A] mb-8"
            >
              Welcome to{" "}
              <em className="italic text-[#B38B36] font-light">Soul Karma.</em>
            </h2>

            <div className="space-y-5 text-[#3A3A3A] leading-relaxed text-base max-w-xl">
              <p>
                I am Gitika Sharma — a seasoned astrologer and IT professional
                with 15 years of enriching experience, dedicated to unraveling
                the intricate threads of pending karma woven within the fabric
                of existence.
              </p>
              <p>
                My journey into the cosmic realms began young, fueled by
                curiosity and a deep reverence for the celestial. Through the
                alignment of planets and the analysis of birth charts, I offer
                profound insights into the karmic patterns that govern our
                lives — illuminating pathways to healing, growth, and spiritual
                evolution.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-xl">
              {[
                "Vedic Astrology",
                "Vastu Science",
                "Numerology",
                "Akashic Records",
                "Match Making",
                "Soul Purpose",
              ].map((item) => (
                <div
                  key={item}
                  className="text-sm tracking-wide text-[#2A2A2A] border-l-2 border-[#B38B36] pl-3"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
