import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-dashboard-menubar',
  templateUrl: './dashboard-menubar.component.html',
  styleUrls: ['./dashboard-menubar.component.css']
})
export class DashboardMenubarComponent implements OnInit {

  constructor(private userService:UsersService) { }
  user:User=new User();
  ngOnInit() {
    console.log('logedIn='+this.userService.isLoggedIn());
    console.log(this.userService.getUser());
    this.user.id=this.userService.getUser().id;
    this.user.username=this.userService.getUser().username;
    
  }

}
