import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private rut: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (sessionStorage.getItem('isAdminLogin') != undefined) {
      return true;
    }
    else if(sessionStorage.getItem('isFacultyLogin')!=undefined)
    {
      return true;
    }
    else if(sessionStorage.getItem('isStudentLogin')!=undefined)
    {
      return true;
    }
    else {
      return false;
      this.rut.navigate(['/']);
    }
  }
  logout()
  {
    sessionStorage.removeItem('islogin');
  }


}
