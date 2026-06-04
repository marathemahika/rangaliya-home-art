import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import text from "@/assets/text.png";

const LogoAnimation = () => {
  const [phase, setPhase] = useState<"text" | "logo">("text");

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase("logo");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen relative overflow-hidden">

      {/* Background (same as homepage) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600&q=80)",
        }}
      />

      {/* Soft overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">

        {/* TEXT */}
        <motion.img
          src={text}
          alt="Rangaliya"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === "text" ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute w-[350px]"
        />

        {/* LOGO */}
        <motion.img
          src={logo}
          alt="Rangaliya Logo"
          initial={{ scale: 0.8, opacity: 0, y: 0 }}
          animate={{
            scale: phase === "logo" ? 1 : 0.8,
            opacity: phase === "logo" ? 1 : 0,
            y: phase === "logo" ? -70 : 0, // move upward
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="absolute w-[300px]"
        />

      </div>
    </div>
  );
};

export default LogoAnimation;