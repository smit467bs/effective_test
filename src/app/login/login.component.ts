import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;
  login = '';
  password = '';

  constructor(private snackbar: MatSnackBar,
              private router: Router,
              private isAuth: AuthServiceService) {
  }

  openSnackBar(message: string, duration: number = 2000) {
    this.snackbar.open(message, 'Закрыть', {
      duration: duration,
      verticalPosition: 'top'
    });
    setTimeout(() => {
      this.router.navigate(['']);
    }, 2000);
  }

  onLogin() {
    const localLogin = localStorage.getItem('password');
    const localPassword = localStorage.getItem('username');

    if (localPassword === this.login &&
      localLogin === this.password) {
      this.isAuth.setStatus(true);
      this.openSnackBar('Вы успешно авторизировались');
    }
  }
}
