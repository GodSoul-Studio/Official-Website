import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export const footerLinks = {
  services: [
    { name: "網站開發", href: "/services#web" },
    { name: "系統開發", href: "/services#system" },
    { name: "開源專案", href: "/services#opensource" },
    { name: "技術諮詢", href: "/services#consulting" },
  ],
  company: [
    { name: "關於我們", href: "/about" },
    { name: "團隊介紹", href: "/team" },
    { name: "職缺機會", href: "/careers" },
    { name: "合作夥伴", href: "/partners" },
  ],
  resources: [
    { name: "技術文章", href: "/blog" },
    { name: "開發文件", href: "/docs" },
    { name: "常見問題", href: "/faq" },
    { name: "使用條款", href: "/terms" },
  ],
  contact: [
    { icon: <MapPin className="w-5 h-5" />, text: "台北市信義區信義路五段7號" },
    { icon: <Phone className="w-5 h-5" />, text: "+886 2 2345 6789" },
    { icon: <Mail className="w-5 h-5" />, text: "contact@studio.tw" },
  ],
};

export const socialLinks = [
  { icon: <Github className="w-5 h-5" />, href: "https://github.com/GodSoul-Studio", label: "Github" },
  // { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
  // { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
  // { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
  // { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
];