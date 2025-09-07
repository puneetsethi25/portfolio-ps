import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

function getYearDifference(startYear = 2011) {
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
}

const Hero = () => {
  return (
    <section id="home" className="py-20 md:py-32">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary">
            Puneet Sethi
          </h1>
          <p className="mt-2 text-xl md:text-2xl text-muted-foreground font-medium">
            Technical Lead & Full Stack Developer
          </p>
          <p className="mt-6 max-w-xl text-lg text-foreground/80">
          As a Tech Lead and seasoned Full-Stack Developer, I offer a rich tapestry of experience spanning over {getYearDifference()} years. My journey in the tech world has been marked by a dedication to excellence and innovation. Holding the esteemed AWS Certified Developer Associate certification, I've been a driving force behind the success of global applications. My passion for technology, combined with a knack for leadership, has consistently delivered results and fostered an environment of continuous learning and growth.
          </p>
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <Button size="lg" asChild>
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#projects">
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
          <Image
            src="https://media.licdn.com/dms/image/v2/D5603AQHhjryRFRXG-Q/profile-displayphoto-crop_800_800/B56ZkN3pcxHcAI-/0/1756874317269?e=1759968000&v=beta&t=IVopOiSwvfM9ppaZr6YPxOtVcBwlyEXbbQuvszvzVBw"
            alt="Puneet Sethi"
            width={400}
            height={400}
            data-ai-hint="profile picture"
            className="rounded-full object-cover border-4 border-primary/20 shadow-lg"
            priority
          />
           <div className="absolute inset-0 rounded-full border-4 border-primary animate-pulse opacity-20"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
