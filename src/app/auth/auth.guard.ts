import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthServiceService, private router: Router) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = window.localStorage.getItem('token');
    if(token) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false
    }
  }
  
}
