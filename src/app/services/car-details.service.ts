import { Injectable } from '@angular/core';
import { HttpClient,
  HttpErrorResponse,
  HttpParams,
  HttpHeaders,
  HttpResponse } from '@angular/common/http';
import {Car} from '../models/car';
import { UrlService } from '../services/url.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
//import { AppError } from '../common/app-error';

@Injectable()


export class CarDetailsService {

  private car_detail_url=this.urlService.car_details_add_url;

  constructor(private httpClient:HttpClient,private urlService:UrlService) { }

  add_car_details(newCar):Observable<Car>{

    return this.httpClient.post<Car>(this.car_detail_url,newCar);
  
  }

}
