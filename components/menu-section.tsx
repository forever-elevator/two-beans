import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const menuItems = [
  {
    category: "Signature Brews",
    items: [
      {
        name: "TwoBeans Latte",
        description: "Smooth espresso with steamed milk and a hint of vanilla",
        price: "$5.50",
        popular: true,
      },
      {
        name: "Caramel Cloud",
        description: "Sweet caramel meets rich espresso with whipped cream",
        price: "$6.00",
        popular: true,
      },
      {
        name: "Classic Americano",
        description: "Bold espresso with hot water for a pure coffee experience",
        price: "$4.50",
      },
      { name: "Mocha Delight", description: "Chocolate and espresso blend topped with foam", price: "$6.50" },
    ],
  },
  {
    category: "Specialty Drinks",
    items: [
      {
        name: "Lavender Honey Latte",
        description: "Floral notes with natural honey sweetness",
        price: "$6.50",
        popular: true,
      },
      { name: "Matcha Fusion", description: "Premium matcha green tea with choice of milk", price: "$5.50" },
      { name: "Chai Spice", description: "Aromatic spices blended with black tea and milk", price: "$5.00" },
      { name: "Golden Turmeric", description: "Warming turmeric latte with ginger and honey", price: "$5.50" },
    ],
  },
  {
    category: "Sweet Treats",
    items: [
      { name: "Chocolate Croissant", description: "Buttery pastry with rich chocolate filling", price: "$4.50" },
      { name: "Blueberry Muffin", description: "Fresh baked with wild blueberries", price: "$3.50" },
      { name: "Carrot Cake", description: "Moist cake with cream cheese frosting", price: "$5.50" },
      { name: "Cookie Duo", description: "Two freshly baked artisan cookies", price: "$3.00" },
    ],
  },
]

export function MenuSection() {
  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">Our Menu</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Carefully curated selections that celebrate flavor, quality, and the art of coffee making.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((category, idx) => (
            <Card key={idx} className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        {item.name}
                        {item.popular && (
                          <Badge variant="secondary" className="text-xs">
                            Popular
                          </Badge>
                        )}
                      </h4>
                      <span className="font-bold text-primary whitespace-nowrap">{item.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
