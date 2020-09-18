import { Component } from '@angular/core';
import { OrderModel } from 'src/app/models/order.model';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { AlertsService } from '../../services/alerts.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  orders:OrderModel[];
  detailSelect:ProductModel[];
  isOpen=false;

  images = [
    '../../../assets/img/play-4.png',
    '../../../assets/img/lenovo.jpg',
    '../../../assets/img/predador.jpg',
    '../../../assets/img/macbook.jpg',
  ];

  constructor(private productService:ProductService) {
    this.getHistory();
  }

  async getHistory(){
    this.orders = await this.productService.fetchOrders(localStorage.getItem('username'));
    console.table(this.orders);
    
  }

  openDetail(detail:string){
    this.detailSelect = JSON.parse(detail);
    console.table(this.detailSelect);
    this.isOpen=true;
  }
}
