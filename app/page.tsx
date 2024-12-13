"use client";

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Features from "@/components/sections/Features";
import Projects from "@/components/sections/Projects";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Services />
      {/* <Projects /> */}
      {/* <Team />
      <Contact /> */}
      <Footer />
    </main>
  );
}