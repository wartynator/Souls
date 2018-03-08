
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


    buttons = ["Zákaznici", "Zariadania", "Pracovné listy"];

  constructor(private router: Router) {  }

  ngOnInit() {
  }


  navigateCustomers= function () { 
 
this.router.navigateByUrl('/components/customers');


  
};

navigateDevices= function () {
  this.router.navigateByUrl('/components/devices');
};

navigateWorkLists= function () {
  this.router.navigateByUrl('/components/work-lists');
};
 
  
 

}
