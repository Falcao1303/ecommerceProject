import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRegister } from '../models/user/user-register.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  register(user: UserRegister): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/usuarios/createUser", user).pipe(
        catchError(this.handleError)
    );
  }

  login(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/login", user).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Erro desconhecido!';

    if (error.error instanceof ErrorEvent) {
      // Erro do lado do cliente
      errorMessage = `Erro: ${error.error.message}`;
    } else {
      // Erro do lado do servidor
      errorMessage = `Erro: ${error.error.message}`;
    }

    return throwError(errorMessage);
  }
}