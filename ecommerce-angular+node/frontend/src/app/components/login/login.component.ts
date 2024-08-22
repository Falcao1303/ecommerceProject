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

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginAuth() {
    this.loginError = false;
    this.senhaError = false;

    if (this.userLogin) {
      this.authService.login(this.userLogin).subscribe(
        response => {
          this.router.navigate(['/home']);
          console.log( response);
        },
        error => {
          if (error.includes('Login')) {
            this.loginError = true;
          } else if (error.includes('Senha')) {
            this.senhaError = true;
          }
        }
      );
    }
  }

  onInputChange() {
    this.loginError = false;
    this.senhaError = false;
  }

}
