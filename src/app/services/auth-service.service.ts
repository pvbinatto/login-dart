import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  getHeader(): { headers: HttpHeaders; } {
    let header = new HttpHeaders({ "Content-Type": "application/json" });
    const requestOptions = { headers: header };
    return requestOptions;
  }

  isAuthenticated() {
    return [];
  }

  async authenticate(credentials: User) {
    let result = await this.http
      .post<any>(
        `${environment.api}/auth/login`, credentials, this.getHeader()
      ).pipe();
    return result;
  }
}
