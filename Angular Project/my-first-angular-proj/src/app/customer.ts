import { Product } from "./product";

export interface Customer {
    customerId:number;
    customerName:string;
    phoneNumber:string;
    cartItems:Product;
}
