import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Applications } from './application';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor( private http: HttpClient) { }
  baseUrl: string = 'http://localhost/angular_admin/php/';

  getApplications() {
    return this.http.get<Applications[]>(this.baseUrl+'aview.php');
  } 

  getSingleApplications(id:any) {
    return this.http.get<Applications[]>(this.baseUrl+'aview.php?id='+id);
  }

  editApplications(author:any) {
      return this.http.put(this.baseUrl+'aupdate.php', author);  
  } 

  
} 