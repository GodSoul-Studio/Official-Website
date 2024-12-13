"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Heart, Lightbulb, Target, Zap } from "lucide-react";

const values = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "熱情",
    description: "我們熱愛技術，享受創造的過程"
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "創新",
    description: "持續學習，擁抱新技術與挑戰"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "專注",
    description: "專注於細節，追求卓越品質"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "效率",
    description: "高效工作，準時交付優質成果"
  }
];

export function TeamCulture() {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">團隊宗旨</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            我們的核心價值塑造了我們的團隊交流氛圍
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center h-full hover:shadow-lg transition-shadow">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary"
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}