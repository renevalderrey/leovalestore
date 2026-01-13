import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="text-xl font-semibold tracking-wider">
            LEOVALESTORE
          </Link>
          <p className="text-sm text-primary-foreground/70 tracking-wide">
            © 2026 LEOVALESTORE. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
          </div>
        </div>
      </div>
    </footer>
  )
}
