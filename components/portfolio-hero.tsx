"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Mail, MapPin, Linkedin, Github, Download } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { downloadCV } from "@/app/actions"

const textShadow = {
  textShadow: '0 1px 0 #daddd8, 0 2px 0 #daddd8, 0 3px 0 #daddd8, 0 4px 0 #daddd8, 0 5px 0 #daddd8, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)'
}

export default function PortfolioHero() {
  const [activeSection, setActiveSection] = useState("")
  const [isDownloading, setIsDownloading] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id)
            }
          })
        },
        { threshold: 0.5 }
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  const handleDownloadCV = async () => {
    try {
      setIsDownloading(true)
      const { url, filename } = await downloadCV()

      const link = document.createElement('a')
      link.href = url
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Error downloading CV:', error)
    } finally {
      setIsDownloading(false)
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const NavButton = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = activeSection === href.replace("#", "")

    return (
        <button
            onClick={() => scrollToSection(href.replace("#", ""))}
            className={cn(
                "relative text-sm text-white/80 hover:text-white transition-all duration-300",
                "before:absolute before:inset-0 before:-z-10",
                "before:transform before:transition-transform before:duration-300",
                "hover:before:scale-110",
                "active:before:scale-95",
                "px-6 py-2 rounded-lg",
                "bg-gradient-to-br from-white/10 to-transparent",
                "shadow-[0_0_15px_rgba(255,255,255,0.1)]",
                "hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]",
                "active:shadow-[0_0_10px_rgba(255,255,255,0.1)]",
                isActive && "text-white bg-white/20 shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            )}
        >
          {children}
        </button>
    )
  }

  const SocialButton = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <Button
            variant="outline"
            size="lg"
            className={cn(
                "rounded-xl border-2 border-white text-white",
                "hover:bg-white/10 transform transition-all duration-300",
                "hover:scale-110 active:scale-95",
                "shadow-[0_5px_15px_rgba(255,255,255,0.1)]",
                "hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)]",
                "backdrop-blur-sm",
                "group",
                "bg-gradient-to-r from-[#1c1c1c] to-[#daddd8]",
                "border-opacity-50 hover:border-opacity-100"
            )}
        >
          <Icon className="h-6 w-6 mr-2 group-hover:animate-bounce" />
          {label}
        </Button>
      </Link>
  )

  return (
      <section className="relative">
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#1c1c1c]/80 flex flex-col md:flex-row items-center justify-between p-4 md:p-6 gap-4">
          <Link href="/" className="text-2xl font-bold text-white hover:scale-105 transition-transform">
            Brajesh Kumar
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <NavButton href="#about">About</NavButton>
            <NavButton href="#skills">Skills</NavButton>
            <NavButton href="#projects">Projects</NavButton>
            <NavButton href="#experience">Experience</NavButton>
            <Button
                variant="secondary"
                size="lg"
                onClick={handleDownloadCV}
                disabled={isDownloading}
                className={cn(
                    "bg-white text-[#1c1c1c] hover:bg-white/90",
                    "transform transition-all duration-300",
                    "hover:scale-105 active:scale-95",
                    "shadow-[0_0_20px_rgba(255,255,255,0.2)]",
                    "hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]",
                    "flex items-center gap-2"
                )}
            >
              <Download className={cn(
                  "h-4 w-4",
                  isDownloading && "animate-bounce"
              )} />
              {isDownloading ? "Downloading..." : "Download CV"}
            </Button>
          </div>
        </nav>

        <div className="relative mx-auto max-w-6xl px-6 pt-20">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h1 className={cn(
                  "text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white relative",
                  "transition-all duration-300 hover:scale-105"
              )} style={textShadow}>
                <span className="absolute top-0 left-0 text-[#1c1c1c] transform translate-x-1 translate-y-1">Brajesh Kumar</span>
                <span className="absolute top-0 left-0 text-[#daddd8] transform translate-x-0.5 translate-y-0.5">Brajesh Kumar</span>
                <span className="relative z-10">Brajesh Kumar</span>
                <ArrowUpRight className="inline-block ml-2 h-8 w-8" />
              </h1>
              <p className="text-xl text-white/80 max-w-2xl">
                Software Engineer specializing in MERN Stack Development, Software Architecture, and Artificial Intelligence.
              </p>

              <div className="flex flex-wrap gap-4 text-white/80">
                <Link
                    href="mailto:bk117134@gmail.com"
                    className="flex items-center gap-2 hover:text-white transform transition-all duration-300 hover:scale-105"
                >
                  <Mail className="h-4 w-4" />
                  bk117134@gmail.com
                </Link>
                <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Mathura, Uttar Pradesh
              </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <SocialButton
                    href="https://www.linkedin.com/in/brajesh-kumar-9b58651a8"
                    icon={Linkedin}
                    label="LinkedIn"
                />
                <SocialButton
                    href="https://github.com/Brajesh31"
                    icon={Github}
                    label="GitHub"
                />
              </div>
            </div>
            <div className="relative w-64 h-64 mx-auto md:mx-0">
              <div className="absolute inset-0 rounded-full shadow-[16px_16px_32px_#1a1a1a,-16px_-16px_32px_#242424] transform hover:scale-105 transition-all duration-300 hover:shadow-[20px_20px_40px_#1a1a1a,-20px_-20px_40px_#242424]">
                <Image
                    src="/profile.jpg"
                    alt="Brajesh Kumar - Software Engineer"
                    fill
                    className="object-cover rounded-full"
                    priority
                    sizes="(max-width: 768px) 256px, 256px"
                    style={{
                      transform: 'translateZ(20px)',
                      filter: 'contrast(1.1)'
                    }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}