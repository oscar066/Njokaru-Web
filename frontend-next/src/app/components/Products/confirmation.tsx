'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Truck, Calendar, ArrowLeft } from 'lucide-react'

interface OrderItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

interface OrderDetails {
  orderId: string
  items: OrderItem[]
  total: number
  shippingAddress: string
  estimatedDelivery: string
}

export default function ConfirmationPage() {
  const router = useRouter()
  const [order, setOrder] = useState<OrderDetails | null>(null)

  useEffect(() => {
    // In a real application, you would fetch the order details from your backend

    // const fetchOrder = async () => {
    //   try {
    //     const response = await fetch('http://127.0.0.1:8000/api/order/')
    //     if (response.ok) {
    //       const data = await response.json()
    //       setOrder(data)
    //     } else {
    //       console.error('Failed to fetch Orders')
    //     }
    //   } catch (error) {
    //     console.error('Error fetching Orders')
    //   }
    // }
    // fetchOrder()
    // }, [])

    // Here we're simulating that with a timeout and mock data
    const timeout = setTimeout(() => {
      setOrder({
        orderId: 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        items: [
          { id: 1, name: "Organic Green Tea", price: 15.99, quantity: 2, image: "/placeholder.svg" },
          { id: 2, name: "Herbal Infusion Set", price: 24.99, quantity: 1, image: "/placeholder.svg" },
        ],
        total: 56.97,
        shippingAddress: "123 Tea Lane, Leaf City, TC 12345",
        estimatedDelivery: "June 15, 2023",
      })
    }, 1000)

    return () => clearTimeout(timeout)
  }, [])

  if (!order) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-8 w-8 text-green-500" />
            <CardTitle className="text-2xl font-bold text-green-700">Order Confirmed!</CardTitle>
          </div>
          <CardDescription>
            Thank you for your purchase. Your order has been received and is being processed.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Order Details</h3>
              <p><strong>Order Number:</strong> {order.orderId}</p>
              <Separator className="my-2" />
              {order.items.map((item) => (
                <div key={item.id} className="flex justify-between items-center py-2">
                  <div className="flex items-center space-x-4">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      width={50} 
                      height={50} 
                      className="rounded-md" />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
              <Separator className="my-2" />
              <div className="flex justify-between items-center font-bold">
                <p>Total</p>
                <p className="text-green-700">${order.total.toFixed(2)}</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
              <p>{order.shippingAddress}</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Truck className="h-5 w-5" />
              <p>Estimated delivery by {order.estimatedDelivery}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => router.push('/products')} className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Continue Shopping
          </Button>
          <Button onClick={() => window.print()} className="bg-green-700 hover:bg-green-600">
            <Calendar className="mr-2 h-4 w-4" /> Save to Calendar
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}