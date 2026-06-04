import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import ArtworkCard from "@/components/ArtworkCard";
import LogoAnimation from "@/components/LogoAnimation";

import { artworks } from "@/data/artworks";

const featured = artworks.filter((a) => a.featured).slice(0, 4);

const Index = () => {
  const heroLogoRef = useRef<HTMLDivElement>(null);
  const heroBelowRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);

  const taglineWords =
    "Discover intricate art pieces for home decor, curated for art lovers.".split(
      " "
    );

  return (
    <div className="min-h-screen relative">

      {/* HERO */}
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

          {/* Logo Animation */}
          <div ref={heroLogoRef}>
            <LogoAnimation />
          </div>

          {/* Tagline */}
          <motion.div
            ref={heroBelowRef}
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 3.5,
              duration: 0.8,
            }}
          >
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
                  Explore Collection{" "}
                  <ArrowRight className="ml-2" size={14} />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link to="/custom">Commission a Piece</Link>
              </Button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* FEATURED */}
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
  );
};

export default Index;