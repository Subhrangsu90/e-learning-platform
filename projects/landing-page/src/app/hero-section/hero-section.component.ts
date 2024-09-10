import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  private router = inject(Router);
  imageBaseUrl: string = environment.imageUrl;
  constructor() {}
  navigateToSignup() {
    this.router.navigate(['/signup']);
  }
}
