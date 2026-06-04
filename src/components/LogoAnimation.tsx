import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import text from "@/assets/text.png";

const LogoAnimation = () => {
  const [phase, setPhase] = useState("text");

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase("logo");
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen relative overflow-hidden">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600&q=80)",
        }}
      />

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-white/70 backdrop-blur-sm"
        animate={{
          backdropFilter:
            phase === "logo" ? "blur(2px)" : "blur(8px)",
        }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Content */}
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
            scale: phase === "text" ? 1 : 1.08,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute w-[350px]"
        />

        {/* LOGO */}
        <motion.img
          src={logo}
          alt="Rangaliya Logo"
          initial={{
            scale: 0.7,
            opacity: 0,
            y: 60,
          }}
          animate={{
            scale: phase === "logo" ? 1 : 0.7,
            opacity: phase === "logo" ? 1 : 0,
            y: phase === "logo" ? -70 : 60,
          }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 15,
            mass: 1,
          }}
          className="absolute w-[300px]"
        />
      </div>
    </div>
  );
};

export default LogoAnimation;