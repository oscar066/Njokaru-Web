"use client"

import { useState } from "react"
import Image from "next/image"
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductDetails from "./products-details"
import Cart from "../../components/Cart/cart"

interface Product {
  id: number
  name: string
  price: number
  category: string
  image: string
  description: string
}

interface CartItem extends Product {
  quantity: number
}

export default function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  const products: Product[] = [
    { id: 1, name: "Bermuda Grass", price: 7.99, category: "Grass", image: "/placeholder.svg", description: "Drought-resistant and durable grass perfect for high-traffic areas." },
    { id: 2, name: "Kentucky Bluegrass", price: 8.99, category: "Grass", image: "/placeholder.svg", description: "Lush, dark green grass ideal for cooler climates." },
    { id: 3, name: "Zoysia Grass", price: 9.49, category: "Grass", image: "/placeholder.svg", description: "Low-maintenance grass with dense growth, suitable for various climates." },
    { id: 4, name: "Ryegrass", price: 6.99, category: "Grass", image: "/placeholder.svg", description: "Fast-growing grass, ideal for quick coverage and overseeding." },
    { id: 5, name: "Tall Fescue", price: 7.49, category: "Grass", image: "/placeholder.svg", description: "Tough grass variety, resistant to wear and drought." },
    { id: 6, name: "St. Augustine Grass", price: 10.99, category: "Grass", image: "/placeholder.svg", description: "Thick, coarse grass perfect for warm climates." },
    { id: 7, name: "Buffalo Grass", price: 11.99, category: "Grass", image: "/placeholder.svg", description: "Low-maintenance native grass, drought-resistant and eco-friendly." },
    { id: 8, name: "Fescue Mix", price: 12.99, category: "Grass", image: "/placeholder.svg", description: "Versatile grass blend suitable for different growing conditions." },
    { id: 9, name: "Ficus Elastica", price: 24.99, category: "Indoor Plants", image: "/placeholder.svg", description: "Popular indoor tree with large, glossy leaves." },
    { id: 10, name: "Snake Plant", price: 19.99, category: "Indoor Plants", image: "/placeholder.svg", description: "Low-maintenance plant known for its air-purifying qualities." },
    { id: 11, name: "Peace Lily", price: 22.99, category: "Indoor Plants", image: "/placeholder.svg", description: "Flowering plant with air-purifying properties." },
    { id: 12, name: "Spider Plant", price: 17.99, category: "Indoor Plants", image: "/placeholder.svg", description: "Hardy indoor plant with air-purifying qualities." },
    { id: 13, name: "ZZ Plant", price: 29.99, category: "Indoor Plants", image: "/placeholder.svg", description: "Drought-tolerant plant, easy to care for." },
    { id: 14, name: "Aloe Vera", price: 14.99, category: "Indoor Plants", image: "/placeholder.svg", description: "Succulent plant with medicinal properties." },
    { id: 15, name: "Bamboo Palm", price: 27.99, category: "Indoor Plants", image: "/placeholder.svg", description: "Indoor palm that helps filter the air." },
    { id: 16, name: "Philodendron", price: 18.99, category: "Indoor Plants", image: "/placeholder.svg", description: "Tropical plant with large, vibrant leaves." },
    { id: 17, name: "Hydrangea", price: 15.99, category: "Outdoor Plants", image: "/placeholder.svg", description: "Beautiful flowering shrub with large, showy blooms." },
    { id: 18, name: "Lavender", price: 12.99, category: "Outdoor Plants", image: "/placeholder.svg", description: "Fragrant herb with calming properties." },
    { id: 19, name: "Rose Bush", price: 19.99, category: "Outdoor Plants", image: "/placeholder.svg", description: "Classic garden plant with fragrant blooms." },
    { id: 20, name: "Azalea", price: 21.99, category: "Outdoor Plants", image: "/placeholder.svg", description: "Popular shrub with vibrant flowers." },
    { id: 21, name: "Gardenia", price: 16.99, category: "Outdoor Plants", image: "/placeholder.svg", description: "Fragrant plant known for its white blooms." },
    { id: 22, name: "Camellia", price: 23.99, category: "Outdoor Plants", image: "/placeholder.svg", description: "Flowering plant suitable for cooler climates." },
    { id: 23, name: "Hibiscus", price: 25.99, category: "Outdoor Plants", image: "/placeholder.svg", description: "Tropical plant with large, colorful flowers." },
    { id: 24, name: "Bougainvillea", price: 18.99, category: "Outdoor Plants", image: "/placeholder.svg", description: "Vibrant plant ideal for warmer climates." },
    { id: 25, name: "Ceramic Pot - Large", price: 29.99, category: "Vases", image: "/placeholder.svg", description: "Elegant large ceramic pot suitable for indoor and outdoor use." },
    { id: 26, name: "Terracotta Planter", price: 18.99, category: "Vases", image: "/placeholder.svg", description: "Classic terracotta planter with excellent drainage." },
    { id: 27, name: "Hanging Basket", price: 22.99, category: "Vases", image: "/placeholder.svg", description: "Decorative hanging basket for small plants." },
    { id: 28, name: "Glass Vase", price: 14.99, category: "Vases", image: "/placeholder.svg", description: "Stylish glass vase perfect for flower arrangements." },
    { id: 29, name: "Bamboo Pot", price: 16.99, category: "Vases", image: "/placeholder.svg", description: "Eco-friendly bamboo pot for small plants." },
    { id: 30, name: "Metallic Planter", price: 19.99, category: "Vases", image: "/placeholder.svg", description: "Modern metallic planter for a contemporary look." },
    { id: 31, name: "Stoneware Vase", price: 27.99, category: "Vases", image: "/placeholder.svg", description: "Durable stoneware vase suitable for outdoor use." },
    { id: 32, name: "Wooden Pot", price: 24.99, category: "Vases", image: "/placeholder.svg", description: "Handcrafted wooden pot with a rustic feel." },
  ]

  const categories = Array.from(new Set(products.map(product => product.category)))

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const addToCart = (product: Product, quantity: number) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id)
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        )
      } else {
        return [...prevItems, { ...product, quantity }]
      }
    })
  }

  const updateCartItemQuantity = (id: number, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  const removeCartItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container mx-auto px-4 md:px-6">
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
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-green-700 text-center">Our Products</h2>
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <Tabs defaultValue={categories[0]} className="mb-8">
              <TabsList className="flex justify-center">
                {categories.map(category => (
                  <TabsTrigger key={category} value={category} className="text-green-700">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              {categories.map(category => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                    {filteredProducts
                      .filter(product => product.category === category)
                      .map((product) => (
                        <Card key={product.id} className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 w-full max-w-sm" onClick={() => setSelectedProduct(product)}>
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
                            <CardTitle className="text-green-700 text-center">{product.name}</CardTitle>
                            <p className="text-sm text-gray-500 text-center">{product.category}</p>
                          </CardContent>
                          <CardFooter className="p-4 flex items-center justify-between">
                            <span className="text-lg font-bold text-green-700">${product.price.toFixed(2)}</span>
                            <Button size="sm" className="bg-green-700 hover:bg-green-600">View Details</Button>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>
      {selectedProduct && (
        <ProductDetails 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
          onAddToCart={(quantity) => {
            addToCart(selectedProduct, quantity)
            setSelectedProduct(null)
          }}
        />
      )}
    </div>
  )
}