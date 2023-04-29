import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PubformService {

  constructor( private http: HttpClient) { }
  baseUrl: string = 'http://localhost/angular_admin/php/';

  createPublish(publish:any) {
    return this.http.post(this.baseUrl+'publish.php', publish);  
  }  
}
