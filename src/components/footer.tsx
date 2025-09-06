import { Github, Linkedin, Twitter, BookOpenCheck } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
    <path d="M25.83,24C24.863,17.781,19.486,13,13,13S1.137,17.781,0.17,24H0v2c0,7.168,5.832,13,13,13s13-5.832,13-13v-2H25.83z"></path><path d="M39.899,24C39.357,18.258,36.525,14,33,14s-6.357,4.258-6.899,10H26v2c0,6.729,3.075,12,7,12s7-5.271,7-12v-2H39.899z"></path><circle cx="13" cy="24" r="12" fill="#fff"></circle><path d="M47.94,24c-0.278-4.638-1.537-9-3.94-9s-3.662,4.362-3.94,9H40v2c0,5.298,1.252,11,4,11s4-5.702,4-11v-2H47.94z"></path><ellipse cx="33" cy="24" fill="#fff" rx="6" ry="11"></ellipse><ellipse cx="44" cy="24" fill="#fff" rx="3" ry="10"></ellipse><path d="M13,37C5.832,37,0,31.168,0,24s5.832-13,13-13s13,5.832,13,13S20.168,37,13,37z M13,13C6.935,13,2,17.935,2,24	s4.935,11,11,11s11-4.935,11-11S19.065,13,13,13z"></path><path d="M33,36c-3.925,0-7-5.271-7-12s3.075-12,7-12s7,5.271,7,12S36.925,36,33,36z M33,14c-2.71,0-5,4.579-5,10s2.29,10,5,10	s5-4.579,5-10S35.71,14,33,14z"></path><path d="M44,35c-2.748,0-4-5.702-4-11s1.252-11,4-11s4,5.702,4,11S46.748,35,44,35z M44,15.003c-0.565,0.201-2,3.198-2,8.997	c0,5.851,1.46,8.85,2.015,9.002C44.54,32.85,46,29.851,46,24C46,18.201,44.565,15.204,44,15.003z"></path>
  </svg>
);

const UpworkIcon = (props: React.SVGProps<SVGSVGElement>) => (
<svg enable-background="new 0 0 2500 2500" viewBox="0 0 2500 2500" xmlns="http://www.w3.org/2000/svg"><path d="m2315.4 0h-2130.7c-102 0-184.7 80.2-184.7 179.1v2141.7c0 99 82.7 179.2 184.7 179.2h2130.7c102 0 184.6-80.3 184.6-179.2v-2141.7c0-98.9-82.6-179.1-184.6-179.1z" fill="#6fda44"/><path d="m1834.6 1453.7c-98.4 0-190.5-41.7-274.3-109.6l20.4-95.8.9-3.5c18.2-102 75.8-273.3 253-273.3 132.9 0 241 108.3 241 241.3-.4 132.6-108.5 240.9-241 240.9zm0-726.7c-226.4 0-401.9 147.3-473.2 389.5-109-163.7-191.4-360.2-239.7-525.7h-243.6v634.8c0 125.1-101.9 227.1-226.9 227.1s-226.8-102-226.8-227.1v-634.8h-243.7v634.8c-.9 260 210.5 473.4 470.1 473.4s471-213.4 471-473.4v-106.5c47.4 98.9 105.4 198.7 175.9 287.5l-149.3 702.7h249.5l108.1-509.7c94.8 60.8 203.8 98.9 328.8 98.9 267.2 0 484.7-219.2 484.7-486.7-.2-267-217.7-484.8-484.9-484.8z" fill="#fff"/></svg>
);


const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto py-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-secondary-foreground mb-4 md:mb-0">
          © {new Date().getFullYear()} Devfolio Pro. All rights reserved.
        </p>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/puneetsethi25" target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.upwork.com/freelancers/~01ef86c5291e9caa2e" target="_blank" aria-label="Upwork">
              <UpworkIcon className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/puneetmsethi/" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://x.com/puneetsethi25" target="_blank" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://medium.com/@puneetsethi25" target="_blank" aria-label="X (formerly Twitter)">
              <XIcon className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;