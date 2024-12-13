"use client";

import { FooterBrand } from "./footer/FooterBrand";
import { FooterLinks } from "./footer/FooterLinks";
import { FooterContact } from "./footer/FooterContact";
import { FooterSocial } from "./footer/FooterSocial";
import { footerLinks } from "@/lib/footer-config";

export default function Footer() {
  return (
    <footer className="bg-background border-t ">
      <div className="container mx-auto px-4">
        
        {/* <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          <div className="lg:col-span-2">
            <FooterBrand />
          </div>

        
          <FooterLinks title="服務項目" links={footerLinks.services} delay={0.1} />
          <FooterLinks title="公司資訊" links={footerLinks.company} delay={0.2} />
          <FooterContact />
        </div>  */}

        {/* Bottom Bar */}
        <div className="py-8 ">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © 2024 靈魂之神工作室. All rights reserved.
            </div>
            <FooterSocial />
          </div>
        </div>
      </div>
    </footer>
  );
}