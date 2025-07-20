"use client"

import { Code, Globe, Database, Brain, Wrench, Trophy, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"


const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "Python", "C++", "C", "Java"],
    gradient: "from-primary/20 to-secondary/20",
    accent: "from-primary to-secondary",
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["React.js", "Next.js", "Express.js", "HTML", "CSS", "Tailwind CSS", "ShadCN"],
    gradient: "from-secondary/20 to-primary/20",
    accent: "from-secondary to-primary",
  },
  {
    title: "Database & Tools",
    icon: Database,
    skills: ["MongoDB Atlas", "Git", "GitHub", "VS Code", "Vercel", "Render"],
    gradient: "from-primary/20 to-secondary/20",
    accent: "from-primary to-secondary",
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: ["LangChain", "LangGraph", "RAG", "Fine-Tuning", "Neo4j", "Qdrant"],
    gradient: "from-primary/20 to-secondary/20",
    accent: "from-primary to-secondary",
  },
  {
    title: "Other Technologies",
    icon: Wrench,
    skills: ["REST APIs", "JWT Auth", "GSAP", "Responsive UI", "AI API Integration"],
    gradient: "from-secondary/20 to-primary/20",
    accent: "from-secondary to-primary",
  },
]

export default function Skills() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e : MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    setIsLoaded(true)

    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-20 transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-pulse" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <div className="w-full h-full animate-ping" />
          </div>
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header with Magnetic Effect */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="inline-flex items-center gap-3 bg-background/50 backdrop-blur-xl border border-border rounded-full px-6 py-3 mb-8 hover:bg-background/80 hover:border-border/50 transition-all duration-300 group">
            <div className="relative">
              <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse" />
              <div className="absolute inset-0 w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-ping opacity-75" />
            </div>
            <span className="text-sm text-muted-foreground font-medium tracking-wide group-hover:text-foreground/80 transition-colors duration-300">
              Technical Expertise
            </span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black mb-8 leading-none">
            <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent ">
              Skills &
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </div>

        {/* Skills Grid with Staggered Animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`group transform transition-all duration-700 hover:scale-105 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-full bg-background/50 backdrop-blur-xl border border-border rounded-3xl p-8 hover:border-border/50 hover:shadow-2xl hover:shadow-primary/25 transition-all duration-500 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/3 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shimmer" />
                </div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="relative p-4 bg-background/50 backdrop-blur-sm rounded-2xl group-hover:bg-background/80 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                      <category.icon className="h-7 w-7 text-foreground" />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills with Hover Effects */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-background/50 backdrop-blur-sm border border-border rounded-xl text-foreground/80 text-sm hover:bg-gradient-to-r hover:from-primary/20 hover:to-secondary/20 hover:border-primary/50 hover:text-foreground hover:scale-105 transition-all duration-300 cursor-pointer"
                        style={{ 
                          animationDelay: `${skillIndex * 100}ms`,
                          animation: isLoaded ? 'fadeInUp 0.5s ease-out forwards' : 'none'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Card with Enhanced Design */}
        <div className={`group transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="relative bg-background/50 backdrop-blur-xl border border-border rounded-3xl p-12 hover:border-border/50 hover:shadow-2xl hover:shadow-primary/25 transition-all duration-500 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            
            {/* Floating Elements */}
            <div className="absolute top-8 right-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
              <div className="w-32 h-32 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl animate-pulse" />
            </div>

            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="relative p-6 bg-background/50 backdrop-blur-sm rounded-3xl group-hover:bg-background/80 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <Trophy className="h-10 w-10 text-primary" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <Sparkles className="h-8 w-8 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-12" />
              </div>

              <h3 className="text-4xl font-black text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                Problem Solving Excellence
              </h3>

              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="text-7xl font-black bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  250+
                </span>
                <span className="text-muted-foreground text-xl max-w-xs">problems solved on LeetCode</span>
              </div>

              <p className="text-muted-foreground text-lg max-w-md mx-auto leading-relaxed">
                Continuously improving algorithmic thinking and data structure knowledge through consistent practice
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  )
}