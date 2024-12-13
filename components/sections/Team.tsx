"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Team() {
  const team = [
    {
      name: "張小明",
      role: "技術總監",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      initials: "張",
    },
    {
      name: "李小華",
      role: "前端工程師",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      initials: "李",
    },
    {
      name: "王大明",
      role: "後端工程師",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      initials: "王",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">核心團隊</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle>{member.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}