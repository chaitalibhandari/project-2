import { Component, OnInit, Output,EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators, NgForm } from '@angular/forms';
import { AppValidators } from '../app-validators';
import { User } from "../models/user";

import { UsersService } from '../services/users.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  url:string;
  user:User;
  isNotValidUser:boolean;
  

  
  @ViewChild('f') userForm: NgForm;
  constructor(private userService:UsersService,private route: ActivatedRoute,private router: Router,) { 
    this.user = new User();
    this.isNotValidUser = false;
    

  }

  ngOnInit() {

   this.createForm();

  }

  private createForm(){
    this.form=new FormGroup({
      login: new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      })
    });
  }

  onSubmit(){
    console.log("submit is called");
    
    this.userService.checkUser(this.user).subscribe(
      response => {
        console.log('Success: Add car successful. car:', response.isValid);
        //
        if(response.isValid==true)
        { 
          this.isNotValidUser=false;
          
          this.userService.login(response);
         
          this.router.navigate(['dashboard/profile']);
        }
        else{
          this.isNotValidUser=true;
        }
       
      },
      error => {
        console.log('Error: check user failed.');
      }
    );

    
  }

  logout(){


  }

  get login(){
    return this.form.get('login');
  }
  get username(){
    return this.form.get('login.username');
  }
  get password(){
    return this.form.get('login.password');
  }
}
