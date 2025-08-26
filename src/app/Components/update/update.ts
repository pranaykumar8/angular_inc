// import { Component, NgModule } from '@angular/core';
// import { AuthService, Gadget } from '../../Services/auth.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { FormsModule, NgModel } from '@angular/forms';



// import { MatSnackBar } from '@angular/material/snack-bar';

// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';

// @Component({
//   selector: 'app-update',
//   imports: [FormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule],
//   templateUrl: './update.html',
//   styleUrls: ['./update.css']
// })
// export class Update {

// id!: number;
//   product: Gadget = { gadgetName: '', brandName: '', modelName: '', specifications: '', price: 0, feedback: '' };

//   constructor(
//     private authService: AuthService,
//     private router: Router,
//     private route: ActivatedRoute,
//     private snackBar: MatSnackBar
//   ) {}

//   ngOnInit(): void {
//     this.id = this.route.snapshot.params['id'];
//     this.authService.getGadgetById(this.id).subscribe(
//       data => this.product = data,
//       error => console.error('Error fetching product:', error)
//     );
//   }

//   onSubmit() {
//     this.authService.updateGadget(this.id, this.product).subscribe(
//       () => {
//         this.snackBar.open('Product updated successfully!', 'X', {
//           duration: 3000,
//           horizontalPosition: 'right',
//           verticalPosition: 'top',
//           panelClass: ['success-snackbar']
//         });
//         this.router.navigate(['/gadgets']); // navigate to gadgets list
//       },
//       error => console.error(error)
//     );
//   }

//   goBack() {
//     this.router.navigate(['/gadgets']);
//   }


  

// }



// // import { Component, OnInit } from '@angular/core';
// // import { ActivatedRoute, Router } from '@angular/router';
// // //import { ProductService } from '../product.service';
// // //import { Product } from '../product';
// // import { MatSnackBar } from '@angular/material/snack-bar';
// // import { CommonModule } from '@angular/common';
// // import { FormsModule, NgForm } from '@angular/forms';
// // import { MatFormFieldModule } from '@angular/material/form-field';
// // import { MatInputModule } from '@angular/material/input';
// // import { MatButtonModule } from '@angular/material/button';
// // import { AuthService } from '../../Services/auth.service';

// // // @Component({
// // //   selector: 'app-update-product',
// // //   standalone: true,
// // //   imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
// // //   templateUrl: './update.component.html',
// // //   styleUrls: ['./update-product.component.css']
// // // })

// // @Component({
// //   selector: 'app-update',
// //   imports: [FormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule],
// //   templateUrl: './update.html',
// //   styleUrl: './update.css'
// // })
// // export class UpdateProductComponent implements OnInit {

// //   id!: number;
// //  // product: Product = new Product();

// //   constructor(
// //     private productService: AuthService,
// //     private router: Router,
// //     private route: ActivatedRoute,
// //     private snackBar: MatSnackBar
// //   ) {}

// //   ngOnInit(): void {
// //     this.id = this.route.snapshot.params['id'];
// //     this.productService.getProductById(this.id).subscribe(
// //       (      data: any) => this.product = data,
// //       (      error: any) => console.error('Error fetching product:', error)
// //     );
// //   }

// //   onSubmit(form: NgForm) {
// //     if (form.invalid) return;

// //     this.productService.updateProduct(this.id).subscribe(
// //       () => {
// //         this.snackBar.open('Product updated successfully!', 'X', {
// //           duration: 3000,
// //           horizontalPosition: 'right',
// //           verticalPosition: 'top',
// //           panelClass: ['success-snackbar']
// //         });
// //         this.router.navigate(['/admin']); // go back to admin/product list
// //       },
// //       (      error: any) => console.error('Update failed:', error)
// //     );
// //   }
// //   product(id: number, product: any) {
// //     throw new Error('Method not implemented.');
// //   }

// //   goBack() {
// //     this.router.navigate(['/admin']);
// //   }
// // }




import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, Gadget } from '../../Services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update',
  templateUrl: './update.html',
  styleUrls: ['./update.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule]
})
export class Update implements OnInit {

  id!: number;
  product: Gadget = { gadgetName: '', brandName: '', modelName: '', specifications: '', price: 0, feedback: '' };

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.authService.getGadgetById(this.id).subscribe(
      data => this.product = data,
      error => console.error('Error fetching product:', error)
    );
  }

  onSubmit() {
    this.authService.updateGadget(this.id, this.product).subscribe(
      () => {
         this.toaster.success('Gadget updated successfully ✅', 'Success'); // ✅ toastr success
        // this.snackBar.open('Product updated successfully!', 'X', {
        //   duration: 3000,
        //   horizontalPosition: 'right',
        //   verticalPosition: 'top',
        //   panelClass: ['success-snackbar']
        // });
            // this.router.navigate(['/admin']);  // navigate to gadgets list

            this.router.navigateByUrl('/admin', { replaceUrl: true });

      },
      error => console.error('Update failed:', error)
    );
  }

  goBack() {
    this.router.navigate(['/admin']);
  }

}
