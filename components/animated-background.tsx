"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { useTheme } from "@/components/theme-provider"

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement[]>([])
  const { theme } = useTheme()

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Clear existing particles
    particlesRef.current.forEach((particle) => particle.remove())
    particlesRef.current = []

    // Create floating particles
    const createParticles = () => {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div")
        particle.className = "absolute w-1 h-1 bg-foreground/20 rounded-full"
        particle.style.left = Math.random() * 100 + "%"
        particle.style.top = Math.random() * 100 + "%"
        container.appendChild(particle)
        particlesRef.current.push(particle)
      }
    }

    createParticles()

    // Animate particles
    const ctx = gsap.context(() => {
      particlesRef.current.forEach((particle, index) => {
        gsap.set(particle, {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        })

        gsap.to(particle, {
          y: -window.innerHeight - 100,
          duration: 15 + Math.random() * 10,
          repeat: -1,
          ease: "none",
          delay: Math.random() * 5,
        })

        gsap.to(particle, {
          x: `+=${Math.sin(index) * 50}`,
          duration: 8 + Math.random() * 4,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        })
      })
    })

    return () => {
      ctx.revert()
      particlesRef.current.forEach((particle) => {
        particle.remove()
      })
      particlesRef.current = []
    }
  }, [theme])

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden">
      {/* Main gradient background - theme aware */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />

      {/* Animated gradient overlays - theme aware */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 animate-pulse" />

      {/* Large blur effects - theme aware */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" />

      {/* Grid overlay - theme aware */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  )
}
