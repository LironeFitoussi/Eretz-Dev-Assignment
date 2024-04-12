// types.ts
export interface ItemData {
  productId: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

export interface OrderData {
  items: ItemData[];
  totalPrice: number;
}

export interface CustomerData {
  name: string;
  email: string;
  address: string;
}

export interface PaymentMethodData {
  [key: string]: string | undefined;
  number: string;
  expiry: string;
  cvc: string;
  name: string;
  focus: string;
}
