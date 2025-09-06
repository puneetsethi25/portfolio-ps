import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with a custom CMS, payment gateway integration, and a recommendation engine.",
    image: "https://picsum.photos/600/400?random=1",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://github.com",
    aiHint: "online store"
  },
  {
    title: "Project Management Tool",
    description: "A collaborative project management tool with real-time updates, task boards, and team communication features.",
    image: "https://picsum.photos/600/400?random=2",
    tech: ["React", "Firebase", "Zustand", "Framer Motion"],
    github: "https://github.com",
    live: "https://github.com",
    aiHint: "dashboard app"
  },
  {
    title: "Portfolio Website Builder",
    description: "An AI-powered portfolio builder that helps developers create stunning portfolios in minutes. Features dynamic theming and content generation.",
    image: "https://picsum.photos/600/400?random=3",
    tech: ["Next.js", "Genkit AI", "Vercel", "Shadcn UI"],
    github: "https://github.com",
    live: "https://github.com",
    aiHint: "website builder"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-24 bg-secondary">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <CardHeader className="p-0">
                <Image src={project.image} alt={project.title} width={600} height={400} data-ai-hint={project.aiHint} className="object-cover" />
              </CardHeader>
              <CardContent className="p-6 flex flex-col flex-grow">
                <CardTitle className="mb-2">{project.title}</CardTitle>
                <CardDescription className="flex-grow">{project.description}</CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="secondary">{t}</Badge>
                  ))}
                </div>
                <div className="mt-6 flex justify-end space-x-4">
                  <Button variant="outline" asChild>
                    <Link href={project.github} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href={project.live} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
