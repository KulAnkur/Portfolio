import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-4 w-4" />,
      href: "https://github.com/KulAnkur",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="h-4 w-4" />,
      href: "https://www.linkedin.com/in/ankurkul95/",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="h-4 w-4" />,
      href: "mailto:ankurpar@usc.edu",
      label: "Email"
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="mb-4">
                <h3 className="font-poppins font-bold text-2xl text-gradient">
                  Ankur Kulkarni
                </h3>
                <p className="font-inter text-muted-foreground mt-2">
                  Full-Stack Software Engineer
                </p>
              </div>
              <p className="font-inter text-muted-foreground leading-relaxed mb-6 max-w-md">
                Building impactful AI & automation systems. Currently pursuing Master's in Computer Science 
                at USC while creating solutions that bridge technology and real-world problems.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-poppins font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="font-inter text-muted-foreground hover:text-primary transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-poppins font-semibold text-foreground mb-4">
                Get in Touch
              </h4>
              <div className="space-y-2 font-inter text-muted-foreground">
                <p>Los Angeles, CA</p>
                <a 
                  href="mailto:ankurpar@usc.edu"
                  className="block hover:text-primary transition-colors"
                >
                  ankurpar@usc.edu
                </a>
                <a 
                  href="tel:+12136817805"
                  className="block hover:text-primary transition-colors"
                >
                  213-681-7805
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 font-inter text-muted-foreground">
              <span>© {currentYear} Ankur Kulkarni</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <span>Built with</span>
                <Heart className="h-4 w-4 text-red-500" />
                <span>using React + Tailwind</span>
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/KulAnkur"
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                View Source Code
              </a>
              <Button
                onClick={scrollToTop}
                variant="ghost"
                size="sm"
                className="font-inter"
              >
                <ArrowUp className="h-4 w-4 mr-1" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

