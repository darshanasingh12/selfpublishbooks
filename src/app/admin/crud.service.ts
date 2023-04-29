import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Authors } from './author';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  constructor( private http: HttpClient) { }
  baseUrl: string = 'http://localhost/angular_admin/php/';

  getAuthors() {
    return this.http.get<Authors[]>(this.baseUrl+'view.php');
  } 

  getSingleAuthor(id:any) {
    return this.http.get<Authors[]>(this.baseUrl+'view.php?id='+id);
  } 
  
  deleteAuthor(id:any) {
    console.log(id);
    return this.http.delete(this.baseUrl+'delete.php?id='+ id);  
  }  

  createAuthor(author:any) {
    return this.http.post(this.baseUrl+'insert.php', author);  
  }  

  editAuthor(author:any) {
      return this.http.put(this.baseUrl+'update.php', author);  
    }  


  
}