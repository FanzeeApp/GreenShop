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
    category?: string,
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
  }
  
export interface CartState {
    items: CartItem[];
    totalQuantity: number;
  }