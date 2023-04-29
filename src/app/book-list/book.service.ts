import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  imageDetailList: AngularFireList<any> |any;
  constructor(private firebase: AngularFireDatabase) { 
    this.imageDetailList = this.firebase.list('imageDetails');
  }
  getImageDetailList() {
    this.imageDetailList = this.firebase.list('imageDetails');
  }

  insertImageDetails(imageDetails: any) {
    this.imageDetailList.push(imageDetails);
  }
}
