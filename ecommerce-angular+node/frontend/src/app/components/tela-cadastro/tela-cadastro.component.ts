import { Component, OnInit } from '@angular/core';
import { UserRegister } from '../../models/user-register.model'

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})

export class TelaCadastroComponent implements OnInit {
  userRegister = new UserRegister();
  constructor() { }

  ngOnInit(): void {

  }
  
  cadastrarUsuario() {
    console.log(this.userRegister);
  }

}
