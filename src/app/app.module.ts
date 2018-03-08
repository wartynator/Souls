import {MatDialogModule } from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import { CustomerService } from './services/customer.service';
import { WorkListsComponent } from './components/work-lists/work-lists.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from  '@angular/forms';



import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';
import { MenuComponent } from './menu/menu.component';
import { DevicesComponent } from './components/devices/devices.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { EditCustomerDialogComponent } from './components/edit-customer-dialog/edit-customer-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    EditCustomerDialogComponent,
    AppComponent,
    CustomersComponent,
    MenuComponent,
    HomeComponent,
    DevicesComponent,
    WorkListsComponent,
    AddCustomerComponent,
      
  ],
  imports: [
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    BrowserModule,
    MatDialogModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase,"Souls"),
    AngularFirestoreModule,
    RouterModule.forRoot([
        {path: '', component: HomeComponent},
        {path: 'components/customers', component: CustomersComponent},
        {path: 'components/devices', component: DevicesComponent},
        {path: 'components/work-lists', component: WorkListsComponent},
        

    ],{onSameUrlNavigation: 'reload'})
    
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent],
  entryComponents:[ EditCustomerDialogComponent]
})
export class AppModule { }


