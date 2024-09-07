import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LandingHeaderComponent } from './landing-header/landing-header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { LandingFooterComponent } from './landing-footer/landing-footer.component';
import { TopCourcesCardComponent } from './top-cources-card/top-cources-card.component';
import { AboutTutorsComponent } from './about-tutors/about-tutors.component';
import { StudentsFeedbackComponent } from './students-feedback/students-feedback.component';
import { SubscribeCardComponent } from './subscribe-card/subscribe-card.component';
import { SiteFeaturesComponent } from './site-features/site-features.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LandingHeaderComponent,
    HeroSectionComponent,
    LandingFooterComponent,
    TopCourcesCardComponent,
    AboutTutorsComponent,
    StudentsFeedbackComponent,
    SubscribeCardComponent,
    SiteFeaturesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'landing-page';

  constructor(private router: Router) {}
  
}
