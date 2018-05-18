import { Component,
   OnInit, 
    Output,
    EventEmitter,
    ViewChild, 
    ElementRef,
    ViewContainerRef, 
    ComponentFactoryResolver } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Car } from '../../../models/car';
import { CarsService } from '../../../services/cars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import { CarSpecificationDetailsComponent } from '../../../dashboard/cars/car-specification-details/car-specification-details.component';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
  
})
export class CarFormComponent implements OnInit {
   
  addNew: boolean;
  @ViewChild('f') carForm: NgForm;
 // @ViewChild('specification') specification: ElementRef;
 // @Output() carCreated = new EventEmitter<Car>();
  //@ViewChild('parent', { read: ViewContainerRef })    container: ViewContainerRef; 
  car:Car;
  id:number;
  showMessage = false;
  detail:number=1;
  

  constructor( private _cfr: ComponentFactoryResolver,private route: ActivatedRoute,private router: Router,private carsService: CarsService) 
  {

    this.car = new Car();
    this.addNew = true;
  }

  ngOnInit() {

    this.route.paramMap
    .switchMap(params => {
      if (!params.get('id') || params.get('id') === 'new') {
        return Observable.empty();
      }

      this.id = +params.get('id');
      return this.carsService.getCar(this.id);
    })
    .subscribe(
      (car: Car) => {
        console.log(`Success: Get car successful. (id: ${this.id})`);
        this.car = car;
        this.addNew = false;
      },
      error => {
        console.log(`Error: Get car failed! (id: ${this.id})`, error);
      }
    );

  }

  onSave() {
    console.log(this.carForm);
    this.car.id=this.carForm.value.carid;
    this.car.name = this.carForm.value.name;
   // this.car.description = this.carForm.value.description;
    this.car.price = this.carForm.value.price;
   // this.car.isAvailable = this.carForm.value.isAvailable ? this.carForm.value.isAvailable: false;

    if (this.addNew) {
      this.carsService.addCars(this.car).subscribe(
        car => {
          console.log('Success: Add car successful. car:', car);
          this.router.navigate(['dashboard/cars/carlist']);
        }
      );
    } else {

      //console.log(this.car);
      this.carsService.updateCar(this.id, this.car).subscribe(
        car => {
          console.log('Success: Update car successful. product:', car);
          this.router.navigate(['dashboard/cars/carlist']);
        },
        error => {
          console.log(`Error: Update product failed. (id: ${this.id})`);
        }
      );
    }
   
  }

  

  remove_details(){

      console.log('remove clicked');
  }

 
}
