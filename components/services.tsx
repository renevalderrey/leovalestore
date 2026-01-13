import { Sparkles, Palette, Crown, Gem, Wand2, HandMetal, Eraser } from "lucide-react"

const categories = [
  {
    icon: Eraser,
    title: "Remoción",
    description: "Detalles que marcan la diferencia",
    items: [
      { name: "Semi", price: "$6000" },
      { name: "Kapping", price: "$8000" },
      { name: "Soft Gel", price: "$9000" },
      { name: "Esculpidas", price: "$10000" },
    ],
  },
  {
    icon: HandMetal, // Using HandMetal as a placeholder for "Hands/Nails" vibe or Palette
    title: "Uñas (Liso)",
    description: "Elegancia y simplicidad",
    items: [
      { name: "Kapping (liso)", price: "$20000" },
      { name: "Soft Gel (liso)", price: "$25000" },
      { name: "Semipermanente (liso)", price: "$18000" },
    ],
  },
  {
    icon: Palette,
    title: "Adicionales",
    description: "El toque final perfecto",
    items: [
      { name: "French / Aurora", price: "$6000" },
      { name: "Baby Boomer", price: "$7000" },
      { name: "Ojo de Gato", price: "$5000" },
      { name: "Strass x5", price: "$2000" },
      { name: "Nail Art × 2 uñas", price: "$5000" },
      { name: "Full Nail Art", price: "$13000" },
    ],
  },
  {
    icon: Wand2,
    title: "Reparaciones",
    description: "Cuidado experto para tus uñas",
    items: [
      { name: "Arreglo x uña Soft Gel", price: "$4000" },
      { name: "Arreglo x uña Poligel", price: "$6000" },
    ],
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Servicios</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-card-foreground mb-6">
            Menú de <span className="italic">Servicios</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Descubre nuestra selección exclusiva de tratamientos y diseños para tus uñas.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group p-8 md:p-10 border border-border bg-background hover:border-accent transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-accent/10 rounded-full">
                  <category.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-foreground">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center justify-between border-b border-border/50 pb-3 last:border-0 last:pb-0 hover:pl-2 transition-all">
                    <span className="text-foreground/90 font-light">{item.name}</span>
                    <span className="text-lg font-medium text-foreground">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">¿Tienes alguna duda sobre nuestros servicios?</p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-foreground border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  )
}
