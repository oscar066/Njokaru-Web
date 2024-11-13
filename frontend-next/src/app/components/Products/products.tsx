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
import useStore from "../../../store/store"

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image?: string | null;
  description: string;
  rating: number;
  availability: number;
  additional_images?: Array<{ image: string }>;
  dimensions: string;
  material: string;
}

export interface CartItem extends Product {
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
  const [products, setProducts] = useState<Product[]>([])
  const productsPerPage = 8

  useEffect(() => {
    const fetchProducts = async () => {
        try {
          const response = await fetch('http://127.0.0.1:8000/api/products/')
          if (response.ok) {
            const data = await response.json()
            setProducts(data)
          } else {
            console.error('Failed to fetch Products')
          }
        } catch (error) {
          console.error('Error fetching products')
        }
      }
    fetchProducts()
    }, [])


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

  const addToCart = useStore((state) => state.addToCart);
  const handleAddToCart = (product:Product) => {
    addToCart(product);
  };

  const cart = useStore((state) => state.cartItems);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const totalItems = cartItems.reduce((a, c) => a + c.quantity, 0)

  

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
                {cart.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-green-600">
                    {cart.length}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Shopping Cart</SheetTitle>
              </SheetHeader>
              <div className="mt-8">
                {cart.map(item => (
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
                      onClick={() => removeFromCart(item)}
                    >
                      <X size={16} />
                    </Button>
                  </div>
                ))}
                {cart.length > 0 ? (
                  <div className="mt-6 space-y-4">
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>${totalItems.toFixed(2)}</span>
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
                  onClick={() => handleAddToCart(product)}
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

        {/** {selectedProduct && (
          <ProductDetails
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist}
          />
        )} */}
      
      </main>
    </div>
  )
}