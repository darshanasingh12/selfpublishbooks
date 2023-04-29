import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alogin',
  templateUrl: './alogin.component.html',
  styleUrls: ['./alogin.component.css']
})
export class AloginComponent  implements OnInit{
  loginObj: any = {
    userName: '',
    password:''
  };
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onLogin(){
   
   if (this.loginObj.userName == 'admin' && this.loginObj.password =='admin@123') {
      localStorage.setItem('role','admin');
      this.router.navigateByUrl('/adashboard');
    }
  

   
  }



}
