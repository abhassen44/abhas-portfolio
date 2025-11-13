"use client"

import { useEffect, useRef, useState } from "react"
import { Github, Linkedin, Mail, Sparkles } from "lucide-react"

// Text Animation Components inspired by reactbits.dev
const AnimatedText = ({ text, className = "", delay = 0 } : { text: any, className?: string, delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className={`overflow-hidden ${className}`}>
      <div 
        className={`transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        {text}
      </div>
    </div>
  )
}

const TypewriterText = ({ text, className = "", delay = 0, speed = 50 } : { text: any, className?: string, delay?: number, speed?: number }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [startTyping, setStartTyping] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStartTyping(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!startTyping) return

    let index = 0
    const timer = setInterval(() => {
      setDisplayedText(text.slice(0, index))
      index++
      if (index > text.length) {
        clearInterval(timer)
      }
    }, speed)

    return () => clearInterval(timer)
  }, [text, speed, startTyping])

  return <span className={className}>{displayedText}</span>
}

const FadeInWords = ({ text, className = "", delay = 0 }: { text: string, className?: string, delay?: number }) => {
  const [visibleWords, setVisibleWords] = useState(0)
  const words = text.split(' ')

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleWords(prev => {
          if (prev < words.length) {
            return prev + 1
          }
          clearInterval(interval)
          return prev
        })
      }, 200)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timer)
  }, [words.length, delay])

  return (
    <div className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-500 ease-out mr-2 ${
            index < visibleWords 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
        >
          {word}
        </span>
      ))}
    </div>
  )
}

export default function Hero() {
  const photoRef = useRef<HTMLDivElement|null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && photoRef.current) {
          photoRef.current.classList.add('animate-float')
        }
      },
      { threshold: 0.5 }
    )

    if (photoRef.current) {
      observer.observe(photoRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = 'https://drive.google.com/file/d/1E53IOR0PQYDpEFQpr4BuqdbNRqjb2CbB/view?usp=sharing'
    link.download = 'Abhas_Sen_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(-5px) rotate(-1deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
      
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        
        {/* Animated background particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left lg:pr-12">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-background/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground font-medium">Available for opportunities</span>
            </div>

            {/* Main Title with Slide Up Animation */}
            <AnimatedText
              text={
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent leading-tight">
                  Abhas Sen
                </h1>
              }
              delay={300}
            />

            {/* Typewriter Subtitle */}
            <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-16 flex items-center">
              <TypewriterText
                text="Full Stack Developer & AI Enthusiast"
                className="font-medium"
                delay={1500}
                speed={80}
              />
            </div>

            {/* Fade in words description */}
            <FadeInWords
              text="Crafting innovative solutions with modern technologies, creating seamless user experiences and robust backend systems."
              className="text-lg text-muted-foreground/80 mb-12 leading-relaxed max-w-2xl"
              delay={3000}
            />

            {/* CTA Buttons with delayed animation */}
            <AnimatedText
              text={
                <div className="flex flex-col sm:flex-row gap-9 mb-16 m-8">
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
                   className="group relative bg-gradient-to-r from-blue-500 to-purple-600 rounded-full px-8 py-4 text-white font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105"
                  >
                   <div className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-purple-600/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      View My Work
                    </span>
                  </button>

                  <button onClick={() => downloadResume()} className="bg-background/50 backdrop-blur-sm border border-border rounded-full px-8 py-4 text-foreground/80 hover:bg-background/80 hover:border-border/50 transition-all duration-300">
                    Download Resume
                  </button>
                </div>
              }
              delay={4000}
            />

            {/* Social Links */}
            <AnimatedText
              text={
                <div className="flex space-x-6">
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
              }
              delay={4500}
            />
          </div>

          {/* Right Column - Photo */}
          <div className="flex justify-center lg:justify-end">
            <div 
              ref={photoRef}
              className="relative group"
            >
              {/* Glow effect behind photo */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 transform scale-110"></div>
              
              {/* Photo container */}
              <div className="relative w-80 h-96 md:w-96 md:h-[500px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl border border-border backdrop-blur-sm overflow-hidden group-hover:border-border/80 transition-all duration-500">
                {/* Placeholder for photo - replace with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-muted/30 to-muted/20 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                     <div className="relative w-80 h-96 md:w-96 md:h-[500px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl border border-border backdrop-blur-sm overflow-hidden group-hover:border-border/80 transition-all duration-500">
                         <img
                              src="/abhassen.jpeg"
                              alt="Profile"
                              className="w-full h-full object-cover"
                            />
                        </div>
                    
                  </div>
                </div>
                
                {/* Overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border border-border rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-primary to-secondary rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>
    </>
  )
}
