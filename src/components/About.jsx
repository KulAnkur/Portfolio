import { GraduationCap, Users, Award, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Import technology logos
import reactLogo from '../assets/react-logo.png';
import nodejsLogo from '../assets/nodejs-logo.png';
import pythonLogo from '../assets/python-logo.png';
import javascriptLogo from '../assets/javascript-logo.png';
import typescriptLogo from '../assets/typescript-logo.png';
import angularLogo from '../assets/angular-logo.png';
import awsLogo from '../assets/aws-logo.png';
import mongodbLogo from '../assets/mongodb-logo.png';
import postgresqlLogo from '../assets/postgresql-logo.png';
import dockerLogo from '../assets/docker-logo.png';
import kubernetesLogo from '../assets/kubernetes-logo.png';
import flaskLogo from '../assets/flask-logo.png';
import djangoLogo from '../assets/django-logo.png';
import expressLogo from '../assets/express-logo.png';
import cppLogo from '../assets/cpp-logo.png';
import javaLogo from '../assets/java-logo.png';
import mysqlLogo from '../assets/mysql-logo.png';
import redisLogo from '../assets/redis-logo.png';
import azureLogo from '../assets/azure-logo.png';
import gitLogo from '../assets/git-logo.png';
import html5Logo from '../assets/html5-logo.png';
import postmanLogo from '../assets/postman-logo.png';

const About = () => {
  const techLogos = [
    // Programming Languages
    { name: "Python", logo: pythonLogo },
    { name: "JavaScript", logo: javascriptLogo },
    { name: "TypeScript", logo: typescriptLogo },
    { name: "C++", logo: cppLogo },
    { name: "Java", logo: javaLogo },
    
    // Frontend Technologies
    { name: "React", logo: reactLogo },
    { name: "Angular", logo: angularLogo },
    { name: "HTML5", logo: html5Logo },
    
    // Backend Technologies
    { name: "Node.js", logo: nodejsLogo },
    { name: "Flask", logo: flaskLogo },
    { name: "Express.js", logo: expressLogo },
    { name: "Django", logo: djangoLogo },
    
    // Testing & Automation
    { name: "Postman", logo: postmanLogo },
    
    // Storage Technologies
    { name: "PostgreSQL", logo: postgresqlLogo },
    { name: "MySQL", logo: mysqlLogo },
    { name: "MongoDB", logo: mongodbLogo },
    { name: "Redis", logo: redisLogo },
    
    // Cloud & DevOps
    { name: "AWS", logo: awsLogo },
    { name: "Azure", logo: azureLogo },
    { name: "Docker", logo: dockerLogo },
    { name: "Kubernetes", logo: kubernetesLogo },
    { name: "Git", logo: gitLogo }
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "University of Southern California",
      location: "Los Angeles, California",
      period: "Aug 2024 - May 2026",
      gpa: "3.57/4.0",
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      school: "Thakur College of Engineering and Technology",
      location: "Mumbai, Maharashtra",
      period: "Jul 2020 - Jun 2024",
      gpa: "9.67/10.0",
      icon: <GraduationCap className="h-5 w-5" />
    }
  ];

  const achievements = [
    {
      title: "Technical Head, CSI",
      description: "Led technical operations for events with 200+ attendees, managing participant data and analytics",
      icon: <Users className="h-5 w-5" />
    },
    {
      title: "High Academic Performance",
      description: "Maintained excellent GPAs across both undergraduate (9.67/10) and graduate studies (3.57/4)",
      icon: <Award className="h-5 w-5" />
    },
    {
      title: "Global Experience",
      description: "Successfully transitioned from Mumbai to Los Angeles, adapting to diverse academic and professional environments",
      icon: <MapPin className="h-5 w-5" />
    }
  ];

  const skills = [
    { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "C++", "Java"], level: 90 },
    { category: "Frontend", items: ["React", "Angular", "HTML/CSS", "Tailwind"], level: 85 },
    { category: "Backend", items: ["Node.js", "Flask", "Express.js", "Django"], level: 88 },
    { category: "Cloud & DevOps", items: ["AWS", "Azure", "Docker", "Kubernetes"], level: 82 },
    { category: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"], level: 80 },
    { category: "AI/ML", items: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP"], level: 75 }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-foreground mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg font-inter text-muted-foreground max-w-2xl mx-auto">
            I'm a problem solver, independent thinker, and technophile obsessed with the latest tech. 
            Currently pursuing my Master's at USC while building impactful software solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-poppins font-semibold text-foreground mb-4">
              My Journey
            </h3>
            <div className="space-y-4 text-muted-foreground font-inter">
              <p>
                I've always been fascinated by how technology can solve real-world problems. 
                My journey began in Mumbai, where I discovered my passion for computer engineering 
                and graduated with top honors.
              </p>
              <p>
                Now at USC, I'm diving deeper into AI and machine learning while working on 
                projects that span from IoT energy optimization to automated email systems. 
                I believe in building software that not only works well but makes a meaningful impact.
              </p>
              <p>
                When I'm not coding, you'll find me exploring LA, learning about new technologies, 
                or working on side projects that challenge me to grow as a developer.
              </p>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-poppins font-semibold text-foreground mb-4">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-poppins font-semibold text-foreground mb-1">
                          {edu.degree}
                        </h4>
                        <p className="font-inter text-primary font-medium mb-1">
                          {edu.school}
                        </p>
                        <p className="font-inter text-sm text-muted-foreground mb-2">
                          {edu.location} • {edu.period}
                        </p>
                        <div className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          GPA: {edu.gpa}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-poppins font-semibold text-foreground mb-8 text-center">
            Technical Skills
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 max-w-6xl mx-auto">
            {techLogos.map((tech, index) => (
              <div
                key={index}
                className="group flex flex-col items-center p-4 rounded-lg hover:bg-muted/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 mb-3 flex items-center justify-center">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <span className="text-xs font-inter text-muted-foreground text-center group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-poppins font-semibold text-foreground mb-8 text-center">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-hover text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
                    {achievement.icon}
                  </div>
                  <h4 className="font-poppins font-semibold text-foreground mb-2">
                    {achievement.title}
                  </h4>
                  <p className="font-inter text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

