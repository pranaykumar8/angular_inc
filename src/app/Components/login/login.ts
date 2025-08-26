// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { RouterLink } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   standalone : true,
//   imports: [CommonModule, ReactiveFormsModule, RouterLink],
//   templateUrl: './login.html',
//   styleUrl: './login.css'
// })
// export class Login {

  
//   loginForm: FormGroup;

//   constructor(private fb: FormBuilder) {
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', Validators.required]
//     });
//   }

//   onSubmit(): void {
//     if (this.loginForm.valid) {
//       console.log('Login with:', this.loginForm.value);
//       // 👉 call backend API here (Spring Boot / Node)
//       // this.http.post("http://localhost:8080/auth/login", this.loginForm.value).subscribe(...)
//     }
//   }

// }




// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { RouterLink } from '@angular/router';
// import { AuthService } from '../../Services/auth.service';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule, RouterLink],
//   templateUrl: './login.html',
//   styleUrls: ['./login.css']
// })
// export class Login {
//   loginForm: FormGroup;

//   constructor(private fb: FormBuilder, private authService: AuthService) {
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', Validators.required]
//     });
//   }

//   onSubmit(): void {
//     if (this.loginForm.valid) {
//       console.log('Login with:', this.loginForm.value);

//       this.authService.login(this.loginForm.value).subscribe({
//         next: (res) => console.log('Login success:', res),
//         error: (err) => console.error('Login error:', err)
//       });
//     } else {
//       this.loginForm.markAllAsTouched();
//     }
//   }
// }




// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { RouterLink } from '@angular/router';
// import { AuthService } from '../../Services/auth.service';
// import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule, RouterLink, MatSnackBarModule],
//   templateUrl: './login.html',
//   styleUrls: ['./login.css']
// })
// export class Login {
//   loginForm: FormGroup;

//   constructor(
//     private fb: FormBuilder,
//     private authService: AuthService,
//     private snackBar: MatSnackBar,

//   ) {
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', Validators.required]
//     });
//   }

//   onSubmit(): void {
//     if (this.loginForm.valid) {
//       this.authService.login(this.loginForm.value).subscribe({
//         next: (res) => {
//           console.log('Login success:', res);
//           this.snackBar.open('Login successful!', 'Close', { duration: 3000, panelClass: ['success-snackbar'] });
//         },
//         error: (err) => {
//           console.error('Login error:', err);

//           // ✅ Show toaster message based on backend response
//           if (err.status === 404) {
//             this.snackBar.open('You are not registered. Please sign up first.', 'Close', { duration: 4000, panelClass: ['error-snackbar'] });
//           } else {
//             this.snackBar.open('Invalid credentials. Try again!', 'Close', { duration: 4000, panelClass: ['error-snackbar'] });
//           }
//         }
//       });
//     } else {
//       this.loginForm.markAllAsTouched();
//     }
//   }
// }



import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { ToastrService } from 'ngx-toastr';  // ✅ import


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService, private router: Router // ✅ use Toastr instead of MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // onSubmit(): void {
  //   if (this.loginForm.valid) {
  //     this.authService.login(this.loginForm.value).subscribe({
  //       next: (res) => {
  //         console.log('Login success:', res);
  //         this.toastr.success('Login successful!', 'Success'); // ✅ green toaster
  //         // ✅ Navigate to landing page after success
  //         this.router.navigate(['/landingpage']);

  //       },
  //       error: (err) => {
  //         console.error('Login error:', err);

  //         if (err.status === 404) {
  //           this.toastr.error('You are not registered. Please sign up first.', 'Error'); // ✅ red toaster
  //         } else {
  //           this.toastr.error('Invalid credentials. Try again!', ''); // ✅ red toaster
  //         }
  //       }
  //     });
  //   } else {
  //     this.loginForm.markAllAsTouched();
  //   }
  // }


  onSubmit(): void {
  if (this.loginForm.valid) {
    this.authService.login(this.loginForm.value).subscribe({
      next: (res: any) => {
        console.log('Login success:', res);

        // ✅ Save token & role in localStorage
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.role);

        this.toastr.success('Login successful!', 'Success');

        // ✅ Redirect based on role
        if (res.role === 'ADMIN') {
          this.router.navigate(['/admin']);
        } else if (res.role === 'USER') {
          this.router.navigate(['/landingpage']);
        } else {
          this.router.navigate(['/landingpage']); // fallback
        }
      },
      error: (err) => {
        console.error('Login error:', err);

        if (err.status === 404) {
          this.toastr.error('You are not registered. Please sign up first.', 'Error');
        } else {
          this.toastr.error('Invalid credentials. Try again!', '');
        }
      }
    });
  } else {
    this.loginForm.markAllAsTouched();
  }
}

}
