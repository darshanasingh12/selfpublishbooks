import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../applications/app.service';


@Component({
  selector: 'app-edit-app',
  templateUrl: './edit-app.component.html',
  styleUrls: ['./edit-app.component.css']
})
export class EditAppComponent {
  addForm:any;
  applications_id: any;
  
  constructor( 
    private formBuilder: FormBuilder,private router: Router,private appService:AppService,private url:ActivatedRoute) 
    {
      this.addForm = this.formBuilder.group({
        id:[],
        status: ['', Validators.required],          
      }
      )
     }

     ngOnInit(): void {
      this.applications_id = this.url.snapshot.params['id'];
      if (this.applications_id>0) {
        this.appService.getSingleApplications(this.applications_id).subscribe((
          (data:any)=>{
            this.addForm.patchValue(data.data);
          }
        ))
      }
    }
    
    onEdit(){
       this.appService.editApplications(this.addForm.value).subscribe(
         (data:any)=>{
           console.log(data);
           this.router.navigate(['/applications']);  
         },  
         (        error: any) => {  
          alert(error);
        });
     }

}
