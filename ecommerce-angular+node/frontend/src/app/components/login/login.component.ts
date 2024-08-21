import { Component, OnInit } from '@angular/core';
import {UserLogin} from '../../models/user/user-login.model';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userLogin = new UserLogin();
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  loginAuth() {
    if (this.userLogin) {
      this.authService.login(this.userLogin).subscribe(
        response => {
          console.log('Login efetuado com sucesso!');
          console.log( response);
        },
        error => {
          console.error('Erro no login:', error.error.message);
          console.log('Login não efetuado!');
        }
      );
    }
  }

}
