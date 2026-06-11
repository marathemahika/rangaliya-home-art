import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import text from "@/assets/text.png";

const LogoAnimation = () => {
  const [phase, setPhase] = useState<
    "text" | "logoCenter" | "logoTop"
  >("text");

  useEffect(() => {
    const t1 = setTimeout(() => {
      setPhase("logoCenter");
    }, 1500);

    const t2 = setTimeout(() => {
      setPhase("logoTop");
    }, 3000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      {/* Text */}
      <motion.img
        src={text}
        alt="Rangaliya"
        initial={{ opacity: 0 }}
        animate={{
          opacity: phase === "text" ? 1 : 0,
          scale: phase === "text" ? 1 : 1.05,
        }}
        transition={{
          duration: 0.8,
        }}
        className="absolute w-[350px]"
      />

      {/* Logo */}
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
          y: 0,
        }}
        transition={{
          duration: 2.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ height: "300px" }}
        className="w-auto"
      />
    </div>
  );
};

export default LogoAnimation;