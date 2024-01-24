import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit {

  id:number;
  name:string;
  avg:number;
  address : any;
  hobbies :any;


  constructor(){
    //alert("Constructor invoked...")
    this.id = 101;
    this.name = 'Harsha';
    this.avg = 45.45;
    this.address = {
      streetNo :101,
      city :'Hyderabad',
      state : 'Telangana'
    };
    this.hobbies = ['Eating','Sleeping','Watching movies'];
  }
  ngOnInit() {
    //alert("ngOnInit invoked..")
  }

}
