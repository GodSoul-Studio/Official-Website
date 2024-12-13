"use client";

import { motion } from "framer-motion";
import { footerLinks } from "@/lib/footer-config";

interface FooterLinksProps {
  title: string;
  links: Array<{ name: string; href: string }>;
  delay?: number;
}

export function FooterLinks({ title, links, delay = 0 }: FooterLinksProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <h4 className="font-semibold mb-6">{title}</h4>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}