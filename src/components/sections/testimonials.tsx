import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';

const testimonials = [
  {
    quote: "Puneet worked on many aspects of our app, and was a pleasure to work with. Will definately rehire as we need more work done",
    author: "Mark Vernon",
    title: "CEO, Tagcash Ltd.",
    avatar: "https://picsum.photos/100/100?random=4"
  },
  {
    quote: "Loved working with Puneet for my Squarespace sales page. He did great work, helped me with implementation, great communication and delivered as promised. Will definitely work with Puneet again.",
    author: "Alli Elmunzer",
    title: "Founder, Influencer Legal",
    avatar: "https://picsum.photos/100/100?random=5"
  },
  {
    quote: "Puneet is an outstanding Lead Development Engineer with exceptional technical expertise and leadership skills. He successfully led cross-functional teams, architected scalable solutions, and delivered complex projects ahead of schedule. A true asset to any organization.",
    author: "Tarun Jangra",
    title: "CEO, Ginvoicing Solutions Pvt. Ltd.",
    avatar: "https://picsum.photos/100/100?random=6"
  },
  {
    quote: "Well I really liked working with Puneet. He is very smart and know exactly what he is doing. He takes initiatives and he is able to challenge you when your requirements are not clear enough or going to a wrong direction.",
    author: "Yves Yota Tchoffo",
    title: "Founder, Lepoids Cliche",
    avatar: "https://picsum.photos/100/100?random=6"
  },  
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Others <span className="text-primary">Say</span>
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/1">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center text-center p-8">
                      <p className="text-lg italic text-foreground/80 mb-6">"{testimonial.quote}"</p>
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        width={80}
                        height={80}
                        data-ai-hint="person headshot"
                        className="rounded-full mb-4 border-2 border-primary"
                      />
                      <p className="font-semibold text-lg">{testimonial.author}</p>
                      <p className="text-muted-foreground">{testimonial.title}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
