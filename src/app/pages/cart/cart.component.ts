import { Component } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { OrderModel } from 'src/app/models/order.model';
import { ProductService } from '../../services/product.service';
import { AlertsService } from '../../services/alerts.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  products: ProductModel[];
  cart: ProductModel[]=[];
  subtotal: number = 0.00;
  total: number = 0.00;

  images = [
    '../../../assets/img/play-4.png',
    '../../../assets/img/lenovo.jpg',
    '../../../assets/img/predador.jpg',
    '../../../assets/img/macbook.jpg',
  ];

  constructor(private productService: ProductService,private alerts:AlertsService) {
    this.getProducts();
  }

  async getProducts() {
    this.products = (await this.productService.fetchProducts()).map(res => {
      res.quantity = 1;
      return res;
    });
  }

  addProduct(id: string, isAdd: boolean = false) {
    this.products.forEach(res => {
      if (res.id === id) {
        if (isAdd) {
          res.quantity++;
          return;
        }
        if (res.quantity > 0) {
          res.quantity--;
        }
        return;
      }
    });
  }

 async generateOrder() {
    const orderFinal:OrderModel={
      id:uuidv4(),
      details: JSON.stringify(this.cart),
      subtotal:this.subtotal,
      total:this.total,
      userId:localStorage.getItem('username')
    };
    
    try{
      this.alerts.showAlertWaiting();
      const res = await this.productService.createOrder(orderFinal);
      this.alerts.showAlertSuccess('Tu orden se creó exitosamente');
      
    }catch(err){
      this.alerts.showAlertError('Ocurrio un error al crear tu orden, Por favor intentelo mas tarde');
    }
  }

  addCart(product:ProductModel) {
    const exist = this.cart.indexOf(product)!=-1;

    
    if(exist){
      this.cart=this.cart.filter(p=>p.id!=product.id);
      this.subtotal=0.00;
      this.total = 0.00;
      if(product.quantity>0){
        this.cart.push(product);
      }
    }else{
      if(product.quantity>0){
        this.cart.push(product);
      }
    }

    if(this.cart!=null && this.cart.length>0){
      this.subtotal = this.cart.map(res => res.price * res.quantity)?.reduce((old, next) => old + next);
      this.total = this.subtotal * 1.12;
    }
  }
  
}
