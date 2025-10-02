import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName = 'Usuário';

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Simular dados do usuário (posteriormente pode vir de um serviço)
    this.userName = localStorage.getItem('userName') || 'Usuário';
  }

  getUserInitials(): string {
    return this.userName
      .split(' ')
      .map(name => name.charAt(0))
      .join('')
      .toUpperCase()
      .substring(0, 2);
  }

  logout(): void {
    // Limpar dados de sessão
    localStorage.removeItem('userName');
    localStorage.removeItem('userToken');
    
    // Redirecionar para login
    this.router.navigate(['/login']);
  }
}
