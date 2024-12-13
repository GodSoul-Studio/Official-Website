"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code2, Coffee, Heart } from "lucide-react";

export function TeamJoin() {
  const benefits = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "技術成長",
      description: "持續學習最新技術，參與開源專案"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "工作生活平衡",
      description: "自訂適宜完成任務"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "友善環境",
      description: "開放式溝通，團隊合作氛圍"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">加入我們</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            我們永遠歡迎優秀的人才加入，一起創造更好的未來
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* <Button size="lg" className="group">
            查看職缺
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button> */}
        </motion.div>
      </div>
    </section>
  );
}