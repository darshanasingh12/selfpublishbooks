import { Component } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  imageList: any;
  rowIndexArray: any;

  constructor(private service: BookService) { }

  ngOnInit() {
    this.service.imageDetailList.snapshotChanges().subscribe(
      (      list: any[]) => {
        this.imageList = list.map((item: { payload: { val: () => any; }; }) => { return item.payload.val(); });
        this.rowIndexArray =  Array.from(Array(Math.ceil((this.imageList.length+1) / 3)).keys());
      }
    );
  }
}
