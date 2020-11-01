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
  
  //logic
  public showPrice(){
    return 8987;
  }
 
}
