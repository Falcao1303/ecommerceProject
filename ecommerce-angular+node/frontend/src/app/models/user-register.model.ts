export class UserRegister {
    constructor(
      public nome:string = '',
      public sobrenome:string = '',
      public cpf: string = '',
      public telefone: string = '',
      public data_nascimento: string = '',
      public login: string = '',
      public senha: string = '',
      public email: string = '',
      public invalid:boolean =  false
    ) { }
  }