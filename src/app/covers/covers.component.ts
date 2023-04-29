import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'
import { EmailService } from './email.service';


@Component({
  selector: 'app-covers',
  templateUrl: './covers.component.html',
  styleUrls: ['./covers.component.css']
})
export class CoversComponent  implements OnInit {
  
  FormData: FormGroup | any;
  constructor(private builder: FormBuilder, private contact: EmailService) { }

  ngOnInit() {
    this.FormData = this.builder.group({
      FirstName: new FormControl('', [Validators.required]),
      LastName: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required]),
      Description: new FormControl('', [Validators.required])
    });
  }

  onSubmit(FormData: any) {
    console.log(FormData)
    this.contact.PostMessage(FormData)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }
  
}


