import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProductModel } from "../models/product.model";
import { OrderModel } from '../models/order.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }


  fetchProducts(){
    return this.http.get<ProductModel[]>('http://52.13.159.18:5000/sabroso_dev_test/api/v1/products').toPromise();
  }

  fetchOrders(user:string){
    return this.http.get<OrderModel[]>(`http://52.13.159.18:5000/sabroso_dev_test/api/v1/orders/userS/${user}`).toPromise();
  }

  createOrder(order:OrderModel){
    return this.http.post(`http://52.13.159.18:5000/sabroso_dev_test/api/v1/orders/${order.id}`,order).toPromise();
  }
}
