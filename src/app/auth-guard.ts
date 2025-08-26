// // import { CanActivateFn } from '@angular/router';

// // export const authGuard: CanActivateFn = (route, state) => {
// //   return true;
// // };





// import { inject } from '@angular/core';
// import { CanActivateFn, Router } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   const router = inject(Router);
//   const role = localStorage.getItem('role');

//   if (!role) {
//     // 🔒 No role means not logged in
//     router.navigate(['/login']);
//     return false;
//   }

//   // ✅ Get expected roles from route data
//   const expectedRole = route.data['role'];

//   if (expectedRole && role !== expectedRole) {
//     // 🔒 If role doesn’t match, redirect to landing page
//     router.navigate(['/landingpage']);
//     return false;
//   }

//   return true;
// };
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  let role: string | null = null;
  if (typeof window !== 'undefined') {
    role = localStorage.getItem('role');
  }

  if (!role) {
    // 🔒 No role means not logged in
    router.navigate(['/login']);
    return false;
  }

  // ✅ Get expected roles from route data
  const expectedRole = route.data['role'];

  if (expectedRole && role !== expectedRole) {
    // 🔒 If role doesn’t match, redirect to landing page
    router.navigate(['/landingpage']);
    return false;
  }

  return true;
};
