"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "糖豆魚 PTD",
    // role: "",
    bio: "擁有15年軟體開發經驗，專精於系統架構設計與團隊管理",
    avatar:
      "https://res.cloudinary.com/dxlsbq2q8/image/upload/v1734160062/teams/ua5rdzx1kxun7ijycsgr.webp",
    initials: "糖豆魚 PTD",
    social: {
      github: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "小飛 Lulucute",
    // role: "",
    bio: "擁有15年軟體開發經驗，專精於系統架構設計與團隊管理",
    avatar:
      "https://res.cloudinary.com/dxlsbq2q8/image/upload/v1734160063/teams/ymsk989arzxjgdneuwt2.jpg",
    initials: "小飛 Lulucute",
    social: {
      github: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  // {
  //   name: "王大明",
  //   // role: "",
  //   bio: "專注於高效能後端系統開發，熟悉 Node.js 與 Python",
  //   avatar:
  //     "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  //   initials: "王",
  //   social: {
  //     github: "#",
  //     twitter: "#",
  //     linkedin: "#",
  //   },
  // },
  {
    name: "雪球 Raistey",
    // role: "",
    bio: "React 與 Vue.js 專家，致力於創造絕佳的使用者體驗",
    avatar:
      "https://res.cloudinary.com/dxlsbq2q8/image/upload/v1734161874/teams/xxihnvdl6ruvg3ahkkkj.png",
    initials: "李",
    social: {
      github: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export function TeamGrid() {
  return (
    <section className="py-20 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">核心人物</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          專業的領導成員，帶領工作室共創未來
        </p>
      </motion.div>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <Card className="p-6">
                <div className="text-center mb-2">
                  <Avatar className="w-24 h-24 mx-auto">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
                  {/* <p className="text-primary font-medium">{member.role}</p> */}
                </div>
                {/* <p className="text-muted-foreground text-sm text-center mb-6">
                  {member.bio}
                </p> */}
                {/* <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div> */}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
