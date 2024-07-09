export class UserRegister {
    constructor(
      public Nome = '',
      public Sobrenome = '',
      public Cpf = '',
      public Telefone = '',
      public Data_Nascimento = '',
      public Login = '',
      public Senha = '',
      public Email= "",
      public invalid = false
    ) { }
  }