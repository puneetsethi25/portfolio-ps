import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import Skills from '@/components/sections/skills';
import Experience from '@/components/sections/experience';
import Projects from '@/components/sections/projects';
import Testimonials from '@/components/sections/testimonials';
import Blog from '@/components/sections/blog';
import SkillSuggester from '@/components/sections/skill-suggester';
import Contact from '@/components/sections/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="container flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Blog />
        <SkillSuggester />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
