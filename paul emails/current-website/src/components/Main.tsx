import { HeroSection } from "@/sections/HeroSection";
import { FeaturesSection } from "@/sections/FeaturesSection";
import { UpcomingWebinarsSection } from "@/sections/UpcomingWebinarsSection";
import { ResourcesSection } from "@/sections/ResourcesSection";
import { BlogSection } from "@/sections/BlogSection";
import { PodcastSection } from "@/sections/PodcastSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";

export const Main = () => {
  return (
    <main role="main" className="caret-transparent break-words z-[9]">
      <article className="caret-transparent break-words">
        <HeroSection />
        <FeaturesSection />
        <UpcomingWebinarsSection />
        <ResourcesSection />
        <BlogSection />
        <PodcastSection />
        <TestimonialsSection />
      </article>
    </main>
  );
};
