import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalConstants } from '../shared/global-constants';
import { GlobalstateService } from '../services/globalstate.service';
import { SnackbarService } from '../services/snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(
    private globalService: GlobalstateService,
    private snackbar: SnackbarService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isAuthorized = this.globalService.userInfo.value.role.includes(
      route.data['role']
    );
    if (!isAuthorized) {
      this.snackbar.openSnackBar(
        'You are not Authorized',
        GlobalConstants.error
      );
    }
    return isAuthorized;
  }
}
