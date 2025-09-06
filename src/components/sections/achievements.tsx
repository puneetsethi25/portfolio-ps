import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const achievements = [
  {
    title: "Employee of the Month",
    organization: "Prism Cloud Consulting Inc.",
    date: "March 2024",
    description: "Recognized for exceptional performance and contributions to the team's success."
  },
  {
    title: "Innovation Award",
    organization: "Kano Apps",
    date: "July 2022",
    description: "Awarded for developing a novel feature that significantly improved user engagement."
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
