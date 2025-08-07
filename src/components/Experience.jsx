import { Calendar, MapPin, Building, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "IT Support Associate",
      company: "USC Information Technology Services (ITS)",
      location: "Los Angeles, California",
      period: "Jan 2025 - Present",
      type: "Current Position",
      description: "Providing Tier 1/2 technical support across classrooms and computer labs, resolving hardware, AV, and network issues while maintaining system uptime.",
      achievements: [
        "Reduced control failures by 35% through PoE-based Crestron system maintenance",
        "Collaborated with ITS engineers on security patch deployment",
        "Maintained high system uptime across university-managed devices"
      ],
      technologies: ["Hardware Support", "Network Troubleshooting", "Crestron Systems", "System Administration"],
      icon: <Building className="h-5 w-5" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Software Engineering Intern",
      company: "GovRecover",
      location: "Miami, Florida",
      period: "Mar 2025 – Aug 2025",
      type: "Internship",
      description: "Collaborated directly with the co-founder to scale GovRecover's backend infrastructure and bring automated unclaimed property support services to Texas state systems.",
      achievements: [
        "Developed modular ETL pipelines enabling seamless ingestion from 20+ states",
        "Deployed and monitored services on Linode using Coolify for streamlined DevOps",
        "Ensured uptime and maintainability across self-hosted deployments"
      ],
      technologies: ["TypeScript", "PostgreSQL", "Linode", "Coolify", "ETL Pipelines"],
      icon: <TrendingUp className="h-5 w-5" />,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Research Assistant",
      company: "USC Marshall School of Business",
      location: "Los Angeles, California",
      period: "Feb 2025 - Present",
      type: "Research",
      description: "Building robust data pipelines to scrape housing data while bypassing IP blocking and handling incomplete geolocation for post-disaster policy decisions in LA.",
      achievements: [
        "Built data pipelines using rotating proxies across 500+ ZIP codes",
        "Enriched 25,000+ fire-affected properties via Azure Maps reverse geocoding",
        "Improved data accuracy by 30% for LA housing recovery stakeholders"
      ],
      technologies: ["Python", "Azure Maps", "Data Scraping", "Geospatial Analysis"],
      icon: <Building className="h-5 w-5" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Software Developer Intern",
      company: "Mahindra Group",
      location: "Mumbai, India",
      period: "Mar 2024 – May 2024",
      type: "Internship",
      description: "Deployed immersive technician training platform using Unity3D + AWS Lambda, tested across VR Oculus, desktop, and mobile environments to ensure consistent experience and stability.",
      achievements: [
        "Reduced technician training time from 3 days to 20 hours using GPT-3 NLP",
        "Created React-Node CMS with AWS S3 bulk uploads, saving 200+ manual hours quarterly",
        "Enhanced QA with Cypress and Playwright, increasing bug detection by 70%"
      ],
      technologies: ["Unity3D", "AWS Lambda", "GPT-3", "React", "Node.js", "Cypress"],
      icon: <Building className="h-5 w-5" />,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { label: "Years of Experience", value: "2+", icon: <Calendar className="h-5 w-5" /> },
    { label: "Projects Completed", value: "15+", icon: <TrendingUp className="h-5 w-5" /> },
    { label: "Technologies Mastered", value: "20+", icon: <Building className="h-5 w-5" /> },
    { label: "Code Commits", value: "500+", icon: <TrendingUp className="h-5 w-5" /> }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-foreground mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg font-inter text-muted-foreground max-w-2xl mx-auto">
            My journey through various roles in software engineering, research, and technical support, 
            building impactful solutions across different domains.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center card-hover">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-3">
                  {stat.icon}
                </div>
                <div className="text-2xl font-poppins font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-inter text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                  <Card className="card-hover overflow-hidden">
                    <div className={`h-1 bg-gradient-to-r ${exp.gradient}`}></div>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${exp.gradient} flex items-center justify-center text-white`}>
                            {exp.icon}
                          </div>
                          <div>
                            <Badge variant="secondary" className="mb-2 font-inter text-xs">
                              {exp.type}
                            </Badge>
                            <h3 className="font-poppins font-bold text-foreground text-lg">
                              {exp.title}
                            </h3>
                            <p className="font-inter text-primary font-medium">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4 font-inter">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <p className="font-inter text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="space-y-3 mb-4">
                        <h4 className="font-poppins font-semibold text-foreground text-sm">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start space-x-2 font-inter text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="font-inter text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="font-inter text-muted-foreground mb-4">
            Interested in working together?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-inter font-medium hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </button>
            <a
              href="/src/assets/Ankur_Resume_software.pdf"
              download="Ankur_Kulkarni_Resume.pdf"
              className="px-6 py-3 border border-border text-foreground rounded-lg font-inter font-medium hover:bg-muted transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

