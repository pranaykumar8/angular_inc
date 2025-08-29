// import { CommonModule } from '@angular/common';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-landingpage',
//   standalone: true, 
//   imports: [CommonModule, HttpClientModule],
//   templateUrl: './landingpage.html',
//   styleUrl: './landingpage.css'
// })
// export class Landingpage {
  
// gadgets: any[] = [];  // will come from backend
//   cart: any[] = [];
//   cartOpen = false;

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.loadGadgets();
//   }

//   // Fetch gadgets created by admin
//   loadGadgets() {
//     this.http.get<any[]>('http://localhost:8080/api/gadgets').subscribe({
//       next: (data) => this.gadgets = data,
//       error: (err) => console.error('Error loading gadgets', err)
//     });
//   }

//   addToCart(gadget: any) {
//     this.cart.push(gadget);
//   }

//   toggleCart() {
//     this.cartOpen = !this.cartOpen;
//   }
// }



// // import { CommonModule } from '@angular/common';
// // import { HttpClient, HttpClientModule } from '@angular/common/http';
// // import { Component } from '@angular/core';
// // import { FormsModule } from '@angular/forms';

// // interface Gadget {
// //   id?: number;
// //   name: string;
// //   brand: string;
// //   model: string;
// //   specifications?: string;
// //   price?: number;
// //   feedback?: string;
// //   image?: string;
// // }

// // @Component({
// //   selector: 'app-landingpage',
// //   standalone: true,
// //   imports: [CommonModule, HttpClientModule, FormsModule],
// //   templateUrl: './landingpage.html',
// //   styleUrls: ['./landingpage.css']
// // })
// // export class Landingpage {
// //   gadgets: Gadget[] = [];
// //   filteredGadgets: Gadget[] = [];
// //   searchText: string = '';

// //   // Pagination
// //   totalPages: number = 0;
// //   pageSize: number = 5;
// //   currentPage: number = 0;

// //   // Cart-like selection
// //   selectedGadgetId: number | null = null;

// //   constructor(private http: HttpClient) {}

// //   ngOnInit() {
// //     this.loadGadgets();
// //   }

// //   loadGadgets(page: number = 0, size: number = this.pageSize) {
// //     this.http.get<any>(`http://localhost:8080/api/gadgets/page?page=${page}&size=${size}`).subscribe({
// //       next: (res) => {
// //         this.gadgets = res.content;
// //         this.filteredGadgets = res.content;
// //         this.totalPages = res.totalPages;
// //         this.currentPage = res.number;
// //       },
// //       error: (err) => console.error('Failed to load gadgets', err)
// //     });
// //   }

// //   filterGadgets() {
// //     const text = this.searchText.toLowerCase();
// //     this.filteredGadgets = this.gadgets.filter(g =>
// //       g.name.toLowerCase().includes(text) ||
// //       g.brand.toLowerCase().includes(text) ||
// //       g.model.toLowerCase().includes(text) ||
// //       (g.specifications?.toLowerCase().includes(text) ?? false) ||
// //       (g.feedback?.toLowerCase().includes(text) ?? false) ||
// //       g.price?.toString().includes(text)
// //     );
// //   }

// //   onPageChange(newPage: number) {
// //     if (newPage >= 0 && newPage < this.totalPages) {
// //       this.loadGadgets(newPage, this.pageSize);
// //     }
// //   }

// //   toggleSelectGadget(id: number) {
// //     this.selectedGadgetId = this.selectedGadgetId === id ? null : id;
// //   }

// //   addToCart(gadget: Gadget) {
// //     alert(`${gadget.name} added to cart!`);
// //   }
// // }





// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { AuthService } from '../../Services/auth.service';
// import { ToastrService } from 'ngx-toastr';



// @Component({
//   selector: 'app-landingpage',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './landingpage.html',
//   styleUrls: ['./landingpage.css']
// })
// export class Landingpage {




  
//   gadgets: any[] = [];
//   filteredGadgets: any[] = [];
//   searchText: string = '';

//   // Pagination state
//   totalElements: number = 0;
//   totalPages: number = 0;
//   pageSize: number = 5;
//   currentPage: number = 0;

//   constructor(
//     private authService: AuthService,
//     private toastr: ToastrService
//   ) {}

//   ngOnInit() {
//     this.loadGadgets();
//   }

//   loadGadgets(page: number = 0, size: number = this.pageSize) {
//     this.authService.getPaginatedGadgets(page, size).subscribe({
//       next: res => {
//         this.gadgets = res.content;
//         this.filteredGadgets = res.content;
//         this.totalElements = res.totalElements;
//         this.totalPages = res.totalPages;
//         this.currentPage = res.number;
//       },
//       error: err => {
//         console.error('Failed to load gadgets', err);
//         this.toastr.error('Failed to load gadgets', 'Error');
//       }
//     });
//   }

//   filterGadgets() {
//     const text = this.searchText.toLowerCase();
//     this.filteredGadgets = this.gadgets.filter(g =>
//       g.gadgetName.toLowerCase().includes(text) ||
//       g.brandName.toLowerCase().includes(text) ||
//       g.modelName.toLowerCase().includes(text) ||
//       g.specifications.toLowerCase().includes(text) ||
//       g.feedback.toLowerCase().includes(text) ||
//       g.price.toString().includes(text)
//     );
//   }

//   onPageChange(newPage: number) {
//     if (newPage >= 0 && newPage < this.totalPages) {
//       this.loadGadgets(newPage, this.pageSize);
//     }
//   }
// }

//   // gadgets: Gadget[] = [];
//   // filteredGadgets: Gadget[] = [];
//   // searchText: string = '';

//   // // Cart
//   // cart: Gadget[] = [];
//   // cartOpen = false;

//   // // Pagination
//   // pageSize = 4;
//   // currentPage = 0;
//   // totalPages = 0;

//   // constructor() {
//   //   // Static sample gadgets
//   //   this.gadgets = [
//   //     { id: 1, name: 'iPhone 14', brand: 'Apple', model: 'A2483', price: 99900, image: 'assets/iphone14.jpg' },
//   //     { id: 2, name: 'Galaxy S23', brand: 'Samsung', model: 'SM-S911B', price: 85000, image: 'assets/galaxys23.jpg' },
//   //     { id: 3, name: 'Pixel 8', brand: 'Google', model: 'G8', price: 75000, image: 'assets/pixel8.jpg' },
//   //     { id: 4, name: 'MacBook Air', brand: 'Apple', model: 'M2', price: 120000, image: 'assets/macbookair.jpg' },
//   //     { id: 5, name: 'Dell XPS 13', brand: 'Dell', model: '9310', price: 110000, image: 'assets/dellxps13.jpg' },
//   //     { id: 6, name: 'Sony WH-1000XM5', brand: 'Sony', model: 'XM5', price: 25000, image: 'assets/sonyheadphones.jpg' }
//   //   ];

//   //   this.filteredGadgets = [...this.gadgets];
//   //   this.totalPages = Math.ceil(this.filteredGadgets.length / this.pageSize);
//   // }

//   // filterGadgets() {
//   //   const text = this.searchText.toLowerCase();
//   //   this.filteredGadgets = this.gadgets.filter(g =>
//   //     g.name.toLowerCase().includes(text) ||
//   //     g.brand.toLowerCase().includes(text) ||
//   //     g.model.toLowerCase().includes(text)
//   //   );
//   //   this.totalPages = Math.ceil(this.filteredGadgets.length / this.pageSize);
//   //   this.currentPage = 0;
//   // }

//   // get paginatedGadgets(): Gadget[] {
//   //   const start = this.currentPage * this.pageSize;
//   //   return this.filteredGadgets.slice(start, start + this.pageSize);
//   // }

//   // addToCart(gadget: Gadget) {
//   //   this.cart.push(gadget);
//   //   alert(`${gadget.name} added to cart!`);
//   // }

//   // toggleCart() {
//   //   this.cartOpen = !this.cartOpen;
//   // }

//   // goPrevPage() {
//   //   if (this.currentPage > 0) this.currentPage--;
//   // }

//   // goNextPage() {
//   //   if (this.currentPage < this.totalPages - 1) this.currentPage++;
//   // }





import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './landingpage.html',
  styleUrls: ['./landingpage.css']
})
export class Landingpage {
  gadgets: any[] = [];
  filteredGadgets: any[] = [];
  searchText: string = '';

  // Pagination state
  totalElements: number = 0;
  totalPages: number = 0;
  pageSize: number = 10; // show 8 products per page in grid
  currentPage: number = 0;

  // Cart
  cart: any[] = [];
  cartOpen: boolean = false;
  totalPrice: number = 0;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadGadgets();
  }

  loadGadgets(page: number = 0, size: number = this.pageSize) {
    this.authService.getPaginatedGadgets(page, size).subscribe({
      next: res => {
        this.gadgets = res.content;
        this.filteredGadgets = res.content;
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

  // ✅ Add to cart
  addToCart(product: any) {
    const existing = this.cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    this.calculateTotal();
    this.toastr.success(`${product.gadgetName} added to cart!`);
  }

  // ✅ Remove item from cart
  removeFromCart(product: any) {
    this.cart = this.cart.filter(item => item.id !== product.id);
    this.calculateTotal();
  }

  // ✅ Update total price
  calculateTotal() {
    this.totalPrice = this.cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  toggleCart() {
    this.cartOpen = !this.cartOpen;
  }
   logout() {
    // Clear session/localStorage if needed
    //localStorage.clear();
    //sessionStorage.clear();

    // Redirect to login page
    this.router.navigate(['/login']);
  }
}
