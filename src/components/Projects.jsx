import { ExternalLink, Github, Zap, Brain, Database, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const featuredProjects = [
    {
      title: "Energy Sense",
      description: "Smart energy optimization system using ESP32 microcontroller and AWS-based machine learning models. Integrated multiple sensors to collect real-time environmental data and provide energy usage predictions.",
      longDescription: "Developed a comprehensive IoT solution that reduces energy consumption by 25% across 10+ appliances. The system uses C++ for microcontroller programming, Python for ML models, and AWS for cloud processing.",
      technologies: ["ESP32", "C++", "Python", "AWS", "Machine Learning", "IoT Sensors"],
      achievements: [
        "25% reduction in energy consumption",
        "30% improvement in energy usage predictions",
        "Real-time monitoring of 4+ sensor types"
      ],
      icon: <Zap className="h-6 w-6" />,
      gradient: "from-yellow-400 to-orange-500",
      github: "#",
      demo: "#"
    },
    {
      title: "Smart Email Responder Workflow",
      description: "Automated email classification and response system using Gemini 2.0 API integrated with Google Cloud Functions. Processes 300+ emails daily with intelligent categorization and context-aware responses.",
      longDescription: "Built a scalable serverless solution that reduces manual email triage workload by 50%. Features real-time processing, automated meeting scheduling, and maintains 99% SLA compliance.",
      technologies: ["Gemini 2.0", "Google Cloud Functions", "Python", "Serverless", "NLP"],
      achievements: [
        "300+ emails processed daily",
        "50% reduction in manual workload",
        "99% SLA compliance maintained"
      ],
      icon: <Brain className="h-6 w-6" />,
      gradient: "from-blue-400 to-purple-500",
      github: "#",
      demo: "#"
    },
    {
      title: "Medical Chatbot Fine-Tuning",
      description: "Fine-tuned Llama-3-8B using Unsloth LoRA on 25k medical dialogues. Created a privacy-preserving inference pipeline for secure, offline handling of sensitive medical queries.",
      longDescription: "Developed a lightweight, locally hosted chatbot suitable for clinical environments. Optimized deployment via Ollama while maintaining strong contextual relevance and response coherence.",
      technologies: ["Llama-3-8B", "Unsloth LoRA", "PyTorch", "Ollama", "Medical NLP"],
      achievements: [
        "25k medical dialogues processed",
        "100% offline operation capability",
        "Privacy-preserving architecture"
      ],
      icon: <Database className="h-6 w-6" />,
      gradient: "from-green-400 to-teal-500",
      github: "#",
      demo: "#"
    },
    {
      title: "Data Storytelling Web Application",
      description: "Component-driven React application with modular routing and reusable UI elements. Features client-side routing, code splitting, and environment-aware asset resolution.",
      longDescription: "Architected a statically-deployable application that enables seamless addition of data visualization projects. Achieved 100% successful production builds and 60% reduction in deployment time.",
      technologies: ["React", "Vite", "Chart.js", "Vercel", "React Router"],
      achievements: [
        "100% successful production builds",
        "60% reduction in deployment time",
        "Modular component architecture"
      ],
      icon: <BarChart3 className="h-6 w-6" />,
      gradient: "from-pink-400 to-red-500",
      github: "#",
      demo: "#"
    }
  ];

  const otherProjects = [
    {
      title: "Unity3D VR Training Platform",
      description: "Immersive technician training platform with GPT-3 NLP integration, reducing training time from 3 days to 20 hours.",
      technologies: ["Unity3D", "VR", "GPT-3", "C#"],
      github: "#"
    },
    {
      title: "Housing Market Analysis Pipeline",
      description: "Built data pipelines using rotating proxies to scrape Zillow across 500+ ZIP codes for post-disaster policy decisions.",
      technologies: ["Python", "Azure Maps", "Data Pipeline", "Geospatial"],
      github: "#"
    },
    {
      title: "Legal Question Answering System",
      description: "Counsel-AI: Legal Question Answering (LQA) system tailored for law with advanced NLP capabilities.",
      technologies: ["Python", "NLP", "Legal Tech", "AI"],
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-foreground mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg font-inter text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects spanning AI/ML, full-stack development, 
            IoT systems, and data visualization.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-20">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="card-hover overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white`}>
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-poppins font-bold text-foreground">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <p className="font-inter text-muted-foreground leading-relaxed">
                      {project.longDescription}
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-poppins font-semibold text-foreground">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {project.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-center space-x-2 font-inter text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="font-inter">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <Button size="sm" className="font-inter">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button size="sm" variant="outline" className="font-inter">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </div>
                  </div>

                  <div className="lg:order-first">
                    <div className={`aspect-video rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                      <div className="text-white text-6xl opacity-20">
                        {project.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-poppins font-semibold text-foreground mb-8 text-center">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <CardTitle className="font-poppins text-lg text-foreground">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-inter text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs font-inter">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Button size="sm" variant="ghost" className="w-full font-inter">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="font-inter text-muted-foreground mb-4">
            Want to see more of my work?
          </p>
          <Button variant="outline" size="lg" className="font-inter">
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

