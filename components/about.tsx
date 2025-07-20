"use client"

import { GraduationCap, MapPin, Calendar, Award, Code, Users, Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"

export default function About() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
     
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
      <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-2xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-border rounded-full px-6 py-3 mb-8 shadow-sm">
            <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse" />
            <span className="text-2xl text-muted-foreground font-medium tracking-wide">ABOUT ME</span>
          </div>
          
          <p className="text-muted-foreground text-3xl max-w-3xl mx-auto leading-relaxed">
            Computer Science Engineering student specializing in full-stack development and
            artificial intelligence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Professional Summary */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-foreground/80 text-xl leading-relaxed">
                As a dedicated Computer Science Engineering student at IIIT Guwahati, I combine academic excellence 
                with practical experience in modern software development. My expertise spans full-stack web development, 
                artificial intelligence, and cloud technologies.
              </p>
              <p className="text-foreground/80 text-xl leading-relaxed">
                Through hands-on projects and professional internships, I've developed proficiency in building 
                scalable applications, implementing AI-driven solutions, and collaborating effectively in 
                cross-functional teams. I'm passionate about leveraging technology to solve complex problems 
                and create meaningful user experiences.
              </p>
            </div>

            {/* Key Strengths */}
            <div className="bg-background/60 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-6">Core Competencies</h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Full-Stack Web Development (React, Node.js, Python)",
                  "Machine Learning & AI Implementation",
                  "Database Design & Management",
                  "Cloud Computing & DevOps Practices",
                  "Agile Development Methodologies",
                  "Technical Leadership & Team Collaboration"
                ].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground/80">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Professional Details Cards */}
          <div className="space-y-6">
            {[
              {
                icon: GraduationCap,
                title: "Education",
                subtitle: "BTech Computer Science Engineering",
                description: "Indian Institute of Information Technology, Guwahati",
                period: "2023 - 2027",
                gradient: "from-primary/20 to-secondary/20",
                iconColor: "text-primary",
                iconBg: "bg-primary/10"
              },
              {
                icon: Award,
                title: "Professional Experience",
                subtitle: "Software Development Intern",
                description: "Buildspace - Remote",
                period: "June - July 2024",
                gradient: "from-primary/20 to-accent/20",
                iconColor: "text-primary",
                iconBg: "bg-primary/10"
              },
              {
                icon: Code,
                title: "Technical Focus",
                subtitle: "Full-Stack Development & AI",
                description: "Modern web technologies, machine learning",
                period: "Continuous Learning",
                gradient: "from-accent/20 to-primary/20",
                iconColor: "text-primary",
                iconBg: "bg-primary/10"
              },
              {
                icon: Users,
                title: "Leadership & Impact",
                subtitle: "Project Leadership",
                description: "Leading development teams and technical initiatives",
                period: "Ongoing",
                gradient: "from-primary/20 to-accent/20",
                iconColor: "text-primary",
                iconBg: "bg-primary/10"
              }
            ].map((card, index) => (
              <div
                key={index}
                className="group relative bg-background/70 backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-lg hover:border-border/50 transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
                />
                <div className="relative z-10 flex items-start space-x-4">
                  <div className={`p-3 ${card.iconBg} backdrop-blur-sm rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <card.icon className={`h-6 w-6 ${card.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
                      <span className="text-sm text-muted-foreground font-medium">{card.period}</span>
                    </div>
                    <p className="text-foreground/90 font-medium mb-1">{card.subtitle}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
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