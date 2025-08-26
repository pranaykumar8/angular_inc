// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { App } from './app/app';

// bootstrapApplication(App, 
//   providers: [
//     provideHttpClient(),   // ✅ add this
//     provideAnimations()
//   ]
//   appConfig)
//   .catch((err) => console.error(err));
// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideHttpClient } from '@angular/common/http';
// import { provideAnimations } from '@angular/platform-browser/animations';
// import { App } from './app/app';
// import { appConfig } from './app/app.config';

// bootstrapApplication(App, {
//   providers: [
//     ...appConfig.providers,   // 👈 spread existing providers
//     provideHttpClient(),      // 👈 add HttpClient
//     provideAnimations()       // 👈 add animations
//   ]
// }).catch((err) => console.error(err));



// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideHttpClient, withFetch } from '@angular/common/http'; // 👈 import withFetch
// import { provideRouter } from '@angular/router';
// import { provideAnimations } from '@angular/platform-browser/animations';
// import { App } from './app/app';
// import { routes } from './app/app.routes';

// bootstrapApplication(App, {
//   providers: [
//     provideHttpClient(withFetch()), // 👈 enable Fetch-based HttpClient
//     provideAnimations(),
//     provideAnimations(),
//     provideRouter(routes),
//     provideHttpClient()
//   ]
// }).catch((err) => console.error(err));




import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';  // ✅ import provideToastr
import { App } from './app/app';
import { routes } from './app/app.routes';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(withFetch()), 
    provideRouter(routes),
    provideAnimations(),   // ✅ enable animations (required for toastr)
    provideToastr({        // ✅ global toastr config
      positionClass: 'toast-top-right',
      timeOut: 3000,
      preventDuplicates: true,
      progressBar: true,
    }),
  ]
}).catch((err) => console.error(err));
