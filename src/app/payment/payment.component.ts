import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { PayService } from './pay.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
  
  addForm:any;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private payService:PayService) {
  }
  ngOnInit() {
    
  }
 
 onSubmit(){
  this.payService.createPayment(this.addForm.value).subscribe(
    (data:any)=>{
      this.router.navigate(['/dashboard']);  
    },  
    (   error: any) => {  
     alert("Error. Fill it correctly");
   });
  }
}
