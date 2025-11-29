"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src="/images/twobeans-logo.png" alt="TwoBeans" width={120} height={60} className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#menu" className="text-foreground hover:text-primary transition-colors font-medium">
              Menu
            </a>
            <a href="#experience" className="text-foreground hover:text-primary transition-colors font-medium">
              Experience
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
            <Button size="lg" className="rounded-full">
              Visit Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-accent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium px-2 py-2">
                About
              </a>
              <a href="#menu" className="text-foreground hover:text-primary transition-colors font-medium px-2 py-2">
                Menu
              </a>
              <a
                href="#experience"
                className="text-foreground hover:text-primary transition-colors font-medium px-2 py-2"
              >
                Experience
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium px-2 py-2">
                Contact
              </a>
              <Button size="lg" className="rounded-full w-full mt-2">
                Visit Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
