"use client"

import { useState, useEffect, ReactNode, ElementType } from "react"
import { Github, ExternalLink, Brain, Globe, Star, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Generative AI Projects",
    description:
      "Collection of AI-powered applications including voice-enabled coding assistant, RAG implementation, and fine-tuned LLMs.",
    icon: Brain,
    technologies: ["LangGraph", "RAG", "LLMs", "Python"],
    highlights: ["Voice-enabled coding assistant", "RAG implementation on PDFs"],
    github: "#",
    live: "#",
    gradient: "from-primary/20 via-secondary/20 to-accent/20",
    accent: "from-primary to-secondary",
  },
  {
    title: "Technocrat Club Website",
    description:
      "Official website for IIITG's tech club featuring dynamic landing page with GSAP animations and event management.",
    icon: Globe,
    technologies: ["React", "Tailwind", "MongoDB", "Express"],
    highlights: ["Dynamic GSAP animations", "Event management system"],
    github: "#",
    live: "#",
    gradient: "from-secondary/20 via-accent/20 to-primary/20",
    accent: "from-secondary to-accent",
  },
  {
    title: "NextJS Review App",
    description:
      "AI-integrated review platform with streamlined data handling, real-time generation, and comprehensive authentication.",
    icon: Star,
    technologies: ["Next.js", "TypeScript", "MongoDB", "JWT"],
    highlights: ["AI-powered review generation", "Server actions with routing"],
    github: "#",
    live: "#",
    gradient: "from-accent/20 via-primary/20 to-secondary/20",
    accent: "from-accent to-primary",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with payment integration, inventory management, and advanced analytics dashboard.",
    icon: Star,
    technologies: ["React", "Node.js", "Stripe", "PostgreSQL"],
    highlights: ["Payment gateway integration", "Real-time analytics"],
    github: "#",
    live: "#",
    gradient: "from-primary/20 via-accent/20 to-secondary/20",
    accent: "from-primary to-accent",
  },
  {
    title: "Blockchain DApp",
    description:
      "Decentralized application built on Ethereum with smart contracts for NFT marketplace and token staking.",
    icon: Brain,
    technologies: ["Solidity", "Web3.js", "React", "Hardhat"],
    highlights: ["Smart contract development", "NFT marketplace"],
    github: "#",
    live: "#",
    gradient: "from-secondary/20 via-primary/20 to-accent/20",
    accent: "from-secondary to-primary",
  },
  {
    title: "Mobile Health App",
    description: "Cross-platform health monitoring app with AI-powered symptom analysis and telemedicine integration.",
    icon: Globe,
    technologies: ["React Native", "Firebase", "TensorFlow", "AWS"],
    highlights: ["AI symptom analysis", "Telemedicine integration"],
    github: "#",
    live: "#",
    gradient: "from-accent/20 via-secondary/20 to-primary/20",
    accent: "from-accent to-secondary",
  },
]

interface CardContainerProps {
  children: ReactNode
  className?: string
}
// 3D Card Components
const CardContainer = ({ children, className = "" }: CardContainerProps) => {
  return (
    <div
      className={`py-20 ${className}`}
      style={{
        perspective: "1000px",
      }}
    >
      {children}
    </div>
  )
}


const CardBody = ({ children, className = "" }: CardContainerProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative group/card ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.3s ease-out",
        transform: isHovered ? "rotateY(5deg) rotateX(5deg)" : "rotateY(0deg) rotateX(0deg)",
      }}
    >
      {children}
    </div>
  )
}

interface CardItemProps {
  children: ReactNode
  translateZ?: number
  className?: string
  as?: ElementType
}

const CardItem = ({ children, translateZ = 0, className = "", as: Component = "div" }: CardItemProps) => {
  return (
    <Component
      className={`group-hover/card:shadow-2xl transition-all duration-300 ${className}`}
      style={{
        transform: `translateZ(${translateZ}px)`,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </Component>
  )
}
export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [hoveredCard, setHoveredCard] = useState(null)

  const itemsPerPage = 4
  const totalPages = Math.ceil(projects.length / itemsPerPage)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, totalPages])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <section id="projects" className="py-20 px-6 bg-muted/20 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-3/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent opacity-30" 
           style={{ 
             backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
             backgroundSize: '20px 20px'
           }} />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-background/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6 hover:bg-background/80 transition-all duration-300">
            <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium">Featured Work</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent leading-tight">
            Selected Projects
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences that push boundaries and redefine possibilities
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-all duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((project, index) => (
                      <CardContainer key={index} className="inter-var py-0">
                        <CardBody className="relative h-[400px] w-full">
                          {/* 3D Card with enhanced hover effects */}
                          <CardItem
                            translateZ={20}
                            className="h-full rounded-2xl overflow-hidden bg-gradient-to-br from-background/50 to-background/20 backdrop-blur-md border border-border group-hover/card:border-border/50 group-hover/card:shadow-2xl group-hover/card:shadow-primary/10"
                          >
                            {/* Enhanced Gradient Background */}
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover/card:opacity-100 transition-opacity duration-500`}
                            />

                            {/* Animated Border */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" 
                                 style={{ padding: '1px' }}>
                              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-background/50 to-background/20 backdrop-blur-md" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col p-6">
                              {/* Enhanced Header */}
                              <CardItem translateZ={40} className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                  <CardItem translateZ={60} className="p-2 rounded-lg bg-background/50 backdrop-blur-sm group-hover/card:bg-background/80 group-hover/card:scale-110 transition-all duration-300">
                                    <project.icon className="h-5 w-5 text-foreground" />
                                  </CardItem>
                                  <CardItem translateZ={50} className="opacity-0 group-hover/card:opacity-100 transition-all duration-300 transform group-hover/card:translate-x-1">
                                    <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                                  </CardItem>
                                </div>
                                <div className="flex gap-1">
                                  <div className="w-1 h-1 bg-foreground/40 rounded-full animate-pulse" />
                                  <div className="w-1 h-1 bg-foreground/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                                  <div className="w-1 h-1 bg-foreground/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                                </div>
                              </CardItem>

                              {/* Enhanced Title */}
                              <CardItem translateZ={30} as="h3" className="text-xl font-bold text-foreground mb-3 leading-tight group-hover/card:text-primary transition-colors duration-300">
                                {project.title}
                              </CardItem>

                              {/* Enhanced Description */}
                              <CardItem translateZ={20} as="p" className="text-foreground/80 text-sm leading-relaxed mb-6 flex-grow group-hover/card:text-foreground/90 transition-colors duration-300">
                                {project.description}
                              </CardItem>

                              {/* Enhanced Technologies */}
                              <CardItem translateZ={25} className="mb-4">
                                <div className="flex flex-wrap gap-1">
                                  {project.technologies.map((tech, idx) => (
                                    <span
                                      key={tech}
                                      className="px-2 py-1 bg-background/50 backdrop-blur-sm rounded-md text-xs text-foreground/80 border border-border hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-200"
                                      style={{ animationDelay: `${idx * 0.1}s` }}
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </CardItem>

                              {/* Enhanced Features */}
                              <CardItem translateZ={15} className="mb-6">
                                <div className="space-y-1">
                                  {project.highlights.map((highlight, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground group-hover/card:text-foreground/80 transition-colors duration-300">
                                      <div className="w-1 h-1 bg-foreground/40 rounded-full group-hover/card:bg-primary animate-pulse" 
                                           style={{ animationDelay: `${idx * 0.2}s` }} />
                                      {highlight}
                                    </div>
                                  ))}
                                </div>
                              </CardItem>

                              {/* Enhanced Actions */}
                              <CardItem translateZ={50} className="flex gap-2 mt-auto">
                                <button className="flex-1 bg-background/50 backdrop-blur-sm border border-border rounded-lg py-2 px-3 text-foreground/80 text-sm hover:bg-background/80 hover:border-border/50 hover:scale-105 transition-all duration-200 group-hover/card:hover:bg-primary/10 group-hover/card:hover:border-primary/30">
                                  <Github className="h-3 w-3 mr-1 inline" />
                                  Code
                                </button>
                                <button
                                  className={`flex-1 bg-gradient-to-r ${project.accent} rounded-lg py-2 px-3 text-primary-foreground text-sm hover:shadow-lg hover:scale-105 transition-all duration-200 hover:shadow-primary/20`}
                                >
                                  <ExternalLink className="h-3 w-3 mr-1 inline" />
                                  Live
                                </button>
                              </CardItem>
                            </div>

                            {/* Enhanced Hover Effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                            
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover/card:translate-x-[200%] transition-transform duration-1000" />
                          </CardItem>
                        </CardBody>
                      </CardContainer>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-background/50 backdrop-blur-md border border-border rounded-full flex items-center justify-center text-foreground/80 hover:bg-background/80 hover:border-border/50 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            aria-label="Previous projects"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-background/50 backdrop-blur-md border border-border rounded-full flex items-center justify-center text-foreground/80 hover:bg-background/80 hover:border-border/50 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            aria-label="Next projects"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Enhanced Pagination Dots */}
        <div className="flex justify-center mt-12 gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-8 h-1 rounded-full transition-all duration-300 hover:scale-110 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/20"
                  : "bg-foreground/20 hover:bg-foreground/40"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}