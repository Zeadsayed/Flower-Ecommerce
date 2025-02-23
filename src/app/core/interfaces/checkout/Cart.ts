import { Products } from '../home-main/Products';

export interface IUserCart {
  message: string;
  numOfCartItems: number;
  cart: ICart;
}

export interface ICart {
  _id: string;
  user: string;
  cartItems: Products[];
  discount: number;
  totalPrice: number;
  totalPriceAfterDiscount: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
