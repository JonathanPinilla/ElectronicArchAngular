import {Order} from "./order";

export interface Client{
  id: string;
  name: string;
  lastName: string;
  birthDate: string;
  email: string;
  password: string;
  orders: Order[];
  deleted: boolean;
}
