// // import { Routes } from '@angular/router';

// // export const routes: Routes = [];

// import { Routes } from '@angular/router';
// import { Login } from './Components/login/login';
// import { Signup } from './Components/signup/signup';
// import { Admindashboard } from './Components/admindashboard/admindashboard';
// import { Landingpage } from './Components/landingpage/landingpage';
// import { authGuard } from './auth-guard';
// import { roleGuardGuard } from './role.guard-guard';
// import { Update } from './Components/update/update';

// export const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'login', component: Login },
//   { path: 'signup', component: Signup },
//   {path: 'landingpage', component: Landingpage, canActivate: [authGuard, roleGuardGuard], data: {role:'USER'}},
//   {path: 'admin', component:Admindashboard, canActivate: [authGuard, roleGuardGuard], data:{role: 'ADMIN'}},
//   {
//     path: 'admin/update-gadget/:id',
//     component: Update,
//     canActivate: [authGuard, roleGuardGuard],
//     data: { role: 'ADMIN' }
//   }
// ];




import { Routes } from '@angular/router';
import { Login } from './Components/login/login';
import { Signup } from './Components/signup/signup';
import { Admindashboard } from './Components/admindashboard/admindashboard';
import { Landingpage } from './Components/landingpage/landingpage';
import { authGuard } from './auth-guard';
import { roleGuardGuard } from './role.guard-guard';
import { Update } from './Components/update/update';
import { AddGadgets } from './Components/add-gadgets/add-gadgets';
import { LoginDetails } from './Components/login-details/login-details';

export const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'login', component: Login },
  // { path: 'signup', component: Signup },
  // { 
  //   path: 'landingpage', 
  //   component: Landingpage, 
  //   canActivate: [authGuard, roleGuardGuard], 
  //   data: { role: 'USER' } 
  // },
  // { 
  //   path: 'admin', 
  //   component: Admindashboard, 
  //   canActivate: [authGuard, roleGuardGuard], 
  //   data: { role: 'ADMIN' } 
  // },
  // {
  //   path: 'admin/update-gadget/:id',
  //   component: Update,
  //   canActivate: [authGuard, roleGuardGuard],
  //   data: { role: 'ADMIN' }
  // },

  // {
  //   path: 'add-gadgets',
  //   component: AddGadgets,
  //   canActivate: [authGuard, roleGuardGuard],
  //   data: { role: 'ADMIN' }
  // }

  // {
  //   path: 'admin',
  //   canActivate: [authGuard, roleGuardGuard],
  //   data: { role: 'ADMIN' },
  //   children: [
  //     { path: '', component: Admindashboard },   // default admin dashboard
  //     { path: 'update-gadget/:id', component: Update },
  //     { path: 'add-gadgets', component: AddGadgets }
  //   ]
  // },

  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Public routes
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },

  // USER protected route
  { 
    path: 'landingpage', 
    component: Landingpage, 
    canActivate: [authGuard, roleGuardGuard], 
    data: { role: 'USER' } 
  },

  // ADMIN routes grouped
  {
    path: 'admin',
    canActivate: [authGuard, roleGuardGuard],
    data: { role: 'ADMIN' },
    children: [
      { path: '', component: Admindashboard },   // default admin dashboard
      { path: 'update-gadget/:id', component: Update },
      { path: 'add-gadgets', component: AddGadgets },
      { path: 'login-details', component: LoginDetails } 
    ]
  },

  // Fallback route
  { path: '**', redirectTo: 'login' }


];
