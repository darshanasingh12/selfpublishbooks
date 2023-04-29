import { Component, OnInit } from '@angular/core';
import { PayService } from './pay.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent {
  payments: any;
  constructor( private payservice: PayService) { }

  ngOnInit(): void {

  this.payservice.getPayments().subscribe(
    (result:any)=>{
      //console.log(result)
      this.payments =  result.data;
    }
  )
  }
}
