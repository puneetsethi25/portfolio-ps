import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Senior Technical Lead",
    company: "Innovate Inc.",
    duration: "2020 - Present",
    description: "Leading a team of talented developers to build next-generation financial technology solutions. Responsible for architecture design, code reviews, and mentoring junior engineers.",
  },
  {
    title: "Full Stack Developer",
    company: "Tech Solutions Co.",
    duration: "2017 - 2020",
    description: "Developed and maintained scalable web applications for various clients using React, Node.js, and GraphQL. Collaborated with cross-functional teams to deliver high-quality products.",
  },
  {
    title: "Software Engineer",
    company: "Digital Creations",
    duration: "2014 - 2017",
    description: "Started my journey by building responsive websites and internal tools. Gained foundational skills in JavaScript, HTML, CSS, and backend development with PHP and MySQL.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Work <span className="text-primary">Experience</span>
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border" aria-hidden="true"></div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center">
                <div className="hidden md:block w-1/2 pr-8 text-right">
                  {index % 2 === 0 && (
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle>{exp.title}</CardTitle>
                        <CardDescription>{exp.company} | {exp.duration}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>{exp.description}</p>
                      </CardContent>
                    </Card>
                  )}
                </div>
                <div className="hidden md:block w-1/2 pl-8">
                  {index % 2 !== 0 && (
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle>{exp.title}</CardTitle>
                        <CardDescription>{exp.company} | {exp.duration}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>{exp.description}</p>
                      </CardContent>
                    </Card>
                  )}
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 bg-background p-2 rounded-full border-2 border-primary">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                 <div className="block md:hidden w-full">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle>{exp.title}</CardTitle>
                        <CardDescription>{exp.company} | {exp.duration}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>{exp.description}</p>
                      </CardContent>
                    </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
