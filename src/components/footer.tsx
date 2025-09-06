import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-secondary-foreground mb-4 md:mb-0">
          © {new Date().getFullYear()} Devfolio Pro. All rights reserved.
        </p>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com" target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;