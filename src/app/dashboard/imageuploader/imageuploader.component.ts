import { Component, OnInit ,Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-imageuploader',
  templateUrl: './imageuploader.component.html',
  styleUrls: ['./imageuploader.component.css']
  //encapsulation:ViewEncapsulation.Native
})
export class ImageuploaderComponent implements OnInit {

  @Input('imagegroup') public imageForm: FormGroup;
  @Output() imageFile = new EventEmitter<any>();
  @Output() onVoted = new EventEmitter<boolean>();
  voted = false;
  url="";
  constructor(private customerService:CustomerService) { }

  ngOnInit() {
  }

  imageLoad(event){
    //console.log(event);
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      if(event.target.files && event.target.files.length > 0) {
        let file = event.target.files[0];
        
        this.imageForm.value.image=file;
        reader.readAsDataURL(file);
        reader.onload = (event:any) => {
          this.url = event.target.result;

        }
        this.imageFile.emit(file);

       }

    }
  }

  vote(agreed: boolean) {
    this.onVoted.emit(agreed);
    this.voted = true;
  }

}
