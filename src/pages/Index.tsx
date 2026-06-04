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
    // 🔥 ONLY control intro timing here
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const taglineWords =
    "Discover intricate art pieces for home decor, curated for art lovers.".split(
      " "
    );

  return (
    <div className="min-h-screen relative">

      {/* 🔥 INTRO OVERLAY */}
      <div
        className={`fixed inset-0 z-[9999] bg-white transition-opacity duration-700 ${
          showIntro ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <LogoAnimation />
      </div>

      {/* 🔥 MAIN PAGE */}
      <div
        className={`transition-opacity duration-700 ${
          showIntro ? "opacity-0" : "opacity-100"
        }`}
      >

        {/* ── HERO ── */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600&q=80)",
            }}
          />
          <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

          <div className="relative z-10 flex flex-col items-center text-center px-6">

            {/* Logo */}
            <div ref={heroLogoRef}>
              <img
                src={logo}
                alt="Rangaliya"
                style={{ height: "300px" }}
                className="w-auto mx-auto"
              />
            </div>

            {/* Tagline */}
            <div ref={heroBelowRef} className="mt-6">
              <div
                ref={dividerRef}
                className="h-[1px] bg-gray-400 w-12 mx-auto mb-4"
              />

              <div
                ref={taglineRef}
                className="flex flex-wrap justify-center gap-[5px] font-serif italic text-gray-500 mb-8"
              >
                {taglineWords.map((word, i) => (
                  <span key={i}>{word}</span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/gallery">
                    Explore Collection <ArrowRight className="ml-2" size={14} />
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg">
                  <Link to="/custom">Commission a Piece</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURED ── */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <Reveal>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-xs tracking-widest uppercase text-gray-500 mb-2">
                  Curated Selection
                </p>
                <h2 className="text-3xl font-serif text-gray-800">
                  Featured Works
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featured.map((art, i) => (
              <Reveal key={art.id} delay={i * 120}>
                <ArtworkCard artwork={art} />
              </Reveal>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Index;