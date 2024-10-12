import { useState } from 'react'
import Image from 'next/image'
import { X, Minus, Plus, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

interface Product {
  id: number
  name: string
  price: number
  category: string
  image: string
  description: string
}

interface ProductDetailsProps {
  product: Product
  onClose: () => void
}

export default function ProductDetails({ product, onClose }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1)

  const incrementQuantity = () => setQuantity(prev => prev + 1)
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1))

  const handleAddToCart = () => {
    // Here you would typically dispatch an action to add the item to the cart
    console.log(`Added ${quantity} ${product.name}(s) to cart`)
    onClose()
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
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
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="object-cover w-full h-[300px] rounded-md"
          />
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <p className="text-2xl font-bold text-green-700 mb-4">${product.price.toFixed(2)}</p>
            </div>
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
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
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
        <DialogFooter>
          <Button className="bg-green-700 hover:bg-green-600 w-full" onClick={handleAddToCart}>
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}