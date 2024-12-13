"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { GradientBlob } from "@/components/illustrations/GradientBlob";
import { Dots } from "@/components/illustrations/Dots";

export function ProjectsHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <GradientBlob />
      <Dots />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center"
            >
              <Code2 className="w-10 h-10 text-primary" />
            </motion.div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-[hsl(var(--primary)/_0.8)] to-[hsl(var(--primary)/_0.6)] text-transparent bg-clip-text">
            精選作品展示
          </h1>
          <p className="text-xl text-muted-foreground">
            探索我們的成功案例，見證專業團隊的技術實力
          </p>
        </motion.div>
      </div>
    </section>
  );
}