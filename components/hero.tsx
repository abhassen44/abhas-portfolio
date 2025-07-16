"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Github, Linkedin, Mail, Sparkles } from "lucide-react"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.fromTo(titleRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" })
        .fromTo(
          subtitleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.5",
        )
        .fromTo(ctaRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.3")

      // Floating animation
      gsap.to(heroRef.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />

      <div ref={heroRef} className="text-center max-w-5xl mx-auto px-6 relative z-10">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 bg-background/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8">
          <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse" />
          <span className="text-sm text-muted-foreground font-medium">Available for opportunities</span>
        </div>

        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent leading-tight"
        >
          Abhas Sen
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Full Stack Developer & AI Enthusiast crafting innovative solutions with modern technologies
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={() => {
              const projectsSection = document.getElementById("projects")
              if (projectsSection) {
                const offset = 80
                const elementPosition = projectsSection.offsetTop - offset
                window.scrollTo({
                  top: elementPosition,
                  behavior: "smooth",
                })
              }
            }}
            className="group relative bg-gradient-to-r from-primary to-secondary rounded-full px-8 py-4 text-primary-foreground font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              View My Work
            </span>
          </button>

          <button className="bg-background/50 backdrop-blur-sm border border-border rounded-full px-8 py-4 text-foreground/80 hover:bg-background/80 hover:border-border/50 transition-all duration-300">
            Download Resume
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16">
          {[
            { icon: Github, href: "https://github.com/abhassen44", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/abhas", label: "LinkedIn" },
            { icon: Mail, href: "mailto:abhassen44@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 bg-background/50 backdrop-blur-sm border border-border rounded-full flex items-center justify-center text-muted-foreground hover:bg-background/80 hover:border-border/50 hover:text-foreground transition-all duration-300"
            >
              <Icon className="h-5 w-5" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border border-border rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-primary to-secondary rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
