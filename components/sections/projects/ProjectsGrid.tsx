"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Securibit",
    category: "開源項目",
    description: "一款專注於安全性的 2FA 驗證碼軟體，目標是為用戶提供高安全性的去中心化 Web3 和區塊鏈服務環境。",
    image: "https://res.cloudinary.com/dxlsbq2q8/image/upload/v1734160186/products/rtqrbfwegale9vobf7xp.png",
    tech: ["Flutter", "Firebase"],
  },
  {
    title: "KGame Box",
    category: "開發軟體",
    description: "一款整合多種不用網路連線，離線也能玩的電腦遊戲整合軟體",
    image: "https://res.cloudinary.com/dxlsbq2q8/image/upload/v1734160185/products/mcgw7hjc4pkhdzyuxcic.png",
    tech: ["Electron"],
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export function ProjectsGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link href={`/projects/${project.title}`}>
                <Card className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="px-2 py-1 text-xs font-medium bg-primary/90 text-white rounded">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-semibold text-white mt-2">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}