import { Card, CardContent } from "@/components/ui/card"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            The Experience
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Step into a world where comfort meets craft. Every detail is designed to make your visit memorable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="overflow-hidden border-2">
            <div className="aspect-video bg-accent relative">
              <img src="/cozy-cafe-interior-with-warm-lighting-and-comforta.jpg" alt="Cozy cafe interior" className="object-cover w-full h-full" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Cozy Interiors</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sink into our plush seating and enjoy the warm ambiance. Whether you're catching up with friends or
                finding a quiet moment alone, we've created the perfect setting.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-2">
            <div className="aspect-video bg-accent relative">
              <img src="/barista-making-latte-art-in-coffee-cup.jpg" alt="Latte art" className="object-cover w-full h-full" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Artisan Craft</h3>
              <p className="text-muted-foreground leading-relaxed">
                Watch our skilled baristas transform premium beans into masterpieces. Every pour is a performance, every
                cup a work of art.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-2">
            <div className="aspect-video bg-accent relative">
              <img src="/fresh-coffee-beans-and-brewing-equipment.jpg" alt="Coffee beans" className="object-cover w-full h-full" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Quality Beans</h3>
              <p className="text-muted-foreground leading-relaxed">
                We source our beans from sustainable farms around the world. Each origin brings unique flavors that
                we're excited to share with you.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-2">
            <div className="aspect-video bg-accent relative">
              <img src="/community-gathering-in-cafe-with-people-talking.jpg" alt="Community" className="object-cover w-full h-full" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Community Hub</h3>
              <p className="text-muted-foreground leading-relaxed">
                More than a cafe, we're a gathering place. Connect with neighbors, meet new friends, and become part of
                the TwoBeans family.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
