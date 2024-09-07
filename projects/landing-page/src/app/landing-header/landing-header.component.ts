import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-header',
  standalone: true,
  imports: [],
  templateUrl: './landing-header.component.html',
  styleUrl: './landing-header.component.scss',
})
export class LandingHeaderComponent {
  private router = inject(Router);

  constructor() {}

  navigateToCourses() {
    this.router.navigate(['/courses']);
  }

  navigateToTutors() {
    this.router.navigate(['/tutors']);
  }

  navigateToCart() {
    this.router.navigate(['/cart']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToSignup() {
    this.router.navigate(['/signup']);
  }
}
