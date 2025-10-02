import { Component, OnInit } from '@angular/core';
import { UserRegister } from '../../models/user/user-register.model'
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})

export class TelaCadastroComponent implements OnInit {
  registerForm = new UserRegister();
  isLoading = false;
  successMessage = '';
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

  }
  
  cadastrarUsuario() {
    this.isLoading = true;
    this.successMessage = '';
    
    // Combinar nome e sobrenome
    const fullName = this.registerForm.nome + (this.registerForm.sobrenome ? ' ' + this.registerForm.sobrenome : '');
    const userData = { ...this.registerForm, nome: fullName };
    
    if (this.registerForm) {
      this.authService.register(userData).subscribe(
        response => {
          this.isLoading = false;
          this.successMessage = 'Cadastro realizado com sucesso! Redirecionando para o login...';
          console.log(response);
          
          // Redirecionar para login após 2 segundos
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000);
        },
        error => {
          this.isLoading = false;
          console.log(error);
          console.error('Erro no cadastro:', error);
        }
      );
    } else {
      this.isLoading = false;
    }
  }
}
