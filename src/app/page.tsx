import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import Skills from '@/components/sections/skills';
import Experience from '@/components/sections/experience';
import Projects from '@/components/sections/projects';
import Testimonials from '@/components/sections/testimonials';
import Blog from '@/components/sections/blog';
// import SkillSuggester from '@/components/sections/skill-suggester';
import Contact from '@/components/sections/contact';
import Footer from '@/components/footer';
import Certifications from '@/components/sections/certifications';
import Achievements from '@/components/sections/achievements';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> 
          <Hero />
          <Skills />
          <Experience />
          <Certifications />
          <Achievements />
          <Projects />
          <Testimonials />
          <Blog />
          {/* <SkillSuggester /> */}
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
