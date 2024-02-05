import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  isUserLoggedIn: boolean;
  cartItems : any;

  constructor(private http :HttpClient) { 
    this.isUserLoggedIn = false;
    //Cart Using Services
    this.cartItems = [];
  }

  getAllCountries(): any {
    return this.http.get('https://restcountries.com/v3.1/all');
  }

  getEmployees() :any {
    return this.http.get('http://localhost:8080/getEmployees');
  }
  getEmployeeById(empId :any) :any {
    return this.http.get('http://localhost:8080/getEmployeeById/'+empId);
  }

  getAllDepartments() :any {
    return this.http.get('http://localhost:8080/getDepartments');
  }

  regsiterEmployee(employee: any): any {
    return this.http.post('http://localhost:8080/addEmployee', employee);
  }

  employeeLogin(emailId: any, password: any): any {
    return this.http.get('http://localhost:8080/empLogin/' + emailId + '/' + password).toPromise();
  }

  deleteEmployee(empId: any) {
    return this.http.delete('http://localhost:8080/deleteEmployeeById/' + empId);
  }

  updateEmployee(employee: any) {
    return this.http.put('http://localhost:8080/updateEmployee', employee);
  }
  //Cart using Services
  addToCart(product :any){
    this.cartItems.push(product);
  }

  getCartItems():any{
    return this.cartItems;
  }

  //Login
  setIsUserLoggedIn() {
    this.isUserLoggedIn = true;
  }

  getIsUserLogged(): boolean {
    return this.isUserLoggedIn;
  }

  //Logout
  setIsUserLoggedOut() {
    this.isUserLoggedIn = false;
  }
  

  

}