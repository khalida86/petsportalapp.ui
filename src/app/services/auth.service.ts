import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(user: User): Observable<string> {
    return this.http.post('https://localhost:7076/api/Auth/login', user, {
      responseType: 'text',
    });
  }
}
