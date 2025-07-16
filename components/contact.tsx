"use client"

import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Send, ArrowUpRight } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "abhassen44@gmail.com",
    href: "mailto:abhassen44@gmail.com",
    gradient: "from-primary/20 to-secondary/20",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9826505141",
    href: "tel:+919826505141",
    gradient: "from-secondary/20 to-accent/20",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jabalpur, India",
    href: "#",
    gradient: "from-accent/20 to-primary/20",
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/abhassen44",
    gradient: "from-muted/20 to-muted-foreground/20",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/abhas",
    gradient: "from-primary/20 to-secondary/20",
  },
  {
    icon: ExternalLink,
    label: "LeetCode",
    href: "https://leetcode.com/abhas",
    gradient: "from-secondary/20 to-accent/20",
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
      <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="inline-flex items-center gap-2 bg-background/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium">Let's Connect</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="reveal space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full" />
              Contact Information
            </h3>

            {contactInfo.map((item, index) => (
              <div key={index} className="group">
                <a
                  href={item.href}
                  className="block relative bg-gradient-to-br from-background/50 to-background/20 backdrop-blur-md border border-border rounded-2xl p-6 hover:border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                  />

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-background/50 backdrop-blur-sm rounded-xl group-hover:bg-background/80 transition-colors duration-300">
                        <item.icon className="h-6 w-6 text-foreground" />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">{item.label}</p>
                        <p className="text-foreground font-medium">{item.value}</p>
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Social Links & CTA */}
          <div className="reveal space-y-8">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-secondary to-accent rounded-full" />
              Connect With Me
            </h3>

            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <div key={index} className="group">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative bg-gradient-to-br from-background/50 to-background/20 backdrop-blur-md border border-border rounded-2xl p-4 hover:border-border/50 hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500"
                  >
                    {/* Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                    />

                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <link.icon className="h-5 w-5 text-foreground/80" />
                        <span className="text-foreground font-medium">{link.label}</span>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* CTA Card */}
            <div className="group relative bg-gradient-to-br from-background/50 to-background/20 backdrop-blur-md border border-border rounded-3xl p-8 hover:border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 mt-8">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

              <div className="relative z-10 text-center">
                <h4 className="text-2xl font-bold text-foreground mb-4">Let's Build Something Amazing</h4>
                <p className="text-foreground/80 mb-6">
                  Whether you have a project in mind or just want to connect, I'd love to hear from you!
                </p>
                <a
                  href="mailto:abhassen44@gmail.com"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary rounded-full px-8 py-4 text-primary-foreground font-medium hover:shadow-2xl hover:shadow-primary/25 hover:scale-105 transition-all duration-300"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
