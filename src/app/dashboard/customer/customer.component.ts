import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../../models/customer';
import { AddressComponent } from '../../dashboard/address/address.component';
import {ImageuploaderComponent} from '../../dashboard/imageuploader/imageuploader.component'
import { CustomerService } from '../../services/customer.service';
@Component({
  moduleId: module.id,
  selector: 'app-customer',
  templateUrl: 'customer.component.html',

})
export class CustomerComponent implements OnInit {
    public myForm: FormGroup;
    customer:Customer;
    control:any;
    imageControl:any;
    addImageCtrl:any;
    addrCtrl:any;

    constructor(private _fb: FormBuilder,private customerService:CustomerService) {

      this.customer = new Customer();

     }

    ngOnInit() {

      this.customer.name="qqqqq";
      this.customer.addresses=[
                                {street:"aaaaaa",postcode:"405"},
                                {street:"tara",postcode:"406"},
                                
                                
                              ];
                              
          

      this.myForm = this._fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            addresses: this._fb.array([]),
            images:this._fb.array([])
        });

      this.initialiseControls();    
      this.initialiseImageControls();                   
      // control.push(this.fb.group({amount: x.amount}))   
      this.customer.addresses.forEach(x => {
        this.control.push(this._fb.group({street: [x.street, Validators.required],postcode:[x.postcode]}))
      })   ; 

      this.addAddress();
      this.addImage();
                                                     
    }

    initAddress() {
         return this._fb.group({
            street: ['', Validators.required],
            postcode: ['']
        });
    }
    initImage(){

      return this._fb.group({
            image: [''],
        });
    }
    initialiseControls(){

      this.control = <FormArray>this.myForm.controls['addresses'];
      this.addrCtrl = this.initAddress();  
    }
    

    initialiseImageControls(){
      this.imageControl = <FormArray>this.myForm.controls['images'];
      this.addImageCtrl = this.initImage();  
    }

    addAddress() {
        this.initialiseControls();
        this.control.push(this.addrCtrl);
       // console.log(this.control);
    }
    addImage() {
      this.initialiseImageControls();
      this.imageControl.push(this.addImageCtrl);
      //console.log(this.imageControl);
    }

    removeAddress(i: number) {
        const control = <FormArray>this.myForm.controls['addresses'];
        control.removeAt(i);
    }

    imageFile(event){
      
      this.myForm.value.images.image=event;
    //  console.log("IMAGE=",this.myForm.get('images').value);
      //console.log("LENGTH=",this.myForm.value.images.length);
    }

    prepareSave() {
      let input = new FormData();
      
      for (let i = 0; i < this.myForm.value.images.length; i++) {
        console.log(this.myForm.value.images[i]);
        input.append(`images[]`,this.myForm.value.images[i].image);
      }
      //  console.log(this.myForm.value.addresses);
        input.append('address',this.myForm.value.addresses);
      //input.append('images', this.myForm.get('images').value);
      //console.log("value=",this.myForm.controls.images.value);
      return input;
    }

    save(model: Customer) {

      const formModel = this.prepareSave();
      this.customerService.add_customer(formModel).subscribe(
        response => {
          console.log('customer:', response);
        },
        error=>{
          console.log('customer:', error);
        }
      );
     
      console.log(formModel);
        // call API to save
       
      //  input.append('avatar', this.myForm.get('images').value);
       // console.log(this.myForm);
      
     // console.log("formData:"+ this.myForm);
     

    }
}