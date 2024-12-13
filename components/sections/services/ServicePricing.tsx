"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "基礎方案",
    price: "50,000",
    description: "適合小型專案",
    features: [
      "專案管理",
      "前端開發",
      "基礎後端功能",
      "響應式設計",
      "基本SEO優化"
    ]
  },
  {
    name: "進階方案",
    price: "150,000",
    description: "適合中型企業",
    features: [
      "完整專案規劃",
      "前後端開發",
      "資料庫設計",
      "API整合",
      "效能優化",
      "安全防護"
    ],
    popular: true
  },
  {
    name: "企業方案",
    price: "客製化",
    description: "適合大型企業",
    features: [
      "企業級解決方案",
      "系統架構設計",
      "高可用性保證",
      "24/7技術支援",
      "定期維護更新",
      "專屬項目經理"
    ]
  }
];

export function ServicePricing() {
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
          <h2 className="text-4xl font-bold mb-4">服務方案</h2>
          <p className="text-lg text-muted-foreground">
            選擇最適合您的開發方案
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`p-6 relative ${plan.popular ? 'border-primary' : ''}`}>
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                    最受歡迎
                  </span>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">NT${plan.price}</span>
                    {plan.price !== "客製化" && <span className="text-muted-foreground">/起</span>}
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  選擇方案
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}