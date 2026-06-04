import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import text from "@/assets/text.png";

const HomePage = () => {
  const [phase, setPhase] = useState<
    "text" | "logoCenter" | "logoTop"
  >("text");

  useEffect(() => {
    const t1 = setTimeout(() => {
      setPhase("logoCenter");
    }, 1800);

    const t2 = setTimeout(() => {
      setPhase("logoTop");
    }, 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
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

      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

      {/* Logo Layer */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        {/* Text */}
        <motion.img
          src={text}
          alt="Rangaliya"
          initial={{ opacity: 0, scale: 0.95 }}
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

        {/* Logo */}
        <motion.img
          src={logo}
          alt="Logo"
          initial={{
            opacity: 0,
            scale: 0.85,
            y: 0,
          }}
          animate={{
            opacity: phase === "text" ? 0 : 1,
            scale: 1,
            y: phase === "logoTop" ? -180 : 0,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute w-[280px]"
        />
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: phase === "logoTop" ? 1 : 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.3,
        }}
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center"
      >
        <h1 className="text-5xl font-bold mb-4">
          Welcome to Rangaliya
        </h1>

        <p className="max-w-2xl text-lg mb-8">
          Handcrafted artistry inspired by tradition and
          brought to life with creativity.
        </p>

        <div className="flex gap-4">
          <button className="px-6 py-3 rounded-lg bg-black text-white">
            Explore
          </button>

          <button className="px-6 py-3 rounded-lg border border-black">
            Contact
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;