import { CustomerService } from './../../services/customer.service';
import { Customer } from './../../models/Customer';
import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef} from '@angular/material';



@Component({
  selector: 'app-edit-customer-dialog',
  templateUrl: './edit-customer-dialog.component.html',
  styleUrls: ['./edit-customer-dialog.component.css']
})
export class EditCustomerDialogComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<EditCustomerDialogComponent>, @Inject(MAT_DIALOG_DATA) public customer: Customer,private CustomerService : CustomerService) { }

  ngOnInit() {

    console.log(this.customer);
  }


  onUpdate(){
    this.CustomerService.updateCustomer(this.customer);
    this.thisDialogRef.close();
  }

}
