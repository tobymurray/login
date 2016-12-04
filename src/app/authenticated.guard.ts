import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UserService } from './shared/user.service';

@Injectable()
export class AuthenticatedGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate() {
    if (!this.userService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }

}