import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const LogoAnimation = () => {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
    }, 2000); // text stays for 2s

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
  className="flex items-center justify-center h-screen bg-cover bg-center"
  style={{
    backgroundImage: `url(https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600&q=80)`
  }}
>
  <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
      
      {/* Text */}
      <motion.img
  src="/rangaliya-home-art/images/rangaliya-text.png"
  alt="Rangaliya"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: showText ? 1 : 0, y: showText ? 0 : -20 }}
  transition={{ duration: 0.6 }}
  className="w-48 md:w-64 absolute"
/>

      {/* Logo */}
      <motion.img
        src={logo}
        alt="Rangaliya Logo"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: showText ? 0.8 : 1,
          opacity: showText ? 0 : 1,
        }}
        transition={{ duration: 0.8 }}
        className="w-40 md:w-56"
      />
    </div>
  );
};

export default LogoAnimation;