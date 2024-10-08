import { Component, OnInit } from '@angular/core';
import { UserRegister } from '../../models/user/user-register.model'
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})

export class TelaCadastroComponent implements OnInit {
  registerForm = new UserRegister();
  constructor( private authService: AuthService) { }

  ngOnInit(): void {

  }
  
  cadastrarUsuario() {
    this.registerForm.nome = this.registerForm.nome + ' ' + this.registerForm.sobrenome;
    if (this.registerForm) {
      this.authService.register(this.registerForm).subscribe(
        response => {
          console.log( response.message );
        },
        error => {
          console.error('Erro no cadastro:', error);
        }
      );
    }
  }

}
