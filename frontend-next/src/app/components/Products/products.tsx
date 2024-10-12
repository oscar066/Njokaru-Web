"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { useState } from "react"
import ProductDetails from "./products-details"

export default function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const products = [
    { id: 1, name: "Bermuda Grass", price: 7.99, category: "Grass", image: "/placeholder.svg?height=200&width=200", description: "Drought-resistant and durable grass perfect for high-traffic areas." },
    { id: 2, name: "Kentucky Bluegrass", price: 8.99, category: "Grass", image: "/placeholder.svg?height=200&width=200", description: "Lush, dark green grass ideal for cooler climates." },
    { id: 3, name: "Ficus Elastica", price: 24.99, category: "Indoor Plants", image: "/placeholder.svg?height=200&width=200", description: "Also known as the rubber plant, it's a popular indoor tree with large, glossy leaves." },
    { id: 4, name: "Snake Plant", price: 19.99, category: "Indoor Plants", image: "/placeholder.svg?height=200&width=200", description: "Low-maintenance plant known for its air-purifying qualities." },
    { id: 5, name: "Hydrangea", price: 15.99, category: "Outdoor Plants", image: "/placeholder.svg?height=200&width=200", description: "Beautiful flowering shrub with large, showy blooms." },
    { id: 6, name: "Lavender", price: 12.99, category: "Outdoor Plants", image: "/placeholder.svg?height=200&width=200", description: "Fragrant herb known for its calming properties and purple flowers." },
    { id: 7, name: "Ceramic Pot - Large", price: 29.99, category: "Vases", image: "/placeholder.svg?height=200&width=200", description: "Elegant large ceramic pot suitable for indoor and outdoor use." },
    { id: 8, name: "Terracotta Planter", price: 18.99, category: "Vases", image: "/placeholder.svg?height=200&width=200", description: "Classic terracotta planter that provides excellent drainage for plants." },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-green-700">
                  Discover Our New Product Line
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Enhance your garden with our curated selection of grass, plants, and accessories.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-green-700 hover:bg-green-600">Shop Now</Button>
                <Button variant="outline" className="text-green-700 border-green-700 hover:bg-green-50">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-green-700">Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300" onClick={() => setSelectedProduct(product)}>
                  <CardHeader className="p-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={200}
                      className="object-cover w-full h-[200px]"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-green-700">{product.name}</CardTitle>
                    <p className="text-sm text-gray-500">{product.category}</p>
                  </CardContent>
                  <CardFooter className="p-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-green-700">${product.price.toFixed(2)}</span>
                    <Button size="sm" className="bg-green-700 hover:bg-green-600">View Details</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      {selectedProduct && (
        <ProductDetails product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  )
}