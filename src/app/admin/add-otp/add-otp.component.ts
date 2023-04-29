import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-add-otp',
  templateUrl: './add-otp.component.html',
  styleUrls: ['./add-otp.component.css']
})
export class AddOtpComponent implements OnInit{
  addForm:any;
 
  constructor( 
    private formBuilder: FormBuilder,
    private router: Router,
    private crudService:CrudService
    ) {

      this.addForm = this.formBuilder.group({
       
        name: ['', [Validators.required]],  
        email: ['', [Validators.required]] ,
        password: ['', [Validators.required]] 
      }
      )
     }

    

  ngOnInit() {
    
  }
 
 onSubmit(){
  this.crudService.createAuthor(this.addForm.value).subscribe(
    (data:any)=>{
      this.router.navigate(['/otp']);  
    },  
   error => {  
     alert(error);
   });
}
}
