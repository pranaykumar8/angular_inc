import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-details.html',
  styleUrl: './login-details.css'
})
export class LoginDetails implements OnInit {
  users: any[] = [];
  errorMessage: string = '';
  //router: any;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.authService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        this.errorMessage = err.error || 'Failed to load users';
        console.error('Error loading users:', err);
      }
    });
  }
  goBack() {
    this.router.navigate(['/admin']);
  }
}