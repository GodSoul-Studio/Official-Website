"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 處理訂閱邏輯
    console.log("Subscribing email:", email);
  };

  return (
    <div className="space-y-3">
      <h4 className="font-semibold">訂閱最新消息</h4>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="輸入您的電子郵件"
          className="max-w-xs"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit">訂閱</Button>
      </form>
    </div>
  );
}