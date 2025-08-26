import { Component, signal } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { Login } from './Components/login/login';
import { Signup } from './Components/signup/signup';

@Component({
  selector: 'app-root',
  standalone: true, // ✅ required for standalone Angular
  imports: [RouterOutlet,
      ReactiveFormsModule,  // ✅ for reactive forms
    FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('auth-role-app');
}
