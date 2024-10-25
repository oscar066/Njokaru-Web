// "use client"

// import { useState } from 'react'
// import { useRouter } from 'next/router'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Separator } from "@/components/ui/separator"

// interface CartItem {
//   id: number
//   name: string
//   price: number
//   quantity: number
//   image: string
// }

// interface CheckoutProps {
//   cartItems: CartItem[]
// }

// export default function Checkout({ cartItems }: CheckoutProps) {
//   const router = useRouter()
//   const [shippingDetails, setShippingDetails] = useState({
//     fullName: '',
//     address: '',
//     city: '',
//     postalCode: '',
//     country: '',
//   })
//   const [paymentMethod, setPaymentMethod] = useState('credit-card')

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     setShippingDetails(prev => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Here you would typically send the order details to your backend
//     console.log('Order submitted:', { shippingDetails, paymentMethod, cartItems })
//     // Redirect to a confirmation page
//     router.push('/confirmation')
//   }

//   const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-green-700 mb-8">Checkout</h1>
//       <div className="grid md:grid-cols-2 gap-8">
//         <div>
//           <h2 className="text-xl font-semibold text-green-700 mb-4">Shipping Details</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="space-y-4">
//               <div>
//                 <Label htmlFor="fullName">Full Name</Label>
//                 <Input
//                   id="fullName"
//                   name="fullName"
//                   value={shippingDetails.fullName}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="address">Address</Label>
//                 <Input
//                   id="address"
//                   name="address"
//                   value={shippingDetails.address}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="city">City</Label>
//                 <Input
//                   id="city"
//                   name="city"
//                   value={shippingDetails.city}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="postalCode">Postal Code</Label>
//                 <Input
//                   id="postalCode"
//                   name="postalCode"
//                   value={shippingDetails.postalCode}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="country">Country</Label>
//                 <Select onValueChange={(value) => setShippingDetails(prev => ({ ...prev, country: value }))}>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select a country" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="us">United States</SelectItem>
//                     <SelectItem value="ca">Canada</SelectItem>
//                     <SelectItem value="uk">United Kingdom</SelectItem>
//                     {/* Add more countries as needed */}
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>

//             <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">Payment Method</h2>
//             <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
//               <div className="flex items-center space-x-2">
//                 <RadioGroupItem value="credit-card" id="credit-card" />
//                 <Label htmlFor="credit-card">Credit Card</Label>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <RadioGroupItem value="paypal" id="paypal" />
//                 <Label htmlFor="paypal">PayPal</Label>
//               </div>
//             </RadioGroup>

//             <Button type="submit" className="w-full mt-8 bg-green-700 hover:bg-green-600">
//               Place Order
//             </Button>
//           </form>
//         </div>

//         <div>
//           <h2 className="text-xl font-semibold text-green-700 mb-4">Order Summary</h2>
//           <div className="space-y-4">
//             {cartItems.map((item) => (
//               <div key={item.id} className="flex justify-between items-center">
//                 <div>
//                   <p className="font-medium">{item.name}</p>
//                   <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
//                 </div>
//                 <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
//               </div>
//             ))}
//             <Separator />
//             <div className="flex justify-between items-center font-bold">
//               <p>Total</p>
//               <p className="text-green-700">${totalPrice.toFixed(2)}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }