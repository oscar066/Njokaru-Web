export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export type Cart = CartItem[];