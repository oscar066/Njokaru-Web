"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import { CreditCard, Wallet } from "lucide-react";

import useStore from "@/store/store";

interface CheckoutProps {}

export default function Checkout() {
  const router = useRouter();
  const cartItems = useStore((state) => state.cartItems);
  const [shippingDetails, setShippingDetails] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would typically send the order details to your backend

      // const response = await fetch("http://127.0.0.1:8000/api/order/", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       cartItems,
      //       shippingDetails,
      //     }),
      //   }
      // );

      // if (!response.ok){
      //   throw new Error("Failed to place the order");
      // }

      // const data = await response.json();
      // console.log("Order placed successfully:", data);

      // // Redirect to a confirmation page

      // router.push('/order-confirmation')

      console.log("Order submitted:", {
        shippingDetails,
        paymentMethod,
        cartItems,
      });

      toast({
        title: "Order Placed Successfully!",
        description:
          "Thank you for your purchase. You will receive a confirmation email shortly.",
      });

      // Redirect to a confirmation page
      router.push("/order-confirmation");
    } catch (error) {
      toast({
        title: "Error",
        description:
          "There was a problem placing your order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Debug log to check if cartItems is defined
  console.log(cartItems);

  // Ensure cartItems is an array to prevent errors
  const totalPrice = (cartItems ?? []).reduce(
    (a, c) => a + c.price * c.quantity,
    0,
  );
  const shippingCost = 10; // Example shipping cost
  const totalWithShipping = totalPrice + shippingCost;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-700 mb-8">Checkout</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-green-700 mb-4">
            Shipping Details
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                name="fullName"
                value={shippingDetails.fullName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                name="address"
                value={shippingDetails.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  name="city"
                  value={shippingDetails.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="postalCode">Postal Code</Label>
                <Input
                  id="postalCode"
                  name="postalCode"
                  value={shippingDetails.postalCode}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="country">Country</Label>
              <Select
                onValueChange={(value) =>
                  setShippingDetails((prev) => ({ ...prev, country: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ke">Kenya</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                  <SelectItem value="de">Germany</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator className="my-6" />

            <h2 className="text-xl font-semibold text-green-700 mb-4">
              Payment Method
            </h2>
            <RadioGroup
              value={paymentMethod}
              onValueChange={setPaymentMethod}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2 rounded-md border p-3 cursor-pointer hover:bg-gray-100">
                <RadioGroupItem value="credit-card" id="credit-card" />
                <Label
                  htmlFor="credit-card"
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <CreditCard className="h-5 w-5 text-green-700" />
                  <span>Credit Card</span>
                </Label>
              </div>
              <div className="flex items-center space-x-2 rounded-md border p-3 cursor-pointer hover:bg-gray-100">
                <RadioGroupItem value="paypal" id="paypal" />
                <Label
                  htmlFor="paypal"
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <Wallet className="h-5 w-5 text-blue-500" />
                  <span>PayPal</span>
                </Label>
              </div>
            </RadioGroup>

            <Button
              type="submit"
              className="w-full mt-8 bg-green-700 hover:bg-green-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Place Order"}
            </Button>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-green-700 mb-4">
            Order Summary
          </h2>
          <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <Image
                    src={item.image || "/placeholder"}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                </div>
                <p className="font-medium">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
            <Separator />
            <div className="flex justify-between items-center">
              <p>Subtotal</p>
              <p className="font-medium">${totalPrice.toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Shipping</p>
              <p className="font-medium">${shippingCost.toFixed(2)}</p>
            </div>
            <Separator />
            <div className="flex justify-between items-center font-bold text-lg">
              <p>Total</p>
              <p className="text-green-700">${totalWithShipping.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
