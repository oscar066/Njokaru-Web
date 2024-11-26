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

import { toast } from "@/hooks/use-toast";
import { CreditCard, Wallet } from "lucide-react";

import useStore from "@/store/store";
import { OrderSummary } from "./order-summary";
import { CartItem, Cart } from "../../../app/types/types";

interface CheckoutProps {}

export default function Checkout() {
  const router = useRouter();
  const cartItems = useStore((state) => state.cartItems) as CartItem[];
  const shippingCost = 10; // Example shipping cost
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
  //const totalPrice = (cartItems ?? []).reduce(
  //  (a, c) => a + c.price * c.quantity,
  //  0
  //);
  //const totalWithShipping = totalPrice + shippingCost;

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">
        Checkout
      </h1>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              Shipping Details
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-sm font-medium">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={shippingDetails.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address" className="text-sm font-medium">
                  Address
                </Label>
                <Input
                  id="address"
                  name="address"
                  value={shippingDetails.address}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-sm font-medium">
                    City
                  </Label>
                  <Input
                    id="city"
                    name="city"
                    value={shippingDetails.city}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="postalCode" className="text-sm font-medium">
                    Postal Code
                  </Label>
                  <Input
                    id="postalCode"
                    name="postalCode"
                    value={shippingDetails.postalCode}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="country" className="text-sm font-medium">
                  Country
                </Label>
                <Select
                  onValueChange={(value) =>
                    setShippingDetails((prev) => ({ ...prev, country: value }))
                  }
                >
                  <SelectTrigger className="w-full">
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
            </form>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              Payment Method
            </h2>
            <RadioGroup
              value={paymentMethod}
              onValueChange={setPaymentMethod}
              className="space-y-4"
            >
              <div className="flex items-center space-x-4 rounded-md border p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                <RadioGroupItem value="credit-card" id="credit-card" />
                <Label
                  htmlFor="credit-card"
                  className="flex items-center space-x-3 cursor-pointer flex-1"
                >
                  <CreditCard className="h-6 w-6 text-green-700" />
                  <span className="font-medium">Credit Card</span>
                </Label>
              </div>
              <div className="flex items-center space-x-4 rounded-md border p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                <RadioGroupItem value="paypal" id="paypal" />
                <Label
                  htmlFor="paypal"
                  className="flex items-center space-x-3 cursor-pointer flex-1"
                >
                  <Wallet className="h-6 w-6 text-blue-500" />
                  <span className="font-medium">PayPal</span>
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Button
            type="submit"
            className="w-full py-6 text-lg bg-green-700 hover:bg-green-600 transition-colors"
            disabled={isSubmitting}
            onClick={handleSubmit}
          >
            {isSubmitting ? "Processing..." : "Place Order"}
          </Button>
        </div>

        <div className="lg:sticky lg:top-8">
          <OrderSummary cartItems={cartItems} shippingCost={shippingCost} />
        </div>
      </div>
    </div>
  );
}
