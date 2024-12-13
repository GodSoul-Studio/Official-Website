"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useProjectCategories } from "@/lib/useProjectCategories";

const categories = [
  "全部",
  "品牌網站",
  "APP",
  // "金融科技",
  // "數據分析",
  // "物聯網"
];

export function ProjectCategories() {
  const { activeCategory, setActiveCategory } = useProjectCategories();

  return (
    <section className="py-12 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="min-w-[100px]"
            >
              {category}
            </Button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}