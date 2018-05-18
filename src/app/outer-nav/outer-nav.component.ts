import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outer-nav',
  templateUrl: './outer-nav.component.html',
  styleUrls: ['./outer-nav.component.css']
})
export class OuterNavComponent implements OnInit {
 
  showOuterMenu:boolean=true;
  constructor(private userService:UsersService,private router: Router) { }

  ngOnInit() {
    if(this.userService.isLoggedIn())
    {
      this.showOuterMenu=false;
      console.log("ssssss");
      this.router.navigate(['dashboard']);
    }
  }

}
