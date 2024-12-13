"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Globe, Server, Sparkles, Workflow, Zap } from "lucide-react";
// import { Waves } from "../../illustrations/Waves";
import { GradientBlob } from "../../illustrations/GradientBlob";
import { ServicesScene } from "../../three/ServicesScene";

export default function Services() {
  const services = [
    {
      icon: <Globe className="w-12 h-12 mb-4" />,
      title: "網站開發",
      description: "從品牌形象到後臺管理，提供完整的網站開發解決方案。",
      gradient: "from-[hsl(var(--chart-1))] to-[hsl(var(--chart-2))]"
    },
    {
      icon: <Server className="w-12 h-12 mb-4" />,
      title: "系統開發",
      description: "客製化的後端系統開發，確保您的業務流程順暢運作。",
      gradient: "from-[hsl(var(--chart-2))] to-[hsl(var(--chart-3))]"
    },
    {
      icon: <Code className="w-12 h-12 mb-4" />,
      title: "開源專案",
      description: "積極參與開源社群，為軟體生態系統做出貢獻。",
      gradient: "from-[hsl(var(--chart-3))] to-[hsl(var(--chart-4))]"
    },
    {
      icon: <Workflow className="w-12 h-12 mb-4" />,
      title: "流程優化",
      description: "分析並優化您的業務流程，提升營運效率。",
      gradient: "from-[hsl(var(--chart-4))] to-[hsl(var(--chart-5))]"
    },
    {
      icon: <Sparkles className="w-12 h-12 mb-4" />,
      title: "UI/UX 設計",
      description: "創造直觀且吸引人的使用者介面，提升使用體驗。",
      gradient: "from-[hsl(var(--chart-5))] to-[hsl(var(--chart-1))]"
    },
    {
      icon: <Zap className="w-12 h-12 mb-4" />,
      title: "技術諮詢",
      description: "提供專業的技術建議，協助您做出最佳決策。",
      gradient: "from-[hsl(var(--chart-1))] to-[hsl(var(--chart-3))]"
    }
  ];

  return (
    <section className="relative py-32 bg-background overflow-hidden">
      <ServicesScene />
      {/* <Waves /> */}
      <GradientBlob />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-[hsl(var(--chart-1))] to-[hsl(var(--chart-2))] bg-clip-text">
            我們的服務
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            提供全方位的軟體開發服務，從概念到實現，我們與您同行
          </p>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
            >
              <Card className="relative overflow-hidden backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <motion.div 
                    className={`flex justify-center bg-gradient-to-r ${service.gradient} p-4 rounded-full w-20 h-20 mx-auto mb-4 text-primary`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}