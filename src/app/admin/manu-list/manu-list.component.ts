import { Component,Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { FileUploadService } from 'src/app/upload-form/file-upload.service';

@Component({
  selector: 'app-manu-list',
  templateUrl: './manu-list.component.html',
  styleUrls: ['./manu-list.component.css']
})
export class ManuListComponent {
  fileUploads: any[] | undefined;

  constructor(private uploadService: FileUploadService) { }

  ngOnInit(): void {
    this.uploadService.getFiles(6).snapshotChanges().pipe(
      map(changes  =>
        // store the key
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe((fileUploads: any[] | undefined) => {
      this.fileUploads = fileUploads;
    });
  }


}
