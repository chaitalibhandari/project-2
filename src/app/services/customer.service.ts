import { Injectable } from '@angular/core';
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
import { Customer } from '../models/customer';
@Injectable()
export class CustomerService {
  add_customer_url=this.urlService.add_customer_url;
  constructor(private httpClient:HttpClient,private urlService:UrlService) { }

  add_customer(customer):Observable<Customer>{
    return this.httpClient.post<Customer>(this.add_customer_url,customer);
  }

}
