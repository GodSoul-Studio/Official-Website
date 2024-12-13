"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bot, FolderKanban, Telescope, ArrowRight} from "lucide-react";


export function ServicesHero() {
  const Services = [
    {
      icon: <Telescope className="w-8 h-8" />,
      title: "品牌網站開發",
      description: "與國際接軌的開發思維"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "LineBot/Discord Bot設計",
      description: "持續探索最新技術"
    },
    {
      icon: <FolderKanban className="w-8 h-8" />,
      title: "後臺管理系統建置",
      description: "嚴格的開發標準"
    }
  ];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-[hsl(var(--primary)/_0.8)] to-[hsl(var(--primary)/_0.6)] text-transparent bg-clip-text">
            專業的軟體開發服務
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            從概念到實現，我們提供全方位的軟體開發解決方案
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="group">
              開始合作
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {Services.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}