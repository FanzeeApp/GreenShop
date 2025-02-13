export interface PropsButton {
    title: string,
    width?: number,
    height?: number,
    size?: number
}

export interface Card {
    _id: string,
    name: string,
    price?: number,
    imgUrl?: string
}

export interface Product {
    _id: string,
    name: string,
    description: string,
    price?: number,
    discount?: number
    category: string,
    size?: number
    pictures: string
}

export interface MiniProduct {
    image: string
    name: string
    desc: string
    sana: string
    minute: number
}

export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    pictures: string
  }
  
export interface CartState {
    items: CartItem[];
    totalQuantity: number;
  }

export interface Order {
    items: Array<{
      productId: string;
      quantity: number;
    }>;
    firstName: string;
    lastName: string;
    country: string;
    city: string;
    apartment: string;
    state: string;
    zip: string;
    email: string;
    phoneNumber: string;
    notes: string;
  }
  