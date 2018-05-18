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
export class CarsService {

  private api_url=this.urlService.cars_url;
  private car_url=this.urlService.car_url;
  private car_update_url=this.urlService.car_update_url;
  private car_add_url=this.urlService.car_add_url;


  constructor(private httpClient:HttpClient,private urlService:UrlService) { }
  getCars():Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.api_url);
  }

  getCar(carid): Observable<Car> {
  // const params = new HttpParams().set('_page', "1").set('_limit', "1");
    const params = new HttpParams().set('id', carid);
    return this.httpClient.get<Car>(`${this.car_url}`,  { params });
  }  
  
  addCars(newCar:Car):Observable<Car> {
    return this.httpClient.post<Car>(this.car_add_url,newCar);
  }

  updateCar(id:number,car:Car) : Observable<Car> {
    return this.httpClient.post<Car>(`${this.car_update_url}/${id}`, car);
  }

 
}
