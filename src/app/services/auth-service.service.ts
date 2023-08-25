import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isAuth = true;

  constructor() {
  }

  getStatus() {
    return this.isAuth;
  }

  setStatus(status: boolean) {
    this.isAuth = status;
  }
}
