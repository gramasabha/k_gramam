import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { routes as Routes } from '@shared/consts';
import { TipsService } from '../services';
import { Storage } from '@ionic/storage';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StepGuardGuard implements CanActivate, CanActivateChild {
  public routes: typeof Routes = Routes;
  constructor(private router: Router, private tipsService: TipsService,
    private storage: Storage, private location: Location) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const url = state.url;
    return this.checkStep(url);
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(next, state);
  }

  checkStep(url: string) {
    // Let them skip
    if (this.tipsService.currentTipValue === url) {
      return true;
    }
    // We'llskip
    if (!this.tipsService.hasTip(url)) {
      return true;
    }

    this.tipsService.newTipValue = url;
    // TODO: here we are lossing other params
    return this.router.createUrlTree(['/step'], { queryParams: { retUrl: url } });
  }

}
