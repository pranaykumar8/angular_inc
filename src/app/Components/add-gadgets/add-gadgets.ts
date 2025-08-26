import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';   // ✅ Correct import

import { AuthService } from '../../Services/auth.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-gadgets',
  standalone: true,  // ✅ standalone component
  imports: [CommonModule, ReactiveFormsModule],  // ✅ Import modules here

  // imports: [],
  templateUrl: './add-gadgets.html',
  styleUrl: './add-gadgets.css'
})
export class AddGadgets {

    gadgetForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
    // private activateRouter: ActivatedRoute
  ) {
    this.gadgetForm = this.fb.group({
      gadgetName: ['', Validators.required],
      brandName: ['', Validators.required],
      modelName: ['', Validators.required],
      specifications: [''],
      price: ['', Validators.required],
      feedback: ['']
    });
  }


  goBack() {
  this.router.navigate(['/admin']); // Navigate back to Admin Dashboard
}


  onSubmit(): void {
    if (this.gadgetForm.valid) {
      this.authService.addGadget(this.gadgetForm.value).subscribe({
        next: () => {
                    this.toastr.success('Gadget added successfully ✅', 'Success'); // ✅ toastr success

          //alert('Gadget added successfully ✅');
          this.router.navigate(['/admin']); // Redirect to Admin Dashboard
        },
        error: (err) => {
          console.error(err);
          //alert('Something went wrong ❌');
           this.toastr.error('Something went wrong ❌', 'Error'); // ✅ toastr error
        }
      });
    } else {
      //alert('Please fill all required fields ⚠️');
      this.toastr.warning('Please fill all required fields ⚠️', 'Warning'); // ✅ toastr warning
    }
  }

}
