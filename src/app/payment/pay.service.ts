import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PayService {

  constructor( private http: HttpClient) { }
  baseUrl: string = 'http://localhost/angular_admin/php/';

  createPayment(payment:any) {
    return this.http.post(this.baseUrl+'payment.php', payment);  
  }  
}
