import { Customer } from './../../models/Customer';
import { CustomerService} from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customer: Customer ={
    firstname: '',
    surename: '',
    adress:'',
    device:'',
    email:'',
    telNumber:''
  }

  constructor(private CustomerService : CustomerService) { }

  ngOnInit() {
  }


  onSubmit(){
     if(this.customer.firstname!='' && this.customer.surename!='' && this.customer.adress!=''
      && this.customer.device!='' && this.customer.email!='' && this.customer.telNumber!='')
      this.CustomerService.addCustomer(this.customer);

      this.customer.firstname = ''
      this.customer.surename = ''
      this.customer.adress = ''
      this.customer.device = ''
      this.customer.telNumber = ''
      this.customer.email = ''
      
      
  }
}
