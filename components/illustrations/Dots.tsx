"use client";

import { motion } from "framer-motion";

export const Dots = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 1 }}
      className="absolute w-full h-full"
      style={{
        backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }}
    />
  </div>
);