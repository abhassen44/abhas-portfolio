import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Abhas Sen - Full Stack Developer & AI Enthusiast",
  description:
    "Portfolio of Abhas Sen - Computer Science student at IIIT Guwahati specializing in full-stack development and AI technologies",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark" storageKey="abhas-portfolio-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
