import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const achievements = [
  {
    title: "Employee of the Quarter",
    organization: "Prism Cloud Consulting Inc.",
    date: "July 2023",
    description: "Recognized for exceptional performance and contributions to the team's success."
  },
  {
    title: "Innovation & Product Impact",
    organization: "Ginvoicing Solutions Pvt. Ltd.",
    date: "July 2019",
    description: "Awarded for developing a novel feature that significantly improved user engagement and Migrating the platform to a microservices architecture."
  },
    {
    title: "Guest Speaker — Serverless Computing",
    organization: "PCTE Group of Institutes",
    date: "Oct 2024",
    description: "Invited as a guest speaker to deliver a technical lecture on Serverless Computing and AWS Lambda at PCTE Group of Institutes, sharing real-world insights on building scalable, event-driven applications."
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Awards & <span className="text-primary">Achievements</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                 <div className="flex items-center mb-4">
                  <Trophy className="h-8 w-8 text-primary mr-4" />
                  <div>
                    <CardTitle>{achievement.title}</CardTitle>
                    <CardDescription>{achievement.organization} - {achievement.date}</CardDescription>
                  </div>
                </div>
                <CardDescription>{achievement.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
