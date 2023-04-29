import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Authors } from '../author';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit{
  authors: any;

  constructor( private crudservice: CrudService) { }

  ngOnInit(): void {

    this.crudservice.getAuthors().subscribe(
      (result:any)=>{
        //console.log(result)
        this.authors  =  result.data;
      }
    )

  }

  deleteAuthor(author:any){
   // console.log(id);
    this.crudservice.deleteAuthor(author.id).subscribe(data=>{
      this.authors = this.authors.filter((u: any) => u !== author);
    })
  }




}
