import {Item} from "./item";

export interface Order{
  id: string;
  clientId: string;
  price: number;
  address: string;
  contactNumber: string;
  items: Item[];
  deleted: boolean;
}
