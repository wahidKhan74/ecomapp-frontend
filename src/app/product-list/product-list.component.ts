import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private productSource = "assets/products.json";
  public productList;

  product  = {
    name :"Lenovo Ideapad 620",
    description :"Best Lenove Laptop",
    price:222222
  }

  pageTitle :string ="This is awesome web page.";
  imageUrl:string='assets/nature.jpeg';

  messageText:string ="";
  commentText:string =""
  
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get(this.productSource).subscribe( data=>{
      console.log(data); 
      this.productList = data;     
    }, err=>{
      console.log(err);      
    })
  }

  submitAction(event){
    console.log(event.target.value);  
    this.messageText = event.target.value;  
    // console.log("Submit Action is called !");
  }
}
