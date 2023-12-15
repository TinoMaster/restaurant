import { TItenMenu } from "./menu";

export interface TOrder {
  _id: string;
  user: string;
  orderItems: TItenMenu[];
  shippingAddress: string;
  paymentMethod: string;
  paymentResult: string;
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
  isPaid: boolean;
  paidAt: string;
  isDelivered: boolean;
  deliveredAt: string;
  createdAt: string;
  updatedAt: string;
}
