import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  hide = true;
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder,
              private snackbar: MatSnackBar,
              private authStatus: AuthServiceService,
              private router: Router) {
    this.registrationForm = this.fb.group({
      login: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/),
        Validators.pattern(/^[^\s].*[^\s]$/)
      ]
      ]
    });
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

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.registrationForm.valid) {
      const fb = this.registrationForm.value;
      localStorage.setItem('username', `${fb.login}`);
      localStorage.setItem('email', `${fb.email}`);
      localStorage.setItem('password', `${fb.password}`);
      this.openSnackBar('Вы успешно зарегистрированы!');
    }
  }
}
