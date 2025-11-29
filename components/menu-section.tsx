import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const coffeeMenu = [
  {
    name: "Black",
    description: "Espresso . Americano .",
    hot: "$3.50",
    iced: "$4",
  },
  {
    name: "White",
    description: "Classic latte . Fresh / Oat milk",
    hot: "$4.50",
    iced: "$5",
  },
  {
    name: "For the Brave",
    description: "Pineapple juice, Chilli padi, Espresso",
    iced: "$6",
  },
  {
    name: "Snow White",
    description: "Homemade apple cinnamon compote, Sea salt cold foam, Espresso",
    iced: "$6",
  },
]

const nonCoffeeMenu = [
  {
    name: "Berri Happi",
    description: "Blueberry, Hibiscus, Lemon, Sparkling water",
    iced: "$6",
  },
  {
    name: "Cold Brew Tea (Seasonal)",
    description: "Double rose, Cherry, Roselle, Cranberry, Peach",
    iced: "$4",
  },
  {
    name: "Kombucha (Seasonal)",
    description: "Oolong tea, Polish honey",
    iced: "$4",
  },
]

const buzzOptions = [
  {
    name: "Fruity Friday",
    roaster: "by Zero Coffee",
    price: "+$0.5",
    beans: "Colombia Quesbraditas, Peach / Double Anaerobic Washed",
    origins: "Uganda SL14, SL28 / Natural",
    notes: "Passionfruit / Yellow Peach / Apricot / Caramel",
  },
  {
    name: "Brazil Santa Inez",
    roaster: "by Slurp Coffee Project",
    beans: "Yellow Bourbon / Natural",
    notes: "Chocolate / Almonds / Toffee",
  },
]

export function MenuSection() {
  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent mb-4 text-balance">MENU</h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-16">
          {/* Coffee Section */}
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-8">Coffee</h3>
            <div className="space-y-8">
              {coffeeMenu.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-bold text-xl text-foreground">{item.name}</h4>
                    <div className="flex gap-4 whitespace-nowrap">
                      {item.hot && (
                        <div className="text-right">
                          <div className="text-xs text-muted-foreground">Hot</div>
                          <div className="font-semibold text-foreground">{item.hot}</div>
                        </div>
                      )}
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground">Iced</div>
                        <div className="font-semibold text-foreground">{item.iced}</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Non-Coffee Section */}
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-accent mb-8">Non-Coffee</h3>
            <div className="space-y-8">
              {nonCoffeeMenu.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-bold text-xl text-foreground">{item.name}</h4>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">Iced</div>
                      <div className="font-semibold text-foreground">{item.iced}</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold text-accent text-center mb-12">Choose your buzz</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {buzzOptions.map((option, idx) => (
              <Card key={idx} className="border-2">
                <CardHeader>
                  <div className="flex items-baseline justify-between gap-2">
                    <CardTitle className="text-2xl text-primary">{option.name}</CardTitle>
                    {option.price && <span className="font-semibold text-foreground">{option.price}</span>}
                  </div>
                  <p className="text-sm text-muted-foreground italic">{option.roaster}</p>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-accent">{option.beans}</p>
                  {option.origins && <p className="text-sm text-accent">{option.origins}</p>}
                  <p className="text-sm text-muted-foreground">{option.notes}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
