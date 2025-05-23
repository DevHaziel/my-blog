import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Rodrigo Haziel Campos Valdes. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
            <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          </Link>
          <Link href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          </Link>
          <Link href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <Facebook className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
