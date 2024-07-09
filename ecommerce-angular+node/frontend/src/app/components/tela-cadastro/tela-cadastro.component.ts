import { Component, OnInit } from '@angular/core';
import { UserRegister } from '../../models/user-register.model'
import { AuthService } from '../../services/auth.service';

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
    console.log(this.registerForm);
    // if (this.registerForm) {
    //   this.authService.register(this.registerForm).subscribe(
    //     response => {
    //       console.log('Cadastro realizado com sucesso!', response);
    //     },
    //     error => {
    //       console.error('Erro no cadastro:', error);
    //     }
    //   );
    // }
  }

}
