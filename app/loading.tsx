"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading completion (you can replace this with actual data loading logic)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 3 seconds
    }, 3000); // Adjust the duration as needed (3 seconds here)
    
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (!isLoading) return null; // Return null if loading is complete (hide the spinner)

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}  // Initial opacity (hidden)
      animate={{ opacity: 1 }}  // Animate to full opacity (visible)
      exit={{ opacity: 0 }}     // Fade out on exit
      transition={{ duration: 0.5 }} // Duration of the fade animation
    >
      <motion.div
        className="w-16 h-16 border-4 border-t-4 border-primary border-solid rounded-full animate-spin"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }} // Fade-in for spinner
      />
    </motion.div>
  );
}
