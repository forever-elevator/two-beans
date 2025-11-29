import { Card, CardContent } from "@/components/ui/card"
import { Coffee, Heart, Home } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            The TwoBeans Story
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            We're more than just a cafe — we're a home away from home. Founded on the belief that great coffee should be
            enjoyed in a warm, welcoming space.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-2 hover:border-primary transition-all duration-300">
            <CardContent className="pt-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Artisanal Coffee</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every bean carefully selected and roasted to perfection for an exceptional taste experience.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-all duration-300">
            <CardContent className="pt-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Cozy Atmosphere</h3>
              <p className="text-muted-foreground leading-relaxed">
                A warm, inviting space designed to feel like your favorite room at home.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-all duration-300">
            <CardContent className="pt-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Made with Love</h3>
              <p className="text-muted-foreground leading-relaxed">
                Each cup crafted with passion and care, because you deserve the best.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
