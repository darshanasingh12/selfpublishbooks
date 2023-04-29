import { Component,Input } from '@angular/core';
import { FileUpload } from 'src/app/upload-form/file-upload.model';
import { FileUploadService } from 'src/app/upload-form/file-upload.service';

@Component({
  selector: 'app-manu-details',
  templateUrl: './manu-details.component.html',
  styleUrls: ['./manu-details.component.css']
})
export class ManuDetailsComponent {
  @Input() FileUpload: FileUpload | any;

  constructor(private uploadService: FileUploadService) { }

  ngOnInit(): void {
  }

  deleteFileUpload(FileUpload :any) {
    this.uploadService.deleteFile(FileUpload);

  }

}
