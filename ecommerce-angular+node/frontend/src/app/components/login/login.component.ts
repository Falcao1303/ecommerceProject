import { Component, OnInit } from '@angular/core';
import {UserLogin} from '../../models/user/user-login.model';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin = new UserLogin();
  loginError = false;
  senhaError = false;
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    console.log('LoginComponent inicializado');
  }

  loginAuth() {
    this.loginError = false;
    this.senhaError = false;
    this.isLoading = true;

    if (this.userLogin) {
      this.authService.login(this.userLogin).subscribe(
        response => {
          this.isLoading = false;
          this.router.navigate(['/home']);
          console.log(response);
        },
        error => {
          this.isLoading = false;
          if (error.includes('Login')) {
            this.loginError = true;
          } else if (error.includes('Senha')) {
            this.senhaError = true;
          }
        }
      );
    } else {
      this.isLoading = false;
    }
  }

  onInputChange() {
    this.loginError = false;
    this.senhaError = false;
  }
}
