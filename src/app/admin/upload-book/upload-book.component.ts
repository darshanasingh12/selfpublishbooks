import { Component } from '@angular/core';
import { BookService } from 'src/app/book-list/book.service';

@Component({
  selector: 'app-upload-book',
  templateUrl: './upload-book.component.html',
  styleUrls: ['./upload-book.component.css']
})
export class UploadBookComponent {
  constructor(private service:BookService) { }

  ngOnInit() {
    this.service.getImageDetailList();
  }

}
