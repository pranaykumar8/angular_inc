// import { CommonModule } from '@angular/common';
// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-signup',
//   standalone: true,  // ✅ standalone component
//   imports: [CommonModule, ReactiveFormsModule],
//   // imports: [],
//   templateUrl: './signup.html',
//   styleUrl: './signup.css'
// })
// export class Signup {
// signupForm: FormGroup;

//   constructor(private fb: FormBuilder, private http: HttpClient) {
//     this.signupForm = this.fb.group(
//       {
//         email: ['', [Validators.required, Validators.email]],
//         password: ['', [Validators.required, Validators.minLength(6)]],
//         confirmPassword: ['', Validators.required],
//         role: ['USER', Validators.required]
//       },
//       { validators: this.passwordMatchValidator }
//     );
//   }

//   // Custom validator: confirm password
//   passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
//     const password = control.get('password')?.value;
//     const confirmPassword = control.get('confirmPassword')?.value;
//     return password === confirmPassword ? null : { mismatch: true };
//   }

//   onSubmit(): void {
//     if (this.signupForm.valid) {
//       const { confirmPassword, ...userData } = this.signupForm.value;
//       console.log('Signup data:', userData);

//       // 👉 Call your Spring Boot API
//       this.http.post('http://localhost:8080/auth/signup', userData)
//         .subscribe({
//           next: (res) => console.log('User registered successfully:', res),
//           error: (err) => console.error('Signup error:', err)
//         });
//     }
//   }
// }

// import { CommonModule } from '@angular/common';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-signup',
//   standalone: true,  
//   imports: [CommonModule, ReactiveFormsModule, HttpClientModule], 
//   templateUrl: './signup.html',
//   styleUrls: ['./signup.css']
// })
// export class Signup {
//   signupForm: FormGroup;

//   constructor(private fb: FormBuilder, private http: HttpClient) {
//     this.signupForm = this.fb.group(
//       {
//         email: ['', [Validators.required, Validators.email]],
//         password: ['', [Validators.required, Validators.minLength(6)]],
//         confirmPassword: ['', Validators.required],
//         role: ['USER', Validators.required]
//       },
//       { validators: this.passwordMatchValidator }
//     );
//   }

//   passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
//     const password = control.get('password')?.value;
//     const confirmPassword = control.get('confirmPassword')?.value;
//     return password === confirmPassword ? null : { mismatch: true };
//   }

//   onSubmit(): void {
//     if (this.signupForm.valid) {
//       const { confirmPassword, ...userData } = this.signupForm.value;
//       console.log('Signup data:', userData);

//       this.http.post('http://localhost:8080/auth/signup', userData)
//         .subscribe({
//           next: (res) => console.log('User registered successfully:', res),
//           error: (err) => console.error('Signup error:', err)
//         });
//     }
//   }
// }


// import { CommonModule } from '@angular/common';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { Component } from '@angular/core';
// import {
//   AbstractControl,
//   FormBuilder,
//   FormGroup,
//   ReactiveFormsModule,
//   ValidationErrors,
//   Validators
// } from '@angular/forms';
// import { RouterLink } from '@angular/router';
// import { AuthService } from '../../Services/auth.service';

// @Component({
//   selector: 'app-signup',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterLink],
//   templateUrl: './signup.html',
//   styleUrls: ['./signup.css']
// })
// export class Signup {
//   signupForm: FormGroup;

//   constructor(private fb: FormBuilder, private http: HttpClient, private authService: AuthService) {
//     this.signupForm = this.fb.group(
//       {
//         email: ['', [Validators.required, Validators.email]],
//         password: ['', [Validators.required, Validators.minLength(6)]],
//         confirmPassword: ['', Validators.required],
//         role: ['USER', Validators.required]
//       },
//       { validators: this.passwordMatchValidator }
//     );
//   }

//   // ✅ Password Match Validator
//   passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
//     const password = control.get('password')?.value;
//     const confirmPassword = control.get('confirmPassword')?.value;
//     return password === confirmPassword ? null : { mismatch: true };
//   }

//   // ✅ Submit form
//   onSubmit(): void {
//     if (this.signupForm.valid) {
//       const { confirmPassword, ...userData } = this.signupForm.value;
//       console.log('Signup data:', userData);

//       this.http.post('http://localhost:8080/auth/signup', userData).subscribe({
//         next: (res) => console.log('User registered successfully:', res),
//         error: (err) => console.error('Signup error:', err)
//       });
//     } else {
//       this.signupForm.markAllAsTouched(); // force errors visible
//     }
//   }
// }




import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterLink],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class Signup {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private toastr: ToastrService, private router: Router) {
    this.signupForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        role: ['USER', Validators.required]
      },
      { validators: this.passwordMatchValidator }
    );
  }

  // ✅ Password Match Validator
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  // ✅ Submit form
  onSubmit(): void {
    if (this.signupForm.valid) {
      const { confirmPassword, ...userData } = this.signupForm.value;
      console.log('Signup data:', userData);

      this.authService.signup(userData).subscribe({
        next: (res) =>{
          this.toastr.success('Signup successful!', 'Success'); // ✅ Success toast
          console.log('User registered successfully:', res);
          setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1500);
        } ,
        error: (err) => {
          this.toastr.error(err.error?.message || 'Already registered', 'Signup failed'); // ✅ Error toast
          console.error('Signup error:', err);
        }
      });
    } else {
      this.signupForm.markAllAsTouched(); // force errors visible
      this.toastr.warning('Please fill all required fields correctly.', 'Warning'); // Optional warning
    }
  }
}
