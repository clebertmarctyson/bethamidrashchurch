"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: "url('/church-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        y,
      }}
    />
  );
};
