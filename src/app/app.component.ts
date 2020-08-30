import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopcart';
  constructor(
    private apis: ApiService,
    private router: Router,
  ) { }

  headers = ['#','Name','Descriptions', 'Price'];
  products = [];

  ngOnInit() {
    this.apis.get_product()
    .subscribe(
      data =>{
        this.products = data;
        console.log(data)
      }
    ),error =>{
      console.log(error);
    }
  }


  add_to_cart(Name :any, quantity: any){
    this.apis.add_to_cart(Name,quantity)
    .subscribe(
      data =>{
        console.log(data)
      }
    ),error =>{
      console.log(error);
    }
  }
  
}
