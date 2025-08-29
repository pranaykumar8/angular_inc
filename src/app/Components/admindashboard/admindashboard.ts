

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './admindashboard.html',
  styleUrls: ['./admindashboard.css']
})
export class Admindashboard {

 gadgetForm: FormGroup;
  gadgets: any[] = [];
  filteredGadgets: any[] = [];   // ✅ this will hold searched results

  searchText: string = '';       // ✅ two-way bound to search input

// pagination state
  totalElements: number = 0;
  totalPages: number = 0;
  pageSize: number = 5;
  currentPage: number = 0;



  isEditMode: boolean = false;
  editingId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private router:Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {
    this.gadgetForm = this.fb.group({
      gadgetName: ['', Validators.required],
      brandName: ['', Validators.required],
      modelName: ['', Validators.required],
      specifications: [''],
      price: ['', Validators.required],
      feedback: ['']
    });

    this.loadGadgets();
  }

  selectedMenu: number | null = null;

  toggleMenu(id: number) {
    this.selectedMenu = this.selectedMenu === id ? null : id;
  }

  goToAddGadget() {
    this.router.navigate(['admin/add-gadgets']);
  }

    goToLoginDetails() {
    this.router.navigate(['admin/login-details']);
  }



  // loadGadgets() {
  //   this.authService.getAll().subscribe({
  //     next: data => {
  //       this.gadgets = data;
  //       this.filteredGadgets = data;   // ✅ initialize filtered list
  //     },
  loadGadgets(page: number = 0, size: number = this.pageSize) {
    this.authService.getPaginatedGadgets(page, size).subscribe({
      next: res => {
        console.log(res); // <-- debug: check what backend returns
        this.gadgets = res.content;
        //this.gadgets = data;
         this.filteredGadgets = res.content;   // ✅ initialize filtered list
        this.totalElements = res.totalElements;
        this.totalPages = res.totalPages;
        this.currentPage = res.number;
      },


      error: err => {
        console.error('Failed to load gadgets', err);
        this.toastr.error('Failed to load gadgets', 'Error');
      }
    });
  }

  // ✅ search filter logic
  filterGadgets() {
    const text = this.searchText.toLowerCase();
    this.filteredGadgets = this.gadgets.filter(g =>
      g.gadgetName.toLowerCase().includes(text) ||
      g.brandName.toLowerCase().includes(text) ||
      g.modelName.toLowerCase().includes(text) ||
      g.specifications.toLowerCase().includes(text) ||
      g.feedback.toLowerCase().includes(text) ||
      g.price.toString().includes(text)
    );
  }

  onPageChange(newPage: number) {
    if (newPage >= 0 && newPage < this.totalPages) {
      this.loadGadgets(newPage, this.pageSize);
    }
  }

  onSubmit() {
    if (this.gadgetForm.invalid) {
      this.gadgetForm.markAllAsTouched();
      return;
    }

    if (this.isEditMode && this.editingId !== null) {
      this.authService.updateGadget(this.editingId, this.gadgetForm.value).subscribe({
        next: () => {
          this.toastr.success('Gadget updated successfully!', 'Success');
          this.gadgetForm.reset();
          this.isEditMode = false;
          this.editingId = null;
          this.loadGadgets();
        },
        error: err => {
          console.error('Update gadget error', err);
          this.toastr.error('Failed to update gadget', 'Error');
        }
      });
    } else {
      this.authService.addGadget(this.gadgetForm.value).subscribe({
        next: () => {
          this.toastr.success('Gadget added successfully!', 'Success');
          this.gadgetForm.reset();
          this.loadGadgets();
        },
        error: err => {
          console.error('Add gadget error', err);
          this.toastr.error('Failed to add gadget', 'Error');
        }
      });
    }
  }

  cancelEdit() {
    this.gadgetForm.reset();
    this.isEditMode = false;
    this.editingId = null;
  }

  deleteGadget(id: number) {
    if (!confirm('Are you sure you want to delete this gadget?')) return;

    this.authService.deleteGadget(id).subscribe({
      next: () => {
        this.toastr.success('Gadget deleted', 'Success');
        this.loadGadgets();
      },
      error: err => {
        console.error('Delete gadget error', err);
        this.toastr.error('Failed to delete gadget', 'Error');
      }
    });
  }

  editGadget(id: number) {
    this.router.navigate(['admin/update-gadget', id]);
  }
logout() {
    // Clear session/localStorage if needed
    //localStorage.clear();
    //sessionStorage.clear();

    // Redirect to login page
    this.router.navigate(['/login']);
  }
  
}
