import { Code, Smartphone, Palette, Zap } from 'lucide-react';

export const About = () => {
  const skills = [
    {
      icon: Smartphone,
      title: "Cross-Platform Development",
      description: "Building beautiful, performant mobile apps that work seamlessly across iOS and Android using Flutter."
    },
    {
      icon: Code,
      title: "Clean Architecture",
      description: "Writing maintainable, scalable code with proper separation of concerns and best practices."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive, user-centered designs that provide exceptional user experiences."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Ensuring apps run smoothly with optimal performance and efficient resource usage."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating exceptional mobile experiences through code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="glass-card p-8 hover-lift">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a passionate Flutter developer with a deep love for creating beautiful, 
                functional mobile applications. My journey in cross-platform development 
                has been driven by the desire to build apps that not only work flawlessly 
                but also provide users with delightful experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in Flutter development, bringing ideas to life through clean 
                code architecture, pixel-perfect designs, and smooth animations. Every 
                project is an opportunity to push boundaries and create something exceptional.
              </p>
            </div>

            {/* Technologies */}
            <div className="glass-card p-6 hover-lift">
              <h4 className="text-lg font-semibold mb-3 gradient-text">Technologies I Love</h4>
              <div className="flex flex-wrap gap-2">
                {['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Figma', 'Git', 'Android Studio', 'VS Code'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full border border-accent/20 hover:bg-accent/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.title}
                  className="glass-card p-6 hover-lift group"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-accent/20 to-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                    {skill.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
    </section>
  );
};