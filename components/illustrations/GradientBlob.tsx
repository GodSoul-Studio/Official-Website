"use client";

import { motion } from "framer-motion";

export const GradientBlob = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.8 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(var(--chart-1), 0.2) 0%, rgba(var(--chart-2), 0.1) 50%, transparent 70%)",
        filter: "blur(40px)",
      }}
    />
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.8 }}
      transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
      className="absolute -bottom-1/2 -left-1/2 w-[600px] h-[600px] rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(var(--chart-3), 0.2) 0%, rgba(var(--chart-4), 0.1) 50%, transparent 70%)",
        filter: "blur(40px)",
      }}
    />
  </div>
);