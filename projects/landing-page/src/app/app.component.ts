import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'landing-page';

  constructor(private router: Router) {}

  navigateToDashboard() {
    this.router.navigate(['/dashboard']); // Navigate to dashboard page
  }
}
