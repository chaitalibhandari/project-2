import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../../services/cars.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Car} from '../../../models/car';
@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  id:number;
  car: Car = new Car();
  constructor(
    private carsServices:CarsService,
    private route:ActivatedRoute,
    private router:Router) {}

  ngOnInit() {

    this.route.paramMap
      .switchMap(params => {
        this.id = +params.get('id');
        return this.carsServices.getCar(this.id);
      })
      .subscribe(
        (car: Car) => {
          console.log(`Success: Get car successful. (id: ${this.id})`);
          this.car = car;
          console.log(this.car);
        },
        error => {
          console.log(`Error: Get car failed! (id: ${this.id})`, error);
        }
      );

  }

}
