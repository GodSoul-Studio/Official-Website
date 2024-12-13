"use client";

import { TeamHero } from "@/components/sections/team/TeamHero";
import { TeamGrid } from "@/components/sections/team/TeamGrid";
import { TeamTimeline } from "@/components/sections/team/TeamTimeline";
import { TeamCulture } from "@/components/sections/team/TeamCulture";
import { TeamJoin } from "@/components/sections/team/TeamJoin";
import Footer from "@/components/layout/Footer";

export default function TeamPage() {
  return (
    <main className="pt-16">
      <TeamHero />
      <TeamTimeline />
      <TeamGrid />
      <TeamCulture />
      {/* <TeamJoin /> */}
      <Footer />
      </main>
  );
}