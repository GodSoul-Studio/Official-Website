"use client";

import { motion } from "framer-motion";

export const Circles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.1 }}
      transition={{ duration: 1 }}
      className="absolute -top-1/2 -right-1/2 w-full h-full"
    >
      <div className="w-[800px] h-[800px] rounded-full border-2 border-current" />
    </motion.div>
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="absolute -bottom-1/2 -left-1/2 w-full h-full"
    >
      <div className="w-[600px] h-[600px] rounded-full border-2 border-current" />
    </motion.div>
  </div>
);