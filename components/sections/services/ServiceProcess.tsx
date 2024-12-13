// "use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CheckCircle2, FileSearch, MessageSquare, Rocket, Settings2, Users2 } from "lucide-react";

const processes = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "需求訪談",
    description: "深入了解您的業務需求與目標",
    step: "01"
  },
  {
    icon: <FileSearch className="w-6 h-6" />,
    title: "方案規劃",
    description: "制定最適合的技術解決方案",
    step: "02"
  },
  {
    icon: <Users2 className="w-6 h-6" />,
    title: "團隊組建",
    description: "配置最適合的專業團隊",
    step: "03"
  },
  {
    icon: <Settings2 className="w-6 h-6" />,
    title: "開發實現",
    description: "高效率的敏捷開發流程",
    step: "04"
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "品質驗證",
    description: "嚴格的測試與品質把關",
    step: "05"
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "部署上線",
    description: "安全穩定的部署服務",
    step: "06"
  }
];

export function ServiceProcess() {
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
          <h2 className="text-4xl font-bold mb-4">服務流程</h2>
          <p className="text-lg text-muted-foreground">
            標準化的開發流程，確保專案順利進行
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >

              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group">
                <div className="relative">
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {process.step}
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 group-hover:scale-110 transition-transform duration-300">
                      {process.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{process.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{process.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile Process Flow Indicator */}
        <div className="lg:hidden mt-12 flex justify-center">
          <div className="flex items-center space-x-2">
            {processes.map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`w-2 h-2 rounded-full ${
                  index === 0 ? "bg-primary" : "bg-primary/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}