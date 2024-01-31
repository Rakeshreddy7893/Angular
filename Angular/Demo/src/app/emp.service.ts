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