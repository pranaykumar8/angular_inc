import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const roleGuardGuard: CanActivateFn = (route, state) => {
  
   const router = inject(Router);
  const role = localStorage.getItem('role');
  const expectedRole = route.data['role'];

  if (expectedRole && role !== expectedRole) {
    router.navigate(['/landingpage']);
    return false;
  }
  return true;
};
