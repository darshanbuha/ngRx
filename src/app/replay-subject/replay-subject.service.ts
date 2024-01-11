import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReplaySubjectService {
  private isAuthenticated = new ReplaySubject<boolean>();
  constructor() { }
  
  logIn(){
      this.isAuthenticated.next(true);
  }
  logOut(){
      this.isAuthenticated.next(false);
  }

  getAuthenticationState(){
    return this.isAuthenticated.asObservable();
  }
}
