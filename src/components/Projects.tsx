import { ExternalLink, Github, Smartphone, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "DCO Track",
      description: "A comprehensive tracking and management system for District Coordination Office operations. Features real-time tracking, data analytics, and administrative dashboard.",
      icon: Smartphone,
      tech: ["Flutter", "Firebase", "Provider", "Maps API"],
      gradient: "from-blue-500 to-blue-700",
      features: ["Real-time Tracking", "Data Analytics", "Admin Dashboard", "Offline Support"]
    },
    {
      id: 2,
      title: "Islamic App",
      description: "A beautiful Islamic companion app featuring prayer times, Quran recitation, Islamic calendar, and Qibla direction with elegant UI design.",
      icon: Heart,
      tech: ["Flutter", "SQLite", "Location Services", "Audio Player"],
      gradient: "from-emerald-500 to-teal-700",
      features: ["Prayer Times", "Quran Reader", "Qibla Direction", "Islamic Calendar"]
    },
    {
      id: 3,
      title: "E-commerce App",
      description: "Modern e-commerce mobile application with seamless shopping experience, secure payments, order tracking, and inventory management.",
      icon: ShoppingCart,
      tech: ["Flutter", "REST API", "Stripe", "Provider"],
      gradient: "from-purple-500 to-pink-700",
      features: ["Secure Payments", "Order Tracking", "Wishlist", "Push Notifications"]
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of applications I've built with passion and attention to detail
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card
                key={project.id}
                className="glass-card border-0 hover-lift group overflow-hidden"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <CardContent className="p-0">
                  {/* Project Header */}
                  <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    {/* Animated overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>

                  <div className="p-6">
                    {/* Project Title */}
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-accent mb-2">Key Features:</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-1 h-1 bg-accent rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-accent/10 text-accent rounded-md border border-accent/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 group/btn">
                        <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Code
                      </Button>
                      <Button size="sm" className="flex-1 group/btn">
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto hover-lift">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">Have a Project in Mind?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to work on new and challenging projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <Button size="lg" className="hover-lift">
              Start a Project
            </Button>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-blue/5 rounded-full blur-3xl"></div>
    </section>
  );
};