import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Staffing and Recruitment Platform",
    description: "AI-powered platform delivers exceptional business outcomes by accelerating time to hire, optimizing contingent workforce spend, and ensuring access to top talent",
    image: "https://picsum.photos/600/400?random=1",
    tech: ["PHP", "Node.js", "SQL", "Payment Gateways"],
    github: "https://github.com",
    live: "https://magnitglobal.com/",
    aiHint: "contingent workforce management"
  },
  {
    title: "Fitness & Healthcare",
    description: "Gleantap is a patient engagement platform with built-in CRM to centralize & automate communication with patients throughout lifecycle, so you turn more leads to patients & patients to repeat customers.",
    image: "https://picsum.photos/600/400?random=2",
    tech: ["React", "PHP", "Firebase", "SQL"],
    github: "https://github.com",
    live: "https://gleantap.com/",
    aiHint: "dashboard app"
  },
  {
    title: "Finance & Invoicing",
    description: "A complete business management solution designed to streamline operations with GST-ready invoicing, inventory and warehouse management, accounting, and online payments.",
    image: "https://m.media-amazon.com/images/I/717UUb+F1JL.png",
    tech: ["Node.js", "Angular", "SQL", "PHP", "AWS"],
    github: "https://github.com",
    live: "https://www.ginvoicing.com/",
    aiHint: "complete invoicing solution"
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
