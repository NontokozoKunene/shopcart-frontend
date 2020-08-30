import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    private apis: ApiService,
    private router: Router,
  ) { }

  headers = ['#','Name','Descriptions', 'Price'];
  cart = [];

  ngOnInit() {
    this.apis.get_cart()
    .subscribe(
      data =>{
        this.cart = data;
        console.log(data)
      }
    ),error =>{
      console.log(error);
    }
  }

}
