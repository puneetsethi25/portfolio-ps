import { Badge } from '@/components/ui/badge';
import { Server, Code, Database, Cloud, Palette, GitBranch, Settings, Clock, Layers, CreditCard, Smartphone } from 'lucide-react';

const skills = [
  { name: 'Node.js', icon: <Server className="h-4 w-4 mr-1" /> },
  { name: 'React & Next.js', icon: <Code className="h-4 w-4 mr-1" /> },
  { name: 'TypeScript', icon: <Code className="h-4 w-4 mr-1" /> },
  { name: 'PostgreSQL', icon: <Database className="h-4 w-4 mr-1" /> },
  { name: 'MongoDB', icon: <Database className="h-4 w-4 mr-1" /> },                // NEW
  { name: 'MySQL / RDS', icon: <Database className="h-4 w-4 mr-1" /> },            // NEW
  { name: 'Docker', icon: <Cloud className="h-4 w-4 mr-1" /> },
  { name: 'Kubernetes (EKS)', icon: <Cloud className="h-4 w-4 mr-1" /> },          // NEW
  { name: 'AWS (EC2, Lambda, ECS, S3, Cognito)', icon: <Cloud className="h-4 w-4 mr-1" /> },
  { name: 'Serverless (SAM)', icon: <Cloud className="h-4 w-4 mr-1" /> },          // NEW
  { name: 'RESTful API', icon: <Palette className="h-4 w-4 mr-1" /> },
  { name: 'GraphQL', icon: <Code className="h-4 w-4 mr-1" /> },                    // NEW
  { name: 'Git & GitHub', icon: <GitBranch className="h-4 w-4 mr-1" /> },
  { name: 'CI/CD (AWS CodePipeline)', icon: <Settings className="h-4 w-4 mr-1" /> }, // NEW
  { name: 'Terraform / CloudFormation', icon: <Settings className="h-4 w-4 mr-1" /> }, // NEW
  { name: 'Temporal.io', icon: <Clock className="h-4 w-4 mr-1" /> },               // NEW
  { name: 'Redis & Caching', icon: <Database className="h-4 w-4 mr-1" /> },       // NEW
  { name: 'Microservices Architecture', icon: <Layers className="h-4 w-4 mr-1" /> }, // NEW
  { name: 'Stripe Payment Integration', icon: <CreditCard className="h-4 w-4 mr-1" /> }, // NEW
  { name: 'Flutter', icon: <Smartphone className="h-4 w-4 mr-1" /> },              // NEW
];


const Skills = () => {
  return (
    <section id="skills" className="p-3 py-20 md:py-8 bg-secondary">
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
