import { Component } from '@angular/core';

@Component({
  selector: 'app-royalty-cal',
  templateUrl: './royalty-cal.component.html',
  styleUrls: ['./royalty-cal.component.css']
})
export class RoyaltyCalComponent {
  
  isDisplay: boolean = false;
  resulttotal: any;
  resultpers: any;

 
 toggleButton(subtotal: any, prct: any, nbr: any) {
 
 this.isDisplay = !this.isDisplay;
 this.calculate (subtotal, prct, nbr);  
 
}

calculate(subtotal: any, prct: any, nbr: any) {

this.resulttotal = parseInt (subtotal, 10) * parseInt (prct, 10) / 100 ;
this.resultpers = this.resulttotal * parseInt (nbr, 10);
}


}
