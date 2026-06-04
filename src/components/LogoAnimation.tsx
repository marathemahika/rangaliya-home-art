import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import text from "@/assets/text.png";

const LogoAnimation = () => {
  const [phase, setPhase] = useState<
    "text" | "logoCenter" | "logoTop"
  >("text");

  useEffect(() => {
    // Text -> Logo
    const timer1 = setTimeout(() => {
      setPhase("logoCenter");
    }, 1800);

    // Pause logo in center, then move up
    const timer2 = setTimeout(() => {
      setPhase("logoTop");
    }, 3200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600&q=80)",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

      {/* Logo Animation Layer */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        
        {/* TEXT */}
        <motion.img
          src={text}
          alt="Rangaliya"
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            opacity: phase === "text" ? 1 : 0,
            scale: phase === "text" ? 1 : 1.05,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute w-[350px]"
        />

        {/* LOGO */}
        <motion.img
          src={logo}
          alt="Rangaliya Logo"
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 0,
          }}
          animate={{
            opacity: phase === "text" ? 0 : 1,
            scale: 1,
            y: phase === "logoTop" ? -220 : 0,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute w-[280px]"
        />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: phase === "logoTop" ? 1 : 0,
          y: phase === "logoTop" ? 0 : 20,
        }}
        transition={{
          duration: 0.8,
          delay: 0.4,
        }}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center"
      >
        <h1 className="text-5xl font-bold mb-4">
          Welcome to Rangaliya
        </h1>

        <p className="text-lg mb-8 text-center max-w-xl">
          Discover handcrafted artistry, timeless traditions,
          and creativity woven into every piece.
        </p>

        <div className="flex gap-4">
          <button className="px-6 py-3 bg-black text-white rounded-lg">
            Explore
          </button>

          <button className="px-6 py-3 border border-black rounded-lg">
            Contact
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default LogoAnimation;