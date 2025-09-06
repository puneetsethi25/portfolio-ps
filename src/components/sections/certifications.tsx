import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const certifications = [
  {
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "Issued Jun 2024",
    credentialId: "D1L48112M1411C59",
    credentialUrl: "#"
  },
  // You can add more certifications here
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 md:py-24 bg-secondary">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Licenses & <span className="text-primary">Certifications</span>
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {certifications.map((cert, index) => (
             <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="grid grid-cols-[1fr_auto] items-start gap-4 space-y-0">
                <div className="space-y-1">
                  <CardTitle>{cert.name}</CardTitle>
                  <CardDescription>{cert.issuer}</CardDescription>
                  <CardDescription>{cert.date}</CardDescription>
                  <CardDescription>Credential ID: {cert.credentialId}</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                   <Button variant="outline" asChild>
                    <Link href={cert.credentialUrl} target="_blank">
                      Show Credential
                    </Link>
                  </Button>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
