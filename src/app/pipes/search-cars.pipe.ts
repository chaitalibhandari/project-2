import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'searchCars',
  pure:false
})
export class SearchCarsPipe implements PipeTransform {

  transform(cars: Car[], searchText: string, field: string): Car[] {
   
    const filteredCars = cars.filter(function(car) {
      return (
        car[field].toLowerCase().indexOf(searchText.toLowerCase()) >= 0
      );
    });
    return filteredCars
  }

 

}
