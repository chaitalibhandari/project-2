import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Customer, Images } from '../../models/customer';
import { Car, Details } from '../../models/car';
import { CustomerService } from '../../services/customer.service';
import { CarDetailsService } from '../../services/car-details.service';

@Component({
  selector: 'app-minute-details',
  templateUrl: './minute-details.component.html',
  styleUrls: ['./minute-details.component.css']
})
export class MinuteDetailsComponent implements OnInit {
  public myForm: FormGroup;
  car:Car;
  selectedValue="1";
  public detailObject :Details[];
  
  public roles = [
    { value: '1', display: 'Administrator' },
    { value: '2', display: 'Guest' },
    { value: '3', display: 'Custom' }
];
 constructor(private _fb: FormBuilder,private cardetailservice:CarDetailsService) { }

  ngOnInit() {

    this.initForm();
    console.log("OBJECT==",this.detailObject);

  }

  initForm(car?: Car){

    let details: FormArray = new FormArray([]);
    let images: FormArray = new FormArray([]);

    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required), 
      model: new FormControl('', Validators.required), 
      role:new FormControl('', Validators.required), 
      details: details
    });

    this.addDetails();
    this.addImage(0);

  }

 
  addDetails(details?: Details){

    let images = new FormArray([]);
    let title = '';
    let description='';
    (<FormArray>this.myForm.controls['details']).push(
      new FormGroup({
        title: new FormControl(title, Validators.required),
        description: new FormControl(description, Validators.required),
        images: images
      })
    )
 //this.addImage(0);
  }

  onChange(event){
    console.log("chane called",event);

  }

  addImage(index: number, image?: Images) {
   

    (<FormArray>(<FormGroup>(<FormArray>this.myForm.controls['details'])
      .controls[index]).controls['images']).push(
        new FormGroup({
          image: new FormControl('')
        })
    )
 
  }




  imageFile(event,i,j){
      this.myForm.value.details[i].images[j].image=event; 
  }

  prepareSave() {

    let input = new FormData();

    input.append('name', this.myForm.get('name').value);
    input.append('model', this.myForm.get('model').value);


    for (let i = 0; i < this.myForm.value.details.length; i++)
    {
      
      //console.log(this.myForm.value.details[i].images);
    //  input.append(this.detailObject.title,this.myForm.value.details[i].title);

      input.append(`details[title][`+i+`]`,this.myForm.value.details[i].title);
      input.append(`details[description][`+i+`]`,this.myForm.value.details[i].description);
      for(let j=0;j<this.myForm.value.details[i].images.length;j++){

        input.append(`details[images][`+i+`][`+j+`]`,this.myForm.value.details[i].images[j].image);    
        console.log("image==",this.myForm.value.details[i].images[j].image);

      }

    }


    return input;

  }  

  save(){
    
    const formModel = this.prepareSave();
    console.log(formModel);
    this.cardetailservice.add_car_details(formModel).subscribe(
      response => {
        console.log('customer:', response);
      },
      error=>{
        console.log('customer:', error);
      }
    );

  }  
    
}
