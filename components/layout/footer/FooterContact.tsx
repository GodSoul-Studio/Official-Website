"use client";

import { motion } from "framer-motion";
import { footerLinks } from "@/lib/footer-config";

export function FooterContact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h4 className="font-semibold mb-6">聯絡資訊</h4>
      <ul className="space-y-4">
        {footerLinks.contact.map((item, index) => (
          <li key={index} className="flex items-center gap-3">
            <span className="text-primary">{item.icon}</span>
            <span className="text-muted-foreground">{item.text}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}