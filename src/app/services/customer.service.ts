import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import {Customer} from '../models/Customer';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CustomerService {
  customerCollection : AngularFirestoreCollection<Customer>;
  customers: Observable<Customer[]>;
  customerDoc: AngularFirestoreDocument<Customer>;
  constructor(public afs: AngularFirestore) { 
    this.customerCollection = this.afs.collection('customers', ref => ref.orderBy('firstname','asc'));

    //this.customers = this.afs.collection('customers').valueChanges();
    this.customers = this.customerCollection.snapshotChanges().map(changes =>{return changes.map(a => {

      const data= a.payload.doc.data() as Customer;
      data.id = a.payload.doc.id;
      return data;
    })});
  }



  getCustomers(){
    return this.customers;
  }

  addCustomer(customer : Customer){
    this.customerCollection.add(customer);

  }


  deleteCustomer(customer: Customer){
      this.customerDoc = this.afs.doc(`customers/${customer.id}`);
      this.customerDoc.delete(); 
  }

  updateCustomer(customer: Customer){
    this.customerDoc = this.afs.doc(`customers/${customer.id}`);
    this.customerDoc.update(customer); 

  }

}


