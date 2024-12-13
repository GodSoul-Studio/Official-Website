'use client';

import { motion } from 'framer-motion';
import { ClockArrowUp, UserRound, Sparkles, Code2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

const features = [
  {
    icon: <UserRound className="w-8 h-8" />,
    title: '專業團隊',
    stats: '10+',
    statsLabel: '核心成員',
    highlights: ['頂尖開發專家', '多元技術覆蓋', '深厚技術經驗'],
  },
  {
    icon: <ClockArrowUp className="w-8 h-8" />,
    title: '敏捷開發',
    stats: '2x',
    statsLabel: '效率提升',
    highlights: ['快速交付成果', '靈活應對需求', '即時用戶回饋'],
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: '程式品質',
    stats: '1M+',
    statsLabel: '代碼行數',
    highlights: ['完善測試覆蓋', '持續交付整合', '嚴謹代碼審核'],
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: '卓越體驗',
    stats: '95%',
    statsLabel: '用戶滿意率',
    highlights: ['直觀友好設計', '無障礙操作介面', '卓越效能表現'],
  },

];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Features() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-[hsl(var(--primary)/_0.8)] to-[hsl(var(--primary)/_0.6)] bg-clip-text">
            我們的特色
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            結合創新技術與專業經驗，為您打造最佳解決方案
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <div className="flex items-baseline space-x-2 mb-4">
                      <span className="text-2xl font-bold text-primary">
                        {feature.stats}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {feature.statsLabel}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {feature.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2" />
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
