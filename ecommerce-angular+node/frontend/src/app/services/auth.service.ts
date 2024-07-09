import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRegister } from '../models/user-register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://seu-endereco-api.com/api/register';

  constructor(private http: HttpClient) { }

  register(user: UserRegister): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }
}