"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'

import { Button } from "@/components/ui/button"

export default function PortfolioHero() {
  return (
      <div className="min-h-screen bg-[#1c1c1c] text-[#daddd8]"> {/* Changed to dark gray */}
        {/* Navigation */}
        <nav className="flex flex-col md:flex-row items-center justify-between p-4 md:p-6 gap-4">
          <Link href="/" className="text-2xl font-bold">
            Brajesh.
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <Link href="#skills" className="text-sm hover:text-white">
              Skills
            </Link>
            <Link href="#projects" className="text-sm hover:text-white">
              Projects
            </Link>
            <Link href="#experience" className="text-sm hover:text-white">
              Experience
            </Link>
            <Button variant="secondary" size="sm" className="bg-[#daddd8] text-[#1c1c1c] hover:bg-[#daddd8]/90">
              bk117134@gmail.com
            </Button>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="relative mx-auto max-w-6xl px-6 pt-20">
          <div className="grid gap-4">
            <p className="text-xl">👋, my name is Brajesh and I am a passionate</p>
            <div className="relative">
              <h1 className="text-4xl md:text-6xl lg:text-[8rem] font-bold leading-none tracking-tighter text-[#daddd8]">
                Software Engineer
                <ArrowUpRight className="absolute right-4 md:right-20 top-2 md:top-8 h-4 md:h-8 w-4 md:w-8" />
              </h1>
              <div className="relative">
                <h2 className="text-4xl md:text-6xl lg:text-[8rem] font-bold leading-none tracking-tighter text-transparent">
                  & AI Developer
                </h2>
              </div>
            </div>
            <p className="text-xl">based in Mathura, Uttar Pradesh.</p>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button
                  className="rounded-full bg-[#daddd8] px-4 md:px-8 py-4 md:py-6 text-[#1c1c1c] hover:bg-[#daddd8]/90 text-sm md:text-base"
                  size="lg"
              >
                Get in Touch
              </Button>
              <Button
                  variant="outline"
                  className="rounded-full border-[#daddd8] px-4 md:px-8 py-4 md:py-6 text-[#daddd8] hover:bg-[#daddd8]/10 text-sm md:text-base"
                  size="lg"
              >
                View My Work
              </Button>
            </div>

            {/* Background Image */}
            <div className="absolute right-0 top-1/2 -z-10 h-[500px] w-[400px] -translate-y-1/2">
              <Image
                  src="/brajesh.png"
                  alt="A professional headshot of Brajesh Kumar"
                  fill
                  className="object-cover opacity-90"
                  priority
              />
            </div>

            {/* Client Logos */}
            <div className="mt-12 md:mt-20 flex flex-wrap items-center gap-4 md:gap-8">
              <h3 className="text-white/60">Skills & Tools:</h3>
              <div className="flex gap-4">
                <Mail className="h-6 w-6 text-white/60" />
                <MapPin className="h-6 w-6 text-white/60" />
                {/* Add more icons for skills/tools here if needed */}
              </div>
            </div>
          </div>
        </main>
      </div>
  )
}