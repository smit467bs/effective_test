import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isAuth = false;

  constructor() {
  }

  getStatus() {
    return this.isAuth;
  }

  setStatus(status: boolean) {
    this.isAuth = status;
  }
}
