import { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";

import { AboutDetails } from "@/components/home/AboutDetails";
import { ProjectCard } from "@/components/home/ProjectCard";
import { PackageStats } from "@/components/stats/PackageStats";
import { SiteViews } from "@/components/stats/SiteViews";
import { PackageStatsSkeleton, SiteViewsSkeleton } from "@/components/stats/StatsSkeleton";
import { projects } from "@/constants";

export const metadata: Metadata = {
  title: "home · Ryan Gregory",
  description: "Personal website of Ryan Gregory",
};

export default function Home() {
  return (
    <main className="flex flex-col w-full py-16 lg:py-32">
      <Image
        className="mb-2 rounded-sm"
        src="/ryan-square.png"
        alt="Ryan Gregory, a man wearing a light t-shirt, a cap on backwards, and sunglasses, depicted in a black and white headshot with a blank background that is actually a yellow coloured wall in Venice, Italy"
        width={100}
        height={100}
        priority
      />

      <h1 className="text-4xl lg:text-5xl font-extrabold mb-1">Ryan Gregory</h1>
      <p className="text-lg lg:text-xl font-semibold mb-10">
        Senior Frontend Engineer · Amateur Photographer
      </p>

      <h2 className="text-2xl lg:text-3xl font-bold mb-3">About</h2>
      <Suspense fallback={<div className="mb-10 h-20 bg-muted/40 rounded-sm" />}>
        <AboutDetails />
      </Suspense>

      <h2 className="text-2xl lg:text-3xl font-bold mb-3">Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <h2 className="text-2xl lg:text-3xl font-bold mb-3">Stats</h2>
      <div className="flex flex-col gap-8">
        <Suspense fallback={<SiteViewsSkeleton />}>
          <SiteViews />
        </Suspense>

        <Suspense fallback={<PackageStatsSkeleton />}>
          <PackageStats />
        </Suspense>
      </div>
    </main>
  );
}
