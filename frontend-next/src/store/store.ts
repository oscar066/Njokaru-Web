import { create } from 'zustand'
import {persist} from 'zustand/middleware'
import {Product} from "../app/components/Products/products"



interface Cart extends Product {
    quantity: number
  }

interface Store {
  cartItems: Cart[]
  addToCart: (product:Product) => void
  updateQuantity: (product:Product, action: 'increase' | 'decrease') => void
  clearCart:() => void
  removeFromCart: (product:Product) => void
}

const useStore = create<Store>()(
    persist(
        (set,get) => ({
            cartItems: [],

            addToCart: (product) => {

               const newItem = {...product, quantity:1}
               const cart = get().cartItems;

               const foundIndex = cart.findIndex((item) => item.id === product.id);
               if (foundIndex >= 0) {
                 cart[foundIndex] = {
                   ...cart[foundIndex],
                   quantity: cart[foundIndex].quantity + 1,
                 };
               } else {
                 set(() => ({
                   cartItems: [...cart, newItem],
                 }));
               }
            },
            updateQuantity: (product,action) => {
              const cart = get().cartItems;
              const foundProduct = cart.find((item) => item.id === product.id);

              if(foundProduct) {
                  if(action === 'decrease') {
                      foundProduct.quantity = foundProduct.quantity > 1 ? foundProduct.quantity - 1 : foundProduct.quantity; 
                  } else if(action === 'increase'){
                      foundProduct.quantity += 1;
                  }
                  set(() => ({
                    cartItems: [...cart],
                  }));
              }
                
            },
            
            removeFromCart: (product) => {
              set({cartItems: get().cartItems.filter((item) => item.id !== product.id)})
          },

          clearCart: () => set({cartItems: [] }),

          })
          , {name:'cart'}
    )
    )

export default useStore