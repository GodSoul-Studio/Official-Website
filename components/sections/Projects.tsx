"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "開源專案管理平台",
      description: "協助開發團隊更有效地管理開源專案的協作平台",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    },
    {
      title: "企業資源管理系統",
      description: "為企業客戶打造的全方位資源管理解決方案",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      title: "電子商務平台",
      description: "現代化的電商系統，提供完整的購物體驗",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    },
  ];

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">精選專案</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}