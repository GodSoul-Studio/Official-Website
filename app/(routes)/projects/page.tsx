"use client";

import { ProjectsGrid } from "@/components/sections/projects/ProjectsGrid";
import { ProjectsHero } from "@/components/sections/projects/ProjectsHero";
import { ProjectCategories } from "@/components/sections/projects/ProjectCategories";
import Footer from "@/components/layout/Footer";

export default function ProjectsPage() {
  return (
    <main className="pt-16">
      <ProjectsHero />
      {/* <ProjectCategories /> */}
      <ProjectsGrid />
      <Footer />
      </main>
  );
}