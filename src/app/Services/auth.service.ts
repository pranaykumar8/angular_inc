// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

// //   private apiUrl = 'http://localhost:8080/api/auth';  // ✅ your backend URL
// //   private apiUrl1= 'http://localhost:8080/api/gadgets';
// //   constructor(private http: HttpClient) {}

// //   signup(userData: any): Observable<any> {
// //     return this.http.post(`${this.apiUrl}/signup`, userData, {  headers: { 'Content-Type': 'application/json' }});

// //   }

// //   login(credentials: any): Observable<any> {
// //     return this.http.post(`${this.apiUrl}/login`, credentials);
// //   }
// //   //  getAll(): Observable<any[]> {
// //   //   return this.http.get<any[]>(this.apiUrl1);
// //   // }

// //   getAll(): Observable<any[]> {
// //   const token = localStorage.getItem('token');
// //   const headers = { Authorization: `Bearer ${token}` };
// //   return this.http.get<any[]>(this.apiUrl1, { headers });
// // }


// //   addGadget(gadget: any): Observable<any> {
// //     const token = localStorage.getItem('token');
// //     const headers = new HttpHeaders({
// //       Authorization: `Bearer ${token}`
// //     });
// //     return this.http.post<any>(this.apiUrl1, gadget, { headers });
// //   }

// //   deleteGadget(id: number): Observable<void> {
// //     const token = localStorage.getItem('token');
// //     const headers = new HttpHeaders({
// //       Authorization: `Bearer ${token}`
// //     });
// //     return this.http.delete<void>(`${this.apiUrl1}/${id}`, { headers });
// //   }

// private apiUrl = 'http://localhost:8080/api/auth';
//   private apiUrl1 = 'http://localhost:8080/api/gadgets';

//   constructor(private http: HttpClient) {}

//   private getAuthHeaders() {
//     const token = localStorage.getItem('token');
//     return { headers: new HttpHeaders({ Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }) };
//   }

//   signup(userData: any): Observable<any> {
//     return this.http.post(`${this.apiUrl}/signup`, userData, { headers: { 'Content-Type': 'application/json' } });
//   }

//   login(credentials: any): Observable<any> {
//     return this.http.post(`${this.apiUrl}/login`, credentials, { headers: { 'Content-Type': 'application/json' } });
//   }



//   getAll(): Observable<any[]> {
//     return this.http.get<any[]>(this.apiUrl1, this.getAuthHeaders());
//   }

//   addGadget(gadget: any): Observable<any> {
//     return this.http.post<any>(this.apiUrl1, gadget, this.getAuthHeaders());
//   }

//   deleteGadget(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl1}/${id}`, this.getAuthHeaders());
//   }
// }


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Gadget {
  id?: number;
  gadgetName: string;
  brandName: string;
  modelName: string;
  specifications?: string;
  price?: number;
  feedback?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';
  private apiUrl1 = 'http://localhost:8080/api/gadgets';

  constructor(private http: HttpClient) { }

  // private getAuthHeaders() {
  //   const token = localStorage.getItem('token');
  //   return { headers: new HttpHeaders({ Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }) };
  // }

  // 🔑 Attach token
  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      })
    };
  }

  signup(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, userData, { headers: { 'Content-Type': 'application/json' } });
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials, { headers: { 'Content-Type': 'application/json' } });
  }

  // Get all gadgets
  getAll(): Observable<Gadget[]> {
    return this.http.get<Gadget[]>(this.apiUrl1, this.getAuthHeaders());
  }

  // getPaginatedGadgets(page: number, size: number): Observable<any> {
  //   return this.http.get<any>(`http://localhost:8080/gadgets/page?page=${page}&size=${size}`);
  // }



  getPaginatedGadgets(page: number, size: number): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl1}/page?page=${page}&size=${size}`,
      this.getAuthHeaders()
    );
  }


  // Add gadget
  addGadget(gadget: Gadget): Observable<Gadget> {
    return this.http.post<Gadget>(this.apiUrl1, gadget, this.getAuthHeaders());
  }

  // Delete gadget
  deleteGadget(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl1}/${id}`, this.getAuthHeaders());
  }

  // ✅ Get gadget by ID
  getGadgetById(id: number): Observable<Gadget> {
    return this.http.get<Gadget>(`${this.apiUrl1}/${id}`, this.getAuthHeaders());
  }

  // ✅ Update gadget
  updateGadget(id: number, gadget: Gadget): Observable<Gadget> {
    return this.http.put<Gadget>(`${this.apiUrl1}/${id}`, gadget, this.getAuthHeaders());
  }

  // all-users
  // auth.service.ts
  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all-users`, this.getAuthHeaders());
  }

}




