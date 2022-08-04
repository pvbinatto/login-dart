import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private http: HttpClient, private route: Router) {}

  getHeader(): { headers: HttpHeaders } {
    let header = new HttpHeaders({ 'Content-Type': 'application/json' });
    const requestOptions = { headers: header };
    return requestOptions;
  }

  isAuthenticated() {
    if (localStorage.getItem('token')) {
      this.route.navigate(['/']);
    }
    return false;
  }

  async save() {
    let resultado = '';
    let save = await setTimeout(function () {resultado = "Salvo com sucesso"}, 5000);
    return save;
  }

  async authenticate(credentials: User) {
    let result = await this.http
      .post<any>(`${environment.api}/auth/login`, credentials, this.getHeader())
      .pipe();
    return result;
  }
}
