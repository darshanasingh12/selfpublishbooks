import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-edit-otp',
  templateUrl: './edit-otp.component.html',
  styleUrls: ['./edit-otp.component.css']
})
export class EditOtpComponent implements OnInit{
  addForm:any;
  
 
  author_id: any;
  
 
  constructor( 
    private formBuilder: FormBuilder,
    private router: Router,
    private crudService:CrudService,
    private url:ActivatedRoute
    ) {
      this.addForm = this.formBuilder.group({
        id:[],
        name: ['', Validators.required],  
        email: ['', [Validators.required, Validators.maxLength(20)]] ,
        password: ['', [Validators.required, Validators.maxLength(20)]] ,
         
      }
      )
     }

         
     ngOnInit(): void {
      this.author_id = this.url.snapshot.params['id'];
      if (this.author_id>0) {
        this.crudService.getSingleAuthor(this.author_id).subscribe((
          (data:any)=>{
            this.addForm.patchValue(data.data);
          }
        ))
      }
    }
    
    onEdit(){
       this.crudService.editAuthor(this.addForm.value).subscribe(
         (data:any)=>{
           console.log(data);
           this.router.navigate(['/otp']);  
         },  
         (        error: any) => {  
          alert(error);
        });
     }
   }

     
