import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-specification-details',
  templateUrl: './car-specification-details.component.html',
  styleUrls: ['./car-specification-details.component.css']
})
export class CarSpecificationDetailsComponent implements OnInit {

  _ref:any;  

  constructor() { }

  ngOnInit() {
  }

  removeObject(){
    this._ref.destroy();
  }
}
