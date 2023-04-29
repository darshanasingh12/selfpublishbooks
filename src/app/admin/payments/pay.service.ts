import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payments } from './payments';

@Injectable({
  providedIn: 'root'
})
export class PayService {
  constructor( private http: HttpClient) { }
  baseUrl: string = 'http://localhost/angular_admin/php/';

  getPayments() {
    return this.http.get<Payments[]>(this.baseUrl+'pview.php');
  } 

  getSinglePayments(id:any) {
    return this.http.get<Payments[]>(this.baseUrl+'pview.php?id='+id);
  }

  
}
