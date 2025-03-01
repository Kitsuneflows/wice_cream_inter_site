import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from '@/sections/Projects'
import { TapeSection } from '@/sections/Tape'
import { TestimonialsSection } from '@/sections/Testimonials'


export default function Home() {
  return (
    <div className="bg-gray-800">
      <HeroSection/>
      <ProjectsSection/>
      <TapeSection />
      <TestimonialsSection/>
    </div>
  );
}
