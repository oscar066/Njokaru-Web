"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Search, ShoppingCart, Filter, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import ProductDetails from "./products-details"

interface Product {
  id: number
  name: string
  price: number
  category: string
  image: string
  description: string
  rating: number
  availability: number
  images: string[]
  dimensions: string
  material: string
}

interface CartItem extends Product {
  quantity: number
}

export default function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [priceRange, setPriceRange] = useState([0, 100])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [sortOption, setSortOption] = useState('name')
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 8

  const products: Product[] = [
    { id: 1, name: "Bermuda Grass", price: 7.99, category: "Grass", image: "/Assets/Bermuda-Grass-Lawn-Care.jpg", description: "Drought-resistant and durable grass perfect for high-traffic areas.", rating: 4.5, availability: 100, images: ["/Assets/Bermuda-Grass-Lawn-Care.jpg"], dimensions: "500 sq ft coverage", material: "Grass seeds" },
    { id: 2, name: "Kentucky Bluegrass", price: 8.99, category: "Grass", image: "/placeholder.svg", description: "Lush, dark green grass ideal for cooler climates.", rating: 4.2, availability: 75, images: ["/placeholder.svg"], dimensions: "400 sq ft coverage", material: "Grass seeds" },
    { id: 3, name: "Zoysia Grass", price: 9.49, category: "Grass", image: "/placeholder.svg", description: "Low-maintenance grass with dense growth, suitable for various climates.", rating: 4.3, availability: 90, images: ["/placeholder.svg"], dimensions: "450 sq ft coverage", material: "Grass seeds" },
    { id: 4, name: "Ryegrass", price: 6.99, category: "Grass", image: "/placeholder.svg", description: "Fast-growing grass, ideal for quick coverage and overseeding.", rating: 4.0, availability: 120, images: ["/placeholder.svg"], dimensions: "600 sq ft coverage", material: "Grass seeds" },
    { id: 5, name: "Tall Fescue", price: 7.49, category: "Grass", image: "/placeholder.svg", description: "Tough grass variety, resistant to wear and drought.", rating: 4.4, availability: 85, images: ["/placeholder.svg"], dimensions: "550 sq ft coverage", material: "Grass seeds" },
    { id: 6, name: "St. Augustine Grass", price: 10.99, category: "Grass", image: "/placeholder.svg", description: "Thick, coarse grass perfect for warm climates.", rating: 4.1, availability: 70, images: ["/placeholder.svg"], dimensions: "350 sq ft coverage", material: "Grass plugs" },
    { id: 7, name: "Buffalo Grass", price: 11.99, category: "Grass", image: "/Assets/Buffalo Grass.jpg", description: "Low-maintenance native grass, drought-resistant and eco-friendly.", rating: 4.6, availability: 60, images: ["/Assets/Buffalo Grass.jpg"], dimensions: "300 sq ft coverage", material: "Grass seeds" },
    { id: 8, name: "Fescue Mix", price: 12.99, category: "Grass", image: "/placeholder.svg", description: "Versatile grass blend suitable for different growing conditions.", rating: 4.3, availability: 95, images: ["/placeholder.svg"], dimensions: "500 sq ft coverage", material: "Mixed grass seeds" },
    { id: 9, name: "Ficus Elastica", price: 24.99, category: "Indoor Plants", image: "/placeholder.svg", description: "Popular indoor tree with large, glossy leaves.", rating: 4.7, availability: 30, images: ["/placeholder.svg"], dimensions: "24-36 inches tall", material: "Live plant" },
    { id: 10, name: "Snake Plant", price: 19.99, category: "Indoor Plants", image: "/placeholder.svg", description: "Low-maintenance plant known for its air-purifying qualities.", rating: 4.8, availability: 50, images: ["/placeholder.svg"], dimensions: "12-18 inches tall", material: "Live plant" },
    { id: 11, name: "Peace Lily", price: 22.99, category: "Indoor Plants", image: "/placeholder.svg", description: "Flowering plant with air-purifying properties.", rating: 4.6, availability: 40, images: ["/placeholder.svg"], dimensions: "18-24 inches tall", material: "Live plant" },
    { id: 12, name: "Spider Plant", price: 17.99, category: "Indoor Plants", image: "/placeholder.svg", description: "Hardy indoor plant with air-purifying qualities.", rating: 4.5, availability: 60, images: ["/placeholder.svg"], dimensions: "12-15 inches tall", material: "Live plant" },
    { id: 13, name: "ZZ Plant", price: 29.99, category: "Indoor Plants", image: "/placeholder.svg", description: "Drought-tolerant plant, easy to care for.", rating: 4.9, availability: 35, images: ["/placeholder.svg"], dimensions: "24-36 inches tall", material: "Live plant" },
    { id: 14, name: "Aloe Vera", price: 14.99, category: "Indoor Plants", image: "/Assets/aloe-vera.jpg", description: "Succulent plant with medicinal properties.", rating: 4.7, availability: 80, images: ["/Assets/aloe-vera.jpg"], dimensions: "10-12 inches tall", material: "Live plant" },
    { id: 15, name: "Bamboo Plant", price: 27.99, category: "Indoor Plants", image: "/Assets/BamboPlant.jpg", description: "Indoor palm that helps filter the air.", rating: 4.4, availability: 25, images: ["/Assets/BamboPlant.jpg"], dimensions: "36-48 inches tall", material: "Live plant" },
    { id: 16, name: "Philodendron", price: 18.99, category: "Indoor Plants", image: "/placeholder.svg", description: "Tropical plant with large, vibrant leaves.", rating: 4.6, availability: 45, images: ["/placeholder.svg"], dimensions: "12-18 inches tall", material: "Live plant" },
    { id: 17, name: "Hydrangea", price: 15.99, category: "Outdoor Plants", image: "/placeholder.svg", description: "Beautiful flowering shrub with large, showy blooms.", rating: 4.8, availability: 30, images: ["/placeholder.svg"], dimensions: "24-36 inches tall", material: "Live plant" },
    { id: 18, name: "Lavender", price: 12.99, category: "Outdoor Plants", image: "/placeholder.svg", description: "Fragrant herb with calming properties.", rating: 4.7, availability: 55, images: ["/placeholder.svg"], dimensions: "12-18 inches tall", material: "Live plant" },
    { id: 19, name: "Rose Bush", price: 19.99, category: "Outdoor Plants", image: "/placeholder.svg", description: "Classic garden plant with fragrant blooms.", rating: 4.6, availability: 40, images: ["/placeholder.svg"], dimensions: "18-24 inches tall", material: "Live plant" },
    { id: 20, name: "Azalea", price: 21.99, category: "Outdoor Plants", image: "/Assets/azalea-plant.jpg", description: "Popular shrub with vibrant flowers.", rating: 4.5, availability: 35, images: ["/Assets/azalea-plant.jpg"], dimensions: "24-36 inches tall", material: "Live plant" },
    { id: 21, name: "Gardenia", price: 16.99, category: "Outdoor Plants", image: "/placeholder.svg", description: "Fragrant plant known for its white blooms.", rating: 4.4, availability: 30, images: ["/placeholder.svg"], dimensions: "18-24 inches tall", material: "Live plant" },
    { id: 22, name: "Camellia", price: 23.99, category: "Outdoor Plants", image: "/Assets/Camellia.jpg", description: "Flowering plant suitable for cooler climates.", rating: 4.3, availability: 25, images: ["/Assets/Camellia.jpg"], dimensions: "36-48 inches tall", material: "Live plant" },
    { id: 23, name: "Hibiscus", price: 25.99, category: "Outdoor Plants", image: "/placeholder.svg", description: "Tropical plant with large, colorful flowers.", rating: 4.7, availability: 35, images: ["/placeholder.svg"], dimensions: "24-36 inches tall", material: "Live plant" },
    { id: 24, name: "Bougainvillea", price: 18.99, category: "Outdoor Plants", image: "/Assets/Bougainvillea.jpg", description: "Vibrant plant ideal for warmer climates.", rating: 4.6, availability: 30, images: ["/Assets/Bougainvillea.jpg"], dimensions: "36-48 inches tall", material: "Live plant" },
    { id: 25, name: "Ceramic Pot - Large", price: 29.99, category: "Vases", image: "/placeholder.svg", description: "Elegant large ceramic pot suitable for indoor and outdoor use.", rating: 4.5, availability: 50, images: ["/placeholder.svg"], dimensions: "14 inches diameter x 16 inches height", material: "Ceramic" },
    { id: 26, name: "Terracotta Planter", price: 18.99, category: "Vases", image: "/placeholder.svg", description: "Classic terracotta planter with excellent drainage.", rating: 4.7, availability: 75, images: ["/placeholder.svg"], dimensions: "10 inches diameter x 8 inches height", material: "Terracotta" },
    { id: 27, name: "Hanging Basket", price: 22.99, category: "Vases", image: "/placeholder.svg", description: "Decorative hanging basket for small plants.", rating: 4.4, availability: 60, images: ["/placeholder.svg"], dimensions: "12 inches diameter x 6 inches height", material: "Woven rattan" },
    { id: 28, name: "Glass Vase", price: 14.99, category: "Vases", image: "/placeholder.svg", description: "Stylish glass vase perfect for flower arrangements.", rating: 4.6, availability: 90, images: ["/placeholder.svg"], dimensions: "6 inches diameter x 12 inches height", material: "Glass" },
    { id: 29, name: "Bamboo Pot", price: 16.99, category: "Vases", image: "/Assets/BambooPot.jpg", description: "Eco-friendly bamboo pot for small plants.", rating: 4.3, availability: 40, images: ["/Assets/BambooPot.jpg"], dimensions: "8 inches diameter x 7 inches height", material: "Bamboo" },
    { id: 30, name: "Metallic Planter", price: 19.99, category: "Vases", image: "/placeholder.svg", description: "Modern metallic planter for a contemporary look.", rating: 4.5, availability: 55, images: ["/placeholder.svg"], dimensions: "12 inches diameter x 10 inches height", material: "Powder-coated steel" },
    { id: 31, name: "Stoneware Vase", price: 27.99, category: "Vases", image: "/placeholder.svg", description: "Durable stoneware vase suitable for outdoor use.", rating: 4.8, availability: 35, images: ["/placeholder.svg"], dimensions: "8 inches diameter x 14 inches height", material: "Stoneware" },
    { id: 32, name: "Wooden Pot", price: 24.99, category: "Vases", image: "/placeholder.svg", description: "Handcrafted wooden pot with a rustic feel.", rating: 4.6, availability: 45, images: ["/placeholder.svg"], dimensions: "10 inches diameter x 8 inches height", material: "Reclaimed wood" }
  ]

  const categories = Array.from(new Set(products.map(product => product.category)))

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    return matchesSearch && matchesPrice && matchesCategory
  }).sort((a, b) => {
    switch (sortOption) {
      case 'price-asc':
        return a.price - b.price
      case 'price-desc':
        return b.price - a.price
      case 'name':
      default:
        return a.name.localeCompare(b.name)
    }
  })

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  )

  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, priceRange, selectedCategories, sortOption])

  const handleAddToCart = (product: Product, quantity: number) => {
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

  const handleAddToWishlist = (product: Product) => {
    // Implement wishlist functionality here
    console.log("Added to wishlist:", product)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Assets/products-hero1.jpeg')] bg-cover bg-center transform motion-safe:animate-subtle-zoom" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in font-serif">
              Bring Nature Home
            </h1>
            <p className="text-xl mb-8 animate-fade-in-delay font-serif">
              Transform your space with our curated collection of premium plants and accessories.
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 font-serif">
              Explore Collection
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter size={20} />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filter Products</SheetTitle>
              </SheetHeader>
              <div className="py-6 space-y-6">
                <div>
                  <h3 className="font-medium mb-4">Price Range</h3>
                  <Slider
                    defaultValue={[0, 100]}
                    max={100}
                    step={1}
                    className="w-full"
                    onValueChange={setPriceRange}
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-500">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <label key={category} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedCategories([...selectedCategories, category])
                            } else {
                              setSelectedCategories(selectedCategories.filter(c => c !== category))
                            }
                          }}
                          className="rounded border-gray-300"
                        />
                        {category}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-4">Sort By</h3>
                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="name">Name</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="relative">
                <ShoppingCart size={20} />
                {cartItems.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-green-600">
                    {cartItems.length}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Shopping Cart</SheetTitle>
              </SheetHeader>
              <div className="mt-8">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-center gap-4 mb-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">
                        ${item.price.toFixed(2)} x {item.quantity}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setCartItems(items => items.filter(i => i.id !== item.id))}
                    >
                      <X size={16} />
                    </Button>
                  </div>
                ))}
                {cartItems.length > 0 ? (
                  <div className="mt-6 space-y-4">
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Checkout
                    </Button>
                  </div>
                ) : (
                  <p className="text-center text-gray-500">Your cart is empty</p>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {paginatedProducts.map((product) => (
            <Card key={product.id} className="group">
              <CardHeader className="p-0 relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-[200px] object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button
                    className="bg-white text-black hover:bg-gray-100"
                    onClick={() => setSelectedProduct(product)}
                  >
                    Quick View
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <Badge variant="outline" className="mb-2">
                  {product.category}
                </Badge>
                <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {product.description}
                </p>
              </CardContent>
              <CardFooter className="p-4 flex items-center justify-between">
                <span className="text-lg font-bold">
                  ${product.price.toFixed(2)}
                </span>
                <Button
                  size="sm"
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => handleAddToCart(product, 1)}
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-8 flex justify-center items-center space-x-4">
          <Button
            variant="outline"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

        {/* Product Details Modal */}
        {selectedProduct && (
          <ProductDetails
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist}
          />
        )}
      </main>
    </div>
  )
}