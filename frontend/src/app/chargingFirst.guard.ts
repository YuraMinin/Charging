import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AuthorizationComponent} from './account/authorization/authorization.component';

@Injectable()
export class ChargingFirstGuard {
  private firstNavigation = true;

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    if (this.firstNavigation) {
      this.firstNavigation = false;
      if (route.component !== AuthorizationComponent) {
        this.router.navigateByUrl('/');
        return false;
      }
    }
    return true;
  }
}
