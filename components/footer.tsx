import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image src="/images/twobeans-logo.png" alt="TwoBeans" width={100} height={50} className="h-10 w-auto" />
            </div>

            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#about" className="hover:text-primary transition-colors">
                About
              </a>
              <a href="#menu" className="hover:text-primary transition-colors">
                Menu
              </a>
              <a href="#experience" className="hover:text-primary transition-colors">
                Experience
              </a>
              <a href="#contact" className="hover:text-primary transition-colors">
                Contact
              </a>
            </div>

            <p className="text-sm text-muted-foreground">© 2025 TwoBeans. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
