import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/elegant-luxury-hair-salon-interior-with-soft-light.jpg"
          alt="Interior de salón de belleza de lujo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">Manicurista Premium</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-foreground mb-8 text-balance">
          El arte de la
          <br />
          <span className="italic font-medium">perfección en tus manos</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          La elegancia es una actitud que empieza en tus manos.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="#reservar"
            className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-all"
          >
            Reservar Cita
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#portafolio"
            className="flex items-center gap-3 px-8 py-4 border border-foreground text-foreground text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-all"
          >
            Ver Portafolio
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest uppercase text-muted-foreground">Descubrir</span>
        <div className="w-px h-16 bg-border relative overflow-hidden">
          <div className="w-full h-8 bg-foreground animate-[scroll_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  )
}
