"use client"
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { NewsletterForm } from "./NewsletterForm";

import Image from "next/image";

export function FooterBrand() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2 mb-6">
        {/* <Code2 className="w-8 h-8 text-primary" /> */}
        {/* <Image
          src="/logo.png" // Path relative to the `public` folder
          alt="靈魂之神工作室 Logo"
          width={50}
          height={50}
          className="object-cover"
        /> */}

        <span className="text-2xl font-bold">靈魂之神工作室</span>
      </div>
      <p className="text-muted-foreground mb-6 max-w-md">
        我們是一個由臺、港兩地學生所共同創立的服務型工作室。<br></br>
        目前提供多項不同類型的服務，目前也再召集各地專業的人才加入我們。
      </p>
      {/* <NewsletterForm /> */}
    </motion.div>
  );
}
