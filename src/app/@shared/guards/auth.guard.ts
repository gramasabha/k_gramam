import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { routes as Routes } from '@shared/consts';
import { AuthService } from '../services';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthGuard implements CanActivate {
  public routes: typeof Routes = Routes;

  constructor(private router: Router, private authService: AuthService, private storage: Storage) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.authService.currentUserValue;

    if (currentUser) {
      return true;
    } else {
      this.storage.set('_redirect', state.url);
      console.log('navigating to auth');
      this.router.navigate([this.routes.LOGIN]);
    }
  }
}
