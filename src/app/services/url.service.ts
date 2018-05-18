import { Injectable } from '@angular/core';

@Injectable()
export class UrlService {
  api_server:string="http://localhost/car-inventory/";
  
  cars_url:string=this.api_server+"cars/get_cars.php";
  car_url:string=this.api_server+"cars/get_car.php";
  car_update_url:string=this.api_server+"cars/update_car.php";
  car_add_url:string=this.api_server+"cars/add_car.php";
  car_details_add_url:string=this.api_server+"cars/add_car_details.php";

  check_user:string=this.api_server+"users/check_user.php";
  check_user_name:string=this.api_server+"users/check_user_name.php";
  user_add_url:string=this.api_server+"users/check_image.php";

  //customers
  add_customer_url:string=this.api_server+"customers/add_customer.php";



  constructor() { }

}
