import { useState, useEffect } from 'react';
import { ShoppingCart, X, Plus, Minus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { motion, AnimatePresence } from 'framer-motion';
import { Alert, AlertDescription } from "@/components/ui/alert";
import useStore from "@/store/store"
import Image  from "next/image"

/*
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  maxQuantity?: number;
}

interface CartProps {
  items?: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
  maxItemQuantity?: number;
  onCheckout?: () => void;
}*/

export default function Cart({ 
  items = [], 
  onUpdateQuantity, 
  onRemoveItem, 
  maxItemQuantity = 99,
  onCheckout 
}: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const cartItems = useStore((state) => state.cartItems);
  const updateQuantity = useStore((state) => state.updateQuantity);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const totalItems = cartItems.reduce((a, c) => a + c.quantity, 0)

  const handleQuantityUpdate = (item:any, action:any) => {
    updateQuantity(item, action)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          className="relative overflow-hidden group"
          onClick={() => totalItems === 0 && setShowAlert(true)}
        >
          <ShoppingCart className="h-5 w-5 text-green-700 transition-transform group-hover:scale-110" />
          <AnimatePresence>
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute -top-2 -right-2 bg-green-700 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
              >
                {totalItems}
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold text-green-700 flex items-center gap-2">
            <ShoppingCart className="h-6 w-6" />
            Your Cart ({totalItems} items)
          </SheetTitle>
        </SheetHeader>

        <AnimatePresence>
          {showAlert && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-4"
            >
              <Alert variant="destructive">
                <AlertDescription>
                  {alertMessage || "Your cart is empty"}
                </AlertDescription>
              </Alert>
            </motion.div>
          )}
        </AnimatePresence>

        {cartItems.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 mt-8"
          >
            Your cart is empty
          </motion.p>
        ) : (
          <div className="mt-8 space-y-4">
            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm"
                >
                  <div className="relative w-16 h-16 overflow-hidden rounded-md">
                    <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                      className="object-cover w-full h-full transition-transform hover:scale-110" 
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-green-700">{item.name}</h3>
                    <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8 rounded-full hover:bg-green-50"
                      onClick={() => handleQuantityUpdate(item, "decrease")}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8 rounded-full hover:bg-green-50"
                      onClick={() => handleQuantityUpdate(item, "increase")}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    onClick={() => removeFromCart(item)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </motion.div>
              ))}
            </AnimatePresence>
            
            <motion.div 
              className="border-t pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total:</span>
                <span className="font-bold text-green-700">${total.toFixed(2)}</span>
              </div>
              <Button 
                className="w-full mt-4 bg-green-700 hover:bg-green-600 transition-colors"
                onClick={onCheckout}
              >
                Proceed to Checkout
              </Button>
            </motion.div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}