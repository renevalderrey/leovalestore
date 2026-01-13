"use client"

import { MapPin, Phone, Mail, Instagram } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  })

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault()

    // Construct the message
    const text = `Hola! Me gustaría reservar una cita.%0A%0A*Nombre:* ${formData.name}%0A*Teléfono:* ${formData.phone || "No especificado"}%0A*Email:* ${formData.email || "No especificado"}%0A*Servicio:* ${formData.service}%0A*Mensaje:* ${formData.message || "Sin mensaje adicional"}`

    // Redirect to WhatsApp
    window.open(`https://wa.me/5493517181495?text=${text}`, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <section id="contacto" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Contacto</p>
            <h2 className="text-4xl md:text-5xl font-light text-secondary-foreground mb-6">
              Hablemos de tu <span className="italic">transformación</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Cada visita comienza con una consulta personalizada para entender tu estilo, necesidades y expectativas.
              Reserva tu cita y comencemos juntos este viaje.
            </p>

            <div className="space-y-6">
              <a
                href="https://maps.app.goo.gl/7xYwwhMkZXokgnes9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-accent transition-colors">
                  <MapPin className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1 group-hover:text-accent transition-colors">Ubicación</p>
                  <p className="text-secondary-foreground">General Martín de Güemes 166 | Local B</p>
                </div>
              </a>

              <a
                href="https://wa.me/5493517181495"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-accent transition-colors">
                  <Phone className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1 group-hover:text-accent transition-colors">Teléfono (WhatsApp)</p>
                  <p className="text-secondary-foreground">+54 9 351 718 1495</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/leovalestore/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-accent transition-colors">
                  <Instagram className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1 group-hover:text-accent transition-colors">Instagram</p>
                  <p className="text-secondary-foreground">@leovalestore</p>
                </div>
              </a>
            </div>
          </div>

          {/* Booking Form */}
          <div id="reservar" className="bg-card p-8 md:p-10 border border-border">
            <h3 className="text-2xl font-medium text-card-foreground mb-8">Reservar Cita</h3>
            <form onSubmit={handleWhatsAppRedirect} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">Teléfono</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="+54 9 123 123 4567"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">Servicio</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-input text-foreground focus:outline-none focus:border-accent transition-colors"
                  required
                >
                  <option value="">Selecciona un servicio</option>

                  <optgroup label="Remoción">
                    <option value="Semi (Remoción)">Semi</option>
                    <option value="Kapping (Remoción)">Kapping</option>
                    <option value="Soft Gel (Remoción)">Soft Gel</option>
                    <option value="Esculpidas (Remoción)">Esculpidas</option>
                  </optgroup>

                  <optgroup label="Uñas (Liso)">
                    <option value="Kapping (Liso)">Kapping (liso)</option>
                    <option value="Soft Gel (Liso)">Soft Gel (liso)</option>
                    <option value="Semipermanente (Liso)">Semipermanente (liso)</option>
                  </optgroup>

                  <optgroup label="Adicionales">
                    <option value="French / Aurora">French / Aurora</option>
                    <option value="Baby Boomer">Baby Boomer</option>
                    <option value="Ojo de Gato">Ojo de Gato</option>
                    <option value="Strass x5">Strass x5</option>
                    <option value="Nail Art x2">Nail Art x2</option>
                    <option value="Full Nail Art">Full Nail Art</option>
                  </optgroup>

                  <optgroup label="Reparaciones">
                    <option value="Arreglo Soft Gel">Arreglo x uña Soft Gel</option>
                    <option value="Arreglo Poligel">Arreglo x uña Poligel</option>
                  </optgroup>

                  <option value="Consulta Personalizada">Consulta Personalizada</option>
                </select>
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">Mensaje</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Cuéntame sobre tus expectativas..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
              >
                Solicitar Cita por WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
