import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Technical Lead",
    company: "Prism Cloud Consulting Inc.",
    duration: "Jan 2023 - Present",
    description: "As a Technical Lead, I oversee project planning, task delegation, and team coordination while ensuring smooth communication with clients and stakeholders. I manage technical operations like database/app development, troubleshooting, and risk handling, while motivating the team, tracking progress, and driving continuous improvements.",
  },
  {
    title: "Senior Full Stack Engineer",
    company: "Kano Apps",
    duration: "May 2022 - Aug 2022",
    description: "Developed new features, fixed bugs, and handled deployments using GitFlow. Worked across frontend and backend (PHP/Node.js), managed Redis for caching and real-time events, and configured cron jobs, queues, and RESTful APIs for mobile apps.",
  },
  {
    title: "Senior Full Stack Engineer",
    company: "Pro-Unlimited<>WillHire.co",
    duration: "Mar 2021 - Apr 2022",
    description: "Developed new features, fixed bugs, and optimized large-scale data imports (100k–1M records). Built and maintained PHP queues with Docker, RabbitMQ, and Yii2, configured CI/CD pipelines in Jenkins, and automated EC2 setup with Bash. Integrated CloudWatch alerts, scaled EC2 instances, and worked with third-party services like Fieldglass, VNDLY, SendGrid, and Twilio.",
  },
  {
    title: "Senior Lead Software Engineer (Contract)",
    company: "Gleantap",
    duration: "Jul 2020 - Jan 2021",
    description: "At Gleantap, I worked as Lead Developer using PHP, SQL, and JavaScript, handling multiple modules. I optimized cron jobs with PHPAmp, configured load balancers for EC2 instances, and set up video conferencing servers using XMPP and Jitsi, including scaling video bridges dynamically based on load.",
  },    
  {
    title: "Lead Software Engineer",
    company: "ABCDevOps",
    duration: "Dec 2017 - Jul 2020",
    description: "At ABCDevOps, I gathered and analyzed requirements, assisted in software architecture, and developed solutions using PHP, Node.js, Ruby, Python, JavaScript, and SQL. I also handled testing, debugging, and implemented enhancements with new technologies for improved results.",
  },
  {
    title: "Technical Lead",
    company: "DigiMantra Labs",
    duration: "Aug 2016 - Dec 2017",
    description: "At Digimantra Labs, I worked as Sr. Developer and later Team Lead, primarily using PHP and MySQL. I managed applications, built a major fitness app, set up environments on AWS EC2, developed REST APIs in Yii2, implemented RBAC for multiple roles, and integrated Yii2 modules with subdomains. I also built a multi-level income structure with PHP/JS and worked on an Angular 2 frontend for an AI-based VM cluster management app.",
  },
  {
    title: "Senior Software Engineering",
    company: "iZAP Technologies",
    duration: "Mar 2011 - Aug 2016",
    description: "At iZAP, I began my Full-Stack career under the mentorship of Mr. Tarun Jangra, working with PHP, Node.js, Angular, React, EC2, Lambda, and Socket.io. I primarily focused on backend development, building REST APIs in Yii2/Laravel for financial data, configuring SMTP with SendGrid/Mailchimp, and gaining deep experience with Git workflows and pipelines."
  },
  {
    title: "Junior PHP Programmer",
    company: "VITAE (YourSports.com)-Powered by iZAP Technologies",
    duration: "Mar 2011 - Aug 2016",
    description: "On Project Vitae (@YourSports) at iZAP, I worked as a Programmer using PHP, MySQL, JavaScript, Elasticsearch, Redis, and React. My responsibilities included database management, large-scale data imports (~1M records), social platform integrations, and enhancing the UI by introducing React components."
  }  
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
