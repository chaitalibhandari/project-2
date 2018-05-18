import { Component, OnInit ,Input} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Input() address: Customer;
  @Input('group') public adressForm: FormGroup;

  constructor() { }

  ngOnInit() { }
  
}
