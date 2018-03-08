import { Customer } from './../../models/Customer';
import { EditCustomerDialogComponent } from './../edit-customer-dialog/edit-customer-dialog.component';
import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[];
  editState: boolean = false;
  customerToDelete: Customer;

  constructor(
    private customerService: CustomerService,
    public dialog: MatDialog,
   
    
  ) { }

  ngOnInit() {
    
   this.customerService.getCustomers().subscribe(customers => {
     this.customers = customers;  
   
     
   }); 

  

  }


   deleteCustomer(customer){     
      this.customerService.deleteCustomer(this.customerToDelete);
   }

   getCustomer(customer) {
    this.customerToDelete=customer;
    console.log(this.customerToDelete)
    
  }

  

   openEditCustomerDialog(customer) {
    let dialogRef = this.dialog.open(EditCustomerDialogComponent, {
      width: '600px',
      data: customer,
    });
    
   
  }
  

}
