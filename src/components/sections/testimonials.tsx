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
    quote: "Alex is a phenomenal developer and leader. Their ability to tackle complex architectural challenges and deliver high-quality code is unmatched. A true asset to any team.",
    author: "Jane Doe",
    title: "CEO, Innovate Inc.",
    avatar: "https://picsum.photos/100/100?random=4"
  },
  {
    quote: "Working with Alex was a pleasure. Their expertise in full-stack development was instrumental in launching our product on time and on budget. Highly recommended!",
    author: "John Smith",
    title: "Product Manager, Tech Solutions Co.",
    avatar: "https://picsum.photos/100/100?random=5"
  },
  {
    quote: "Their technical skills are top-notch, but what truly sets Alex apart is their communication and collaborative spirit. They elevate the entire team.",
    author: "Emily White",
    title: "Lead Designer, Digital Creations",
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
