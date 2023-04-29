import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { PubformService } from './pubform.service';

@Component({
  selector: 'app-publishform',
  templateUrl: './publishform.component.html',
  styleUrls: ['./publishform.component.css']
})
export class PublishformComponent implements OnInit{
  addForm:any;
 
  constructor( 
    private formBuilder: FormBuilder,
    private router: Router,
    private pubformService:PubformService
    ) {

      this.addForm = this.formBuilder.group({
       
        fname: ['', [Validators.required, Validators.maxLength(20)]],  
        lname: ['', [Validators.required, Validators.maxLength(20)]],  
        aemail: ['', [Validators.required, Validators.maxLength(20)]] ,
        btitle: ['', [Validators.required, Validators.maxLength(20)]] ,
        bgenre : ['', [Validators.required, Validators.maxLength(20)]] ,
        bsummary: ['', [Validators.required, Validators.maxLength(20)]] 
      }
      )
     }

    

  ngOnInit() {
    
  }
 
 onSubmit(){
  this.pubformService.createPublish(this.addForm.value).subscribe(
    (data:any)=>{
      this.router.navigate(['/dashboard']);  
    },  
    (   error: any) => {  
     alert(error);
   });
}




  

}
