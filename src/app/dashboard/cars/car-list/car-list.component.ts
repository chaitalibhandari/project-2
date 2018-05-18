import { Component, OnInit } from '@angular/core';
import { Car } from '../../../models/car';
import { CarsService } from '../../../services/cars.service';
@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Car[] = [];
  searchText = '';
  constructor(private carsservice: CarsService) { }

  ngOnInit() {
    this.carsservice.getCars().subscribe(
      (cars: Car[])=> { 
        this.cars=cars;
       },
      error=> { 
        console.log('error in fetching data',error) 
      }
    );
    //console.log(this.cars);

  }
}
