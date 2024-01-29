import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: any;
  emailId:any;

  constructor() {
    this.emailId = localStorage.getItem('emailId');
   
    this.employees = [
      {empId: 101, empName:'Harsha', salary:1212.12, gender:'Male',   doj:'2018-11-15', country:'India',    emailId:'harsha@gmail.com', password:'123'},
      {empId: 102, empName:'Pasha',  salary:2323.23, gender:'Male',   doj:'2017-10-16', country:'China',    emailId:'pasha@gmail.com',  password:'123'},
      {empId: 103, empName:'Indira', salary:3434.34, gender:'Female', doj:'2016-09-17', country:'USA',      emailId:'indira@gmail.com', password:'123'},
      {empId: 104, empName:'Vamsi',  salary:4545.45, gender:'Male',   doj:'2015-08-18', country:'SriLanka', emailId:'vamsi@gmail.com',  password:'123'},
      {empId: 105, empName:'Venkat', salary:5656.56, gender:'Male',   doj:'2014-07-19', country:'Nepal',    emailId:'venkat@gmail.com', password:'123'}
    ];
  }

  ngOnInit() {
   
  }
}
