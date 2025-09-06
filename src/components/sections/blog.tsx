import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "Mastering Server Components in Next.js 14",
    excerpt: "A deep dive into the paradigm shift of React Server Components and how to leverage them for maximum performance in your Next.js applications.",
    image: "https://picsum.photos/600/400?random=7",
    date: "July 15, 2024",
    slug: "/blog/mastering-server-components",
    aiHint: "code screen"
  },
  {
    title: "The Art of State Management in Large-Scale React Apps",
    excerpt: "Comparing and contrasting popular state management libraries like Redux, Zustand, and Jotai, and when to use each for optimal scalability.",
    image: "https://picsum.photos/600/400?random=8",
    date: "June 28, 2024",
    slug: "/blog/state-management",
    aiHint: "abstract flowchart"
  },
  {
    title: "From Monolith to Microservices: A Developer's Journey",
    excerpt: "An experience report on migrating a large monolithic application to a microservices architecture, covering the challenges and rewards.",
    image: "https://picsum.photos/600/400?random=9",
    date: "May 10, 2024",
    slug: "/blog/monolith-to-microservices",
    aiHint: "server room"
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 md:py-24 bg-secondary">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          From My <span className="text-primary">Blog</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <CardHeader className="p-0">
                 <Image src={post.image} alt={post.title} width={600} height={400} data-ai-hint={post.aiHint} className="object-cover" />
              </CardHeader>
              <CardContent className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                <CardTitle className="mb-2 flex-grow">{post.title}</CardTitle>
                <CardDescription className="mb-4">{post.excerpt}</CardDescription>
                <div className="mt-auto">
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link href={post.slug}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
