"use client";

import { motion } from "framer-motion";

export const Waves = () => (
  <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <svg viewBox="0 0 1440 320" className="w-full">
        <path
          fill="currentColor"
          fillOpacity="0.1"
          d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </motion.div>
  </div>
);