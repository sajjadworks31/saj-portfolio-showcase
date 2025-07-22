import { Mail, MessageCircle, Download, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "sajjad.hussain@example.com",
      action: "mailto:sajjad.hussain@example.com",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Phone,
      title: "Phone",
      description: "+92 300 1234567",
      action: "tel:+923001234567",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Lahore, Pakistan",
      action: "#",
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/sajjadhussain",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/sajjadhussain",
      color: "hover:text-blue-600"
    },
    {
      icon: Mail,
      name: "Email",
      url: "mailto:sajjad.hussain@example.com",
      color: "hover:text-red-500"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can work together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-8 hover-lift">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Let's Connect</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about Flutter development. Whether you have a 
                project in mind or want to collaborate, I'd love to hear from you.
              </p>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <a
                      key={method.title}
                      href={method.action}
                      className="flex items-center p-4 glass rounded-lg hover-lift group transition-all duration-300"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium group-hover:text-accent transition-colors">
                          {method.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {method.description}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-6 hover-lift">
              <h4 className="text-lg font-semibold mb-4 gradient-text">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 glass rounded-lg hover-lift group ${social.color} transition-all duration-300`}
                      title={social.name}
                    >
                      <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Action Cards */}
          <div className="space-y-6">
            {/* Quick Message Card */}
            <Card className="glass-card border-0 hover-lift group">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent/20 to-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 gradient-text">Start a Conversation</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Have a project idea or just want to say hello? Send me a message and let's chat!
                  </p>
                </div>
                <Button className="w-full hover-lift group/btn" size="lg">
                  <Mail className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Resume Download Card */}
            <Card className="glass-card border-0 hover-lift group">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Download className="w-8 h-8 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 gradient-text">Download Resume</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Get a detailed overview of my skills, experience, and projects in PDF format.
                  </p>
                </div>
                <Button variant="outline" className="w-full hover-lift group/btn" size="lg">
                  <Download className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform" />
                  Download CV
                </Button>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <div className="glass-card p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium text-green-500">Available for Work</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Currently accepting new projects and opportunities
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-blue/5 rounded-full blur-3xl"></div>
    </section>
  );
};