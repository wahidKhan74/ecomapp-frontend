import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //data
  title = 'ecomapp';
  name:string = "Will Smith";
  product  = {
    name :"Lenovo Ideapad 620",
    description :"Best Lenove Laptop",
    price:222222
  }

  //logic
  public showPrice(){
    return this.product.price;
  }
 
}
