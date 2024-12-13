"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">聯絡我們</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">與我們聯繫</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-4 text-primary" />
                <p>台北市信義區信義路五段7號</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4 text-primary" />
                <p>+886 2 2345 6789</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4 text-primary" />
                <p>contact@studio.tw</p>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <Input placeholder="您的名字" />
              <Input type="email" placeholder="電子郵件" />
              <Textarea placeholder="訊息內容" className="h-32" />
              <Button className="w-full">發送訊息</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}