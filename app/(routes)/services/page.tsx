"use client";

import { motion } from "framer-motion";
// import { ServiceCard } from "@/components/cards/ServiceCard";
import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { ServiceProcess } from "@/components/sections/services/ServiceProcess";
import { ServicePricing } from "@/components/sections/services/ServicePricing";


import Footer from "@/components/layout/Footer";

export default function ServicesPage() {
  return (
    <main className="pt-16">
      <ServicesHero />
      <ServiceProcess />
      {/* <ServicePricing /> */}
      <Footer />
      </main>
  );
}