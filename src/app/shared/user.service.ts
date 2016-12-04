import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  
  private authToken = 'auth_token';
  private loggedIn: boolean = false;

  constructor(private http: Http) { 
    this.loggedIn = !!localStorage.getItem(this.authToken);
  }

  logIn(email: string, password: string) {
    localStorage.setItem(this.authToken, 'token');
    this.loggedIn = true;
  }

  logOut() {
    localStorage.removeItem(this.authToken);
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
