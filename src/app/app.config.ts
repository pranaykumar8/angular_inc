// import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
// import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';
// import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
// import { provideHttpClient } from '@angular/common/http';
// import { provideAnimations } from '@angular/platform-browser/animations';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideBrowserGlobalErrorListeners(),
//     provideZoneChangeDetection({ eventCoalescing: true }),
//     provideRouter(routes), provideClientHydration(withEventReplay()),
//     provideHttpClient(),
//      provideAnimations(), 
//     provideToastr({
//       positionClass: 'toast-top-right', // top-right corner
//       timeOut: 3000,                    // auto close after 3s
//       closeButton: true,                // optional close button
//     })
//   ]
// };
// function provideToastr(arg0: {
//   positionClass: string; // top-right corner
//   timeOut: number; // auto close after 3s
//   closeButton: boolean;
// }): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
//   throw new Error('Function not implemented.');
// }



import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';  // ✅ from ngx-toastr

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
    provideAnimations(), 
    provideToastr({
      positionClass: 'toast-top-right', // ✅ top-right corner
      timeOut: 3000,                    // ✅ auto close after 3s
      closeButton: true,                // ✅ close button
      progressBar: true                 // ✅ show progress bar
    })
  ]
};


