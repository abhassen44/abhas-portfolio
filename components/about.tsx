"use client"

import { GraduationCap, MapPin, Calendar } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="inline-flex items-center gap-2 bg-background/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium">About Me</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 pb-2 bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent">
            Crafting Digital Excellence
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
            Passionate computer science student with expertise in full-stack development and AI technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="reveal space-y-6">
            <div className="space-y-4">
              <p className="text-foreground/80 text-lg leading-relaxed">
                I'm a Computer Science Engineering student at IIIT Guwahati with a passion for creating innovative
                solutions using modern web technologies and artificial intelligence.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed">
                My journey in tech has led me to work on diverse projects ranging from AI-powered applications to
                full-stack web development, always pushing the boundaries of what's possible.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-background/50 backdrop-blur-sm border border-border rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  250+
                </div>
                <div className="text-muted-foreground text-sm">Problems Solved</div>
              </div>
              <div className="bg-background/50 backdrop-blur-sm border border-border rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  15+
                </div>
                <div className="text-muted-foreground text-sm">Projects Built</div>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="reveal space-y-6">
            {[
              {
                icon: GraduationCap,
                title: "Education",
                subtitle: "BTech in Computer Science",
                description: "IIIT Guwahati (2023-2027)",
                gradient: "from-primary/20 to-secondary/20",
                iconColor: "text-primary",
              },
              {
                icon: MapPin,
                title: "Location",
                subtitle: "Jabalpur, India",
                description: "Open to remote opportunities",
                gradient: "from-secondary/20 to-accent/20",
                iconColor: "text-secondary",
              },
              {
                icon: Calendar,
                title: "Experience",
                subtitle: "Buildspace Intern",
                description: "June - July 2024",
                gradient: "from-accent/20 to-primary/20",
                iconColor: "text-accent",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="group relative bg-background/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-border/50 transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
                />
                <div className="relative z-10 flex items-center space-x-4">
                  <div className="p-3 bg-background/50 backdrop-blur-sm rounded-xl group-hover:bg-background/80 transition-colors duration-300">
                    <card.icon className={`h-6 w-6 ${card.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{card.title}</h3>
                    <p className="text-foreground/80">{card.subtitle}</p>
                    <p className="text-muted-foreground text-sm">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
