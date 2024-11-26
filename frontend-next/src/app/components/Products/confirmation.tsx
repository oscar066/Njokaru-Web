"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle,
  Truck,
  Calendar,
  ArrowLeft,
  MapPin,
  Package,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import useStore from "@/store/store";
import { CartItem, Cart } from "../../../app/types/types";

interface OrderDetails {
  orderId: string;
  items: Cart;
  total: number;
  shippingAddress: string;
  estimatedDelivery: string;
}

export default function ConfirmationPage() {
  const router = useRouter();
  const cartItems = useStore((state) => state.cartItems) as Cart;
  const [order, setOrder] = useState<OrderDetails | null>(null);
  const [progress, setProgress] = useState(0);

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

    // Here we're simulating that with a timeout and using the cart items
    const timeout = setTimeout(() => {
      const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      setOrder({
        orderId: "ORD-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
        items: cartItems,
        total: total,
        shippingAddress: "123 Tea Lane, Leaf City, TC 12345", // This should come from the checkout form in a real application
        estimatedDelivery: new Date(
          Date.now() + 7 * 24 * 60 * 60 * 1000
        ).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      });
    }, 1000);

    return () => clearTimeout(timeout);
  }, [cartItems]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  if (!order) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
        <p className="mt-4 text-lg text-green-700">
          Loading your order details...
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader className="bg-green-50 border-b border-green-100">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-8 w-8 text-green-500" />
            <CardTitle className="text-3xl font-bold text-green-700">
              Order Confirmed!
            </CardTitle>
          </div>
          <CardDescription className="text-lg mt-2">
            Thank you for your purchase. Your order has been received and is
            being processed.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-700">
                Order Details
              </h3>
              <p className="text-lg mb-2">
                <strong>Order Number:</strong> {order.orderId}
              </p>
              <Separator className="my-4" />
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center py-4 border-b last:border-b-0"
                >
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-md object-cover"
                    />
                    <div>
                      <p className="font-medium text-lg">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <p className="font-medium text-lg">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
              <div className="flex justify-between items-center font-bold text-xl mt-4">
                <p>Total</p>
                <p className="text-green-700">${order.total.toFixed(2)}</p>
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-green-700 flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Shipping Information
              </h3>
              <p className="text-lg">{order.shippingAddress}</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-700 flex items-center">
                <Truck className="mr-2 h-5 w-5" />
                Order Status
              </h3>
              <div className="flex items-center space-x-2 text-gray-600">
                <Package className="h-5 w-5 text-green-500" />
                <p className="text-lg">Preparing your order</p>
              </div>
              <Progress value={progress} className="w-full" />
              <p className="text-sm text-gray-500">
                Estimated delivery by {order.estimatedDelivery}
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between bg-gray-50 border-t">
          <Button
            variant="outline"
            onClick={() => router.push("/products")}
            className="flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Continue Shopping
          </Button>
          <Button
            onClick={() => window.print()}
            className="bg-green-700 hover:bg-green-600"
          >
            <Calendar className="mr-2 h-4 w-4" /> Save to Calendar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
