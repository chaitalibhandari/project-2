import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient,
  HttpErrorResponse,
  HttpParams,
  HttpHeaders,
  HttpResponse } from '@angular/common/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
@Injectable()
export class UsersService {
  loggedIn = false;
  public user=new User;
  check_user=this.urlService.check_user;
  user_add_url=this.urlService.user_add_url;
  check_user_name=this.urlService.check_user_name;
  constructor(private httpClient:HttpClient,private urlService:UrlService) { }

  checkUser(user:User){

    return this.httpClient.post<User>(this.check_user,user);
}

isAuthenticated() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.loggedIn);
    }, 2000);
  });
  return promise;
}

login(res) {

  this.loggedIn = true;
  this.user.id=res.id;
  this.user.username=res.username;
}

adduser(user):Observable<User>{
  return this.httpClient.post<User>(this.user_add_url,user);

}

checkUsername(username)
{
  const params = new HttpParams().set('username', username);
  return this.httpClient.get(`${this.check_user_name}`,  { params });
}

logout() {
  this.loggedIn = false;
}

isLoggedIn(){
  return this.loggedIn;
}

getUser(){
  return this.user;
}
}
