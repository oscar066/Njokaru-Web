import Image from "next/image";
import { Separator } from "@/components/ui/separator";

import { CartItem } from "../../../app/types/types";

interface OrderSummaryProps {
  cartItems: CartItem[];
  shippingCost: number;
}

export function OrderSummary({ cartItems, shippingCost }: OrderSummaryProps) {
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  const totalWithShipping = totalPrice + shippingCost;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-green-700 mb-4">
        Order Summary
      </h2>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                width={60}
                height={60}
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
        <Separator className="my-4" />
        <div className="flex justify-between items-center">
          <p>Subtotal</p>
          <p className="font-medium">${totalPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Shipping</p>
          <p className="font-medium">${shippingCost.toFixed(2)}</p>
        </div>
        <Separator className="my-4" />
        <div className="flex justify-between items-center font-bold text-xl">
          <p>Total</p>
          <p className="text-green-700">${totalWithShipping.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
