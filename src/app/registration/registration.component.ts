import { Component, OnInit, Output,EventEmitter, ViewChild ,ElementRef} from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators, NgForm } from '@angular/forms';
import { AppValidators } from '../app-validators';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  user:User;
  url:string;
  //@ViewChild('f') userForm: NgForm;
 
  successMessage:boolean=false;
  ifNotImage:boolean=false;
  @ViewChild('fileInput') fileInput: ElementRef;
  constructor(private userService:UsersService,private datepipe: DatePipe) {
    this.user=new User;    
   }

  ngOnInit() {
    this.createForm();
  }
 
  onFileChange(event){


    if (event.target.files && event.target.files[0]) {
      
      let reader = new FileReader();
      if(event.target.files && event.target.files.length > 0) {

        let file = event.target.files[0];
      //  console.log(file);
        if(file.type=='image/jpeg' || file.type=='image/jpg' || file.type=='image/png')
        {
          this.ifNotImage=false;
          reader.readAsDataURL(file);
          this.form.get('avatar').setValue(file);
          console.log("IMAGE=",this.form.get('avatar').value);
          reader.onload = (event:any) => {
            this.url = event.target.result;

          }
        }
        else{
          this.ifNotImage=true;
        }  

    }
  }
  

  }
  private createForm(){
      this.form=new FormGroup({
        fname:new FormControl('',[ 
          Validators.required,
          Validators.minLength(4),
          AppValidators.cannotContainSpace]),
        mname:new FormControl('',Validators.minLength(4)), 
        address:new FormControl(''),  
        phone:new FormControl(''), 
        pincode:new FormControl(''),
        date_of_birth:new FormControl(''),   
        //AppValidators.checkUser.bind(AppValidators)       
        lname:new FormControl('',Validators.required),
        email:new FormControl('',[Validators.required,Validators.email]),
        username:new FormControl('',Validators.required,AppValidators.checkUser(this.userService)),//for asynchronous,pass it as third parameter
        avatar:new FormControl(''),
        imageH:new FormControl(''),
      
        passwords: new FormGroup({
          password: new FormControl('', Validators.required),
          cpassword: new FormControl('', Validators.required)
        },AppValidators.matchPassword)

      });

      //console.log(this.form.get('passwords').matchPassword);    
  }

  private prepareSave(): any {

    let input = new FormData();
    //console.log(this.form.controls);

    input.append('fname', this.fname.value);
    input.append('mname', this.mname.value);
    input.append('avatar', this.form.get('avatar').value);
    input.append('lname', this.lname.value);

    input.append('email', this.email.value);
    input.append('username', this.username.value);
    input.append('password', this.password.value);
    input.append('address', this.address.value);
    input.append('phone', this.phone.value);
    input.append('pincode', this.pincode.value);

    let latest_date =this.datepipe.transform(this.date_of_birth.value, 'yyyy-MM-dd');
    input.append('date_of_birth', latest_date);
    
   
    return input;
  }


  onSubmit(){

    const formModel = this.prepareSave();
    this.userService.adduser(formModel).subscribe(
    response => {
      this.successMessage=true;

      console.log('User:', response);
      this.form.reset();
      this.clearFile();

      setTimeout(() => {
        this.successMessage = false;
      }, 3000);

    },
    error=>{
      console.log('User:', error);

    }
  );
  }

  clearFile() {
    this.form.get('avatar').setValue(null);
    this.fileInput.nativeElement.value = '';
    this.ifNotImage=false;
    this.url =" ";

  }

 

  get fname(){
    return this.form.get('fname');
  }
  get mname(){
    return this.form.get('mname');
  }
  get lname(){
    return this.form.get('lname');
  }
  get username(){
    return this.form.get('username');
  }
  get passwords(){
    return this.form.get('passwords');
  }
  get password(){
    return this.form.get('passwords.password');
  }
  get address(){
    return this.form.get('address');
  }
 // avatar
  get avatar(){
    return this.form.get('avatar');
  }
  get phone(){
    return this.form.get('phone').value
  }
  get pincode(){
    return this.form.get('pincode').value
  }
  get cpassword(){
    return this.form.get('passwords.cpassword');
  }
  get email(){
    return this.form.get('email');
  }
  get date_of_birth()
  {
    return this.form.get('date_of_birth');
  }

}
