import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit{

  applications: any;
  

  constructor( private appservice: AppService) { }

  ngOnInit(): void {

    this.appservice.getApplications().subscribe(
      (result:any)=>{
        //console.log(result)
        this.applications  =  result.data;
      }
    )
  }

  

}
