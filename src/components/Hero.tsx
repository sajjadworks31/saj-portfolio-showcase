import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-image.jpg';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-glow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="relative inline-block">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden glass-card p-2 hover-lift">
                <img
                  src={profileImage}
                  alt="Sajjad Hussain"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/20 to-blue/20 animate-pulse-glow"></div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4 mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="gradient-text">Sajjad Hussain</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Flutter App Developer | Frontend Enthusiast
            </p>
          </div>

          {/* Description */}
          <div className="mb-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Crafting beautiful, cross-platform mobile experiences with Flutter. 
              Passionate about clean code, stunning UI/UX, and bringing ideas to life.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <Button size="lg" className="group hover-lift">
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="group hover-lift">
              <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <a
              href="https://github.com/sajjadhussain"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card hover-lift group"
            >
              <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://linkedin.com/in/sajjadhussain"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card hover-lift group"
            >
              <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:sajjad@example.com"
              className="p-3 glass-card hover-lift group"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-gradient-to-b from-accent to-transparent rounded-full"></div>
      </div>
    </section>
  );
};