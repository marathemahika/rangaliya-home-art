import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import Reveal from "@/components/Reveal";
import { artworks } from "@/data/artworks";
import ArtworkCard from "@/components/ArtworkCard";
import LogoAnimation from "@/components/LogoAnimation";

const featured = artworks.filter((a) => a.featured).slice(0, 4);

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const heroLogoRef = useRef<HTMLDivElement>(null);
  const heroBelowRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroLogo = heroLogoRef.current;
    const heroBelow = heroBelowRef.current;
    const divider = dividerRef.current;
    const tagline = taglineRef.current;
    
    if (!heroLogo || !heroBelow || !divider || !tagline) return;

    // Phase 2: tagline + divider after logo lands
    const t1 = setTimeout(() => {
      heroBelow.style.opacity = "1";
      heroBelow.style.transform = "none";
      divider.style.width = "52px";
      const words = tagline.querySelectorAll<HTMLSpanElement>(".rg-word");
      words.forEach((w, i) => {
        setTimeout(() => {
          w.style.opacity = "1";
          w.style.transform = "none";
        }, i * 65);
      });
    }, 1400);

    // Phase 3: hero logo compresses into nav
    const t2 = setTimeout(() => {
      heroLogo.style.transition = "opacity 0.55s ease, transform 0.85s cubic-bezier(0.7,0,0.3,1)";
      heroLogo.style.transform = "scale(0.15) translateY(-340px)";
      heroLogo.style.opacity = "0";
    }, 3200);

    // Phase 4: fire event so Navbar fades its logo in
    const t3 = setTimeout(() => {
      window.dispatchEvent(new Event("rangaliya:navLogoShow"));
    }, 3700);
    
    const timer = setTimeout(() => {setShowIntro(false);}, 4200);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(timer);};
  }, []);

  const taglineWords = "Discover intricate art pieces for home decor, curated for art lovers.".split(" ");

  return (
    <div
  className={`min-h-screen relative transition-opacity duration-700 ${
    showIntro ? "opacity-0" : "opacity-100"
  }`}
>
      <div
  className={`fixed inset-0 z-50 transition-opacity duration-700 ${
  showIntro ? "opacity-100" : "opacity-0 pointer-events-none"
}`}
style={{ background: "white" }}
>
  <LogoAnimation />
</div>

      {/* ── HERO ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center animate-hero-zoom"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600&q=80)` }}
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

        <div className="relative z-10 flex flex-col items-center text-center px-6">
          {/* Hero logo — animates compress into nav */}
          <div
            ref={heroLogoRef}
            className="animate-fade-down mb-0"
            style={{ transformOrigin: "top center", willChange: "transform, opacity" }}
          >
            <img
              src={logo}
              alt="Rangaliya"
              style={{ height: "300px" }}
              className="w-auto mx-auto"
            />
          </div>

          {/* Divider + tagline + buttons — revealed after logo settles */}
          <div
            ref={heroBelowRef}
            style={{
              opacity: 0,
              transform: "translateY(16px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Growing divider line */}
            <div
              ref={dividerRef}
              style={{
                width: 0,
                height: "0.5px",
                background: "#b5aea5",
                margin: "20px auto 22px",
                transition: "width 0.7s ease",
              }}
            />

            {/* Tagline word by word */}
            <div
              ref={taglineRef}
              className="flex flex-wrap justify-center gap-[5px] font-serif italic text-gray-500 mb-8"
              style={{ fontSize: "17px", letterSpacing: "0.04em" }}
            >
              {taglineWords.map((word, i) => (
                <span
                  key={i}
                  className="rg-word inline-block"
                  style={{
                    opacity: 0,
                    transform: "translateY(10px)",
                    transition: "opacity 0.45s ease, transform 0.45s ease",
                  }}
                >
                  {word}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-black text-white px-6 py-3 rounded-none hover:bg-gray-800 hover:scale-105 transition-all duration-300 tracking-widest uppercase text-xs"
              >
                <Link to="/gallery">Explore Collection <ArrowRight className="ml-2" size={14} /></Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border border-gray-300 text-gray-800 px-6 py-3 rounded-none hover:bg-gray-100 hover:scale-105 transition-all duration-300 tracking-widest uppercase text-xs"
              >
                <Link to="/custom">Commission a Piece</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
    <section className="max-w-7xl mx-auto px-6 py-24">
      <Reveal>
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-500 mb-2">Curated Selection</p>
            <h2 className="text-3xl font-serif text-gray-800" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
              Featured Works
            </h2>
          </div>
          <Link to="/gallery" className="hidden sm:flex items-center text-sm text-muted-foreground hover:text-black transition-colors gap-1 group">
            View all <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {featured.map((art, i) => (
          <Reveal key={art.id} delay={i * 120} direction="up">
            <ArtworkCard artwork={art} />
          </Reveal>
        ))}
      </div>
    </section>

      {/* ── CUSTOM CTA ── */}
      <section className="bg-[#f0ebe3] py-24 px-6">
        <Reveal direction="fade">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">Bespoke Art</p>
            <h2
              className="text-4xl md:text-5xl mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, letterSpacing: "0.04em" }}
            >
              Your Vision, Handcrafted
            </h2>
            <p className="text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed text-sm">
              Looking for something unique? I create custom artwork tailored to your space, style, and story.
              From color palettes to dimensions — every detail is yours to choose.
            </p>
            <Button
              asChild
              size="lg"
              className="tracking-widest uppercase text-xs rounded-none hover:scale-105 transition-transform duration-300"
            >
              <Link to="/custom">Start Your Custom Order</Link>
            </Button>
          </div>
        </Reveal>
      </section>

      {/* ── HOME DECOR FOCUS ── */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-100">
        <div className="grid md:grid-cols-3 gap-0">
          {[
            { title: "Living Rooms", desc: "Statement pieces that anchor your space and spark conversation." },
            { title: "Bedrooms", desc: "Calming compositions that create a serene retreat." },
            { title: "Workspaces", desc: "Inspiring art that fuels creativity and focus." },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 150} direction="up">
              <div className="group text-center px-8 py-10 border-r border-gray-100 last:border-r-0">
                <h3
                  className="text-xl mb-3 transition-colors duration-300 group-hover:text-gray-400"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                >
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
