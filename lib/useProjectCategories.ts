"use client";

import { useState } from "react";

export function useProjectCategories() {
  const [activeCategory, setActiveCategory] = useState("全部");

  return {
    activeCategory,
    setActiveCategory,
  };
}