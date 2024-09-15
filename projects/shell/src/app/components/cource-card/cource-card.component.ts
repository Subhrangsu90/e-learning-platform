import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-cource-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cource-card.component.html',
  styleUrl: './cource-card.component.scss',
})
export class CourceCardComponent {
  imageBaseUrl: string = environment.imageUrl;
  @Input() courseTitle: string = '';
  @Input() courseDescription: string = '';
  @Input() courseImage: string = '';
  onEnroll() {
    console.log('Enroll button clicked');
    // Add navigation or enrollment logic here
  }
}
