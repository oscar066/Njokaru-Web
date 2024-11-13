"use client"

import { useState } from "react"
import Image from 'next/image'
import { X, Minus, Plus, ShoppingCart, Heart, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import useStore from "../../../store/store"
import { Product } from "./products"

interface ProductDetailsProps {
  product: Product
  onClose: () => void
  onAddToCart: (product: Product, quantity: number) => void
  onAddToWishlist: (product: Product) => void
}

export default function ProductDetails({ product, onClose, onAddToCart, onAddToWishlist }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const incrementQuantity = () => setQuantity(prev => Math.min(prev + 1, product.availability))
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1))

  const addToCart = useStore((state) => state.addToCart)

  const handleAddToCart = () => {
    addToCart({ ...product, quantity })
    onClose()
  }

  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % product.additional_images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + product.additional_images.length) % product.additional_images.length)
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-green-700">{product.name}</DialogTitle>
          <DialogDescription>{product.category}</DialogDescription>
          <Button 
            variant="ghost" 
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogHeader>
        <div className="grid gap-4 py-4 md:grid-cols-2">
          <div className="relative">
            <Image
              src={product.additional_images[currentImageIndex]}
              alt={`${product.name} - Image ${currentImageIndex + 1}`}
              width={400}
              height={400}
              className="object-cover w-full h-[400px] rounded-md"
            />
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <div className="flex justify-center mt-2 space-x-2">
              {product.additional_images.map((_, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className={cn(
                    "w-2 h-2 rounded-full p-0",
                    index === currentImageIndex ? "bg-green-700" : "bg-gray-300"
                  )}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <span className="sr-only">View image {index + 1}</span>
                </Button>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={cn("w-5 h-5", i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300")} />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">({product.rating.toFixed(1)})</span>
                </div>
                <Badge variant={product.availability > 0 ? "default" : "destructive"}>
                  {product.availability > 0 ? "In Stock" : "Out of Stock"}
                </Badge>
              </div>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <p className="text-sm text-gray-600 mb-2">Dimensions: {product.dimensions}</p>
              <p className="text-sm text-gray-600 mb-4">Material: {product.material}</p>
              <p className="text-2xl font-bold text-green-700 mb-4">${product.price.toFixed(2)}</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={decrementQuantity}
                  className="h-8 w-8 shrink-0 rounded-full"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  type="number"
                  min="1"
                  max={product.availability}
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Math.min(parseInt(e.target.value) || 1, product.availability)))}
                  className="h-8 w-14 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={incrementQuantity}
                  className="h-8 w-8 shrink-0 rounded-full"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter className="sm:justify-between">
          <Button variant="outline" className="w-full sm:w-auto" onClick={() => onAddToWishlist(product)}>
            <Heart className="mr-2 h-4 w-4" /> Add to Wishlist
          </Button>
          <Button className="bg-green-700 hover:bg-green-600 w-full sm:w-auto" onClick={handleAddToCart}>
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}