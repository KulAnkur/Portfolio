import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '../assets/ankur-profile.jpeg';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/src/assets/Ankur_Resume_software.pdf';
    link.download = 'Ankur_Kulkarni_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-fadeInUp">
            <div className="relative inline-block">
              <img
                src={profileImage}
                alt="Ankur Kulkarni"
                className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full object-cover mx-auto shadow-2xl ring-4 ring-primary/20"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="mb-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h1 className="hero-title font-poppins font-bold text-foreground mb-4">
              Hi, I'm{' '}
              <span className="text-gradient">Ankur</span>
            </h1>
            <p className="hero-subtitle font-inter text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A full-stack software engineer building{' '}
              <span className="text-primary font-semibold">AI & automation systems</span>
            </p>
          </div>

          {/* Subtitle */}
          <div className="mb-8 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg font-inter text-muted-foreground max-w-2xl mx-auto">
              USC Computer Science Master's student passionate about creating impactful software solutions 
              that bridge the gap between complex technology and real-world problems.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <Button
              onClick={downloadResume}
              size="lg"
              className="font-inter font-medium px-8 py-3 text-base"
            >
              <Download className="mr-2 h-4 w-4" />
              View Resume
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="font-inter font-medium px-8 py-3 text-base"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </Button>
          </div>

          {/* Tech Stack Preview */}
          <div className="mb-12 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            <p className="text-sm font-inter text-muted-foreground mb-4 uppercase tracking-wider">
              Technologies I work with
            </p>
            <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
              {[
                { name: 'React', color: '#61DAFB' },
                { name: 'Node.js', color: '#339933' },
                { name: 'Python', color: '#3776AB' },
                { name: 'TypeScript', color: '#3178C6' },
                { name: 'AWS', color: '#FF9900' },
                { name: 'MongoDB', color: '#47A248' }
              ].map((tech, index) => (
                <div
                  key={tech.name}
                  className="tech-icon flex items-center space-x-2 px-3 py-2 rounded-full bg-card border border-border"
                  style={{ animationDelay: `${1 + index * 0.1}s` }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: tech.color }}
                  ></div>
                  <span className="text-sm font-inter font-medium text-foreground">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-fadeInUp" style={{ animationDelay: '1.2s' }}>
            <button
              onClick={() => scrollToSection('about')}
              className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group"
            >
              <span className="text-sm font-inter mb-2">Scroll to explore</span>
              <ArrowDown className="h-5 w-5 animate-bounce group-hover:text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

