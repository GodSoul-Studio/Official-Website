"use client";

import { motion } from "framer-motion";
import { Code2, GitBranch, Users } from "lucide-react";
import { Dots } from "../illustrations/Dots";
import { Circles } from "../illustrations/Circles";
import { GradientBlob } from "../illustrations/GradientBlob";
import { Button } from "../ui/button";
import { Scene } from "../three/Scene";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent to-background overflow-hidden">
      <Scene />
      <Dots />
      <Circles />
      <GradientBlob />
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-7xl md:mt-0 mt-[300px] font-bold mb-6 bg-gradient-to-r from-primary via-[hsl(var(--chart-1))] to-[hsl(var(--chart-2))] bg-clip-text ">
              創造夢想，挖掘機會
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              以技術為靈魂，為每個專案注入無限可能與創新的力量
            </p>
            <div className="flex justify-center gap-4">
              <a href={"https://discord.gg/CDSqPf8AYp"} target="_blank">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-[hsl(var(--chart-1))] hover:opacity-90"
                >
                  加入Discord 了解更多
                </Button>
              </a>
              {/* <Button size="lg" variant="outline">
                聯絡我們
              </Button> */}
            </div>
          </motion.div>
          <motion.div
            className="flex flex-wrap justify-center gap-8 mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              { icon: <Code2 />, title: "合作開發", desc: "共同創造優質軟體" },
              { icon: <Users />, title: "委託開發", desc: "專業客製化服務" },
              { icon: <GitBranch />, title: "開源貢獻", desc: "回饋開發社群" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50"
                whileHover={{
                  scale: 1.05,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 mb-4 text-primary flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
