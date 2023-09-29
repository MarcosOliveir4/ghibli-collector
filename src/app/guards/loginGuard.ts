import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service';

export const LoginGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);
  const user = await authService.getUser();

  console.log(user);
  if (user) {
    await router.navigate(['/home'], { replaceUrl: true });
    return false;
  } else {
    await router.navigate(['ghibli/authentication'], {
      replaceUrl: true
    });
    return true;
  }
};
