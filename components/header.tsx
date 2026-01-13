"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-semibold tracking-wider text-foreground">
          LEOVALESTORE
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            href="#servicios"
            className="text-sm tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors"
          >
            Servicios
          </Link>
          <Link
            href="#portafolio"
            className="text-sm tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors"
          >
            Portafolio
          </Link>
          <Link
            href="#contacto"
            className="text-sm tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors"
          >
            Contacto
          </Link>
          <Link
            href="#reservar"
            className="px-6 py-2.5 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
          >
            Reservar Cita
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-6">
            <Link
              href="#servicios"
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="#portafolio"
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Portafolio
            </Link>
            <Link
              href="#contacto"
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
            <Link
              href="#reservar"
              className="px-6 py-2.5 bg-primary text-primary-foreground text-sm tracking-widest uppercase text-center hover:bg-primary/90 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Reservar Cita
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
