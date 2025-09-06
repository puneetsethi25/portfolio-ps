import { Badge } from '@/components/ui/badge';
import { Code, Database, Server, Cloud, Palette, GitBranch } from 'lucide-react';

const skills = [
  { name: 'Node.js', icon: <Server className="h-4 w-4 mr-1" /> },
  { name: 'React & Next.js', icon: <Code className="h-4 w-4 mr-1" /> },
  { name: 'TypeScript', icon: <Code className="h-4 w-4 mr-1" /> },
  { name: 'PostgreSQL', icon: <Database className="h-4 w-4 mr-1" /> },
  { name: 'Docker', icon: <Cloud className="h-4 w-4 mr-1" /> },
  { name: 'RESTful API', icon: <Palette className="h-4 w-4 mr-1" /> },
  { name: 'Git & GitHub', icon: <GitBranch className="h-4 w-4 mr-1" /> },
  { name: 'AWS', icon: <Cloud className="h-4 w-4 mr-1" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-24 bg-secondary">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Technical <span className="text-primary">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <Badge
              key={skill.name}
              variant="default"
              className="text-lg py-2 px-4 rounded-full transition-transform hover:scale-105 cursor-pointer flex items-center bg-primary/10 text-primary hover:bg-primary/20 border-2 border-primary"
            >
              {skill.icon}
              {skill.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
