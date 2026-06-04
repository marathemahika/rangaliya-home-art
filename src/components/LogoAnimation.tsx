import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import text from "@/assets/text.png";

const LogoAnimation = () => {
  const [phase, setPhase] = useState<"text" | "logoCenter" | "logoTop">(
    "text"
  );

  useEffect(() => {
    // Text -> Logo
    const timer1 = setTimeout(() => {
      setPhase("logoCenter");
    }, 1800);

    // Logo pause -> Move up
    const timer2 = setTimeout(() => {
      setPhase("logoTop");
    }, 3200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center">
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

      {/* Animation Layer */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
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
            scale: 0.85,
            y: 0,
          }}
          animate={{
            opacity: phase === "text" ? 0 : 1,
            scale: 1,
            y: phase === "logoTop" ? -80 : 0,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute w-[280px]"
        />
      </div>
    </div>
  );
};

export default LogoAnimation;