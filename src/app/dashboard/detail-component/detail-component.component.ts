import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css']
})
export class DetailComponentComponent implements OnInit {
 // @Input() address: Customer;
  @Input('group') public detailForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
