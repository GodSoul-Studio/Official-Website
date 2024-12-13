"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Calendar, Code2, Users2, Rocket } from "lucide-react";

const timeline = [
  {
    year: "2024/5",
    title: "團隊成立",
    description: "由一名臺灣學生成立並招集各地人才共同創立",
    icon: <Users2 className="w-6 h-6" />,
  },
  {
    year: "2024/10",
    title: "第一次聯手",
    description: "團隊第一次與與團隊『Bityo 幣友科技』合作聯手開發2FA驗證項目",
    icon: <Code2 className="w-6 h-6" />,
  },
];

export function TeamTimeline() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">發展歷程</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            見證我們的成長與進步
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } justify-center gap-8`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                  <Card className="inline-block p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}