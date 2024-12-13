"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/lib/footer-config";

export function FooterSocial() {
  return (
    <div className="flex items-center gap-6">
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          aria-label={social.label}
          className="text-muted-foreground hover:text-primary transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
}