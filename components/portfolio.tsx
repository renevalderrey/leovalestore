"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    src: "/elegant-woman-with-beautiful-blonde-balayage-hair-.jpg",
    alt: "Balayage rubio elegante",
    category: "Coloración",
  },
  {
    id: 2,
    src: "/sophisticated-woman-with-sleek-dark-bob-haircut-pr.jpg",
    alt: "Bob oscuro sofisticado",
    category: "Corte",
  },
  {
    id: 3,
    src: "/bride-with-elegant-updo-hairstyle-wedding-hair.jpg",
    alt: "Recogido nupcial",
    category: "Evento",
  },
  {
    id: 4,
    src: "/woman-with-rich-copper-red-hair-color-professional.jpg",
    alt: "Coloración cobriza",
    category: "Coloración",
  },
  {
    id: 5,
    src: "/glamorous-woman-with-voluminous-curly-hair-styling.jpg",
    alt: "Ondas glamurosas",
    category: "Peinado",
  },
  {
    id: 6,
    src: "/woman-with-modern-pixie-cut-short-hair-professiona.jpg",
    alt: "Pixie moderno",
    category: "Corte",
  },
]

export function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<(typeof portfolioItems)[0] | null>(null)

  return (
    <section id="portafolio" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Portafolio</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            Mis mejores <span className="italic">trabajos</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Una selección curada de transformaciones que reflejan mi pasión por la belleza y la atención al detalle.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {portfolioItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
            >
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs tracking-widest uppercase text-card mb-2">{item.category}</span>
                <span className="text-lg text-card font-medium">Ver más</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-card hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Cerrar"
          >
            <X size={32} />
          </button>
          <div className="relative w-full max-w-3xl aspect-[3/4]">
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <span className="text-xs tracking-widest uppercase text-card/70 block mb-1">{selectedImage.category}</span>
            <span className="text-lg text-card">{selectedImage.alt}</span>
          </div>
        </div>
      )}
    </section>
  )
}
