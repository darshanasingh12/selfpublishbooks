import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiiService } from './apii.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  implements OnInit{
angForm: FormGroup ;

constructor(private fb: FormBuilder,private dataService: ApiiService,private router:Router) {
this.angForm = this.fb.group({
email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
password: ['', Validators.required]
});
}
ngOnInit() {
}
get f() { return this.angForm.controls; }

postdata(angForm1 : any)
{
this.dataService.userlogin(angForm1.value.email,angForm1.value.password)
.pipe(first())
.subscribe(
data => {
const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/manuscript';
this.router.navigate([redirect]);
},
error => {
alert("Please fill the details properly")
});
}
get email() { return this.angForm.get('email'); }
get password() { return this.angForm.get('password'); }
  
}
