import { Component } from '@angular/core';
import { CourceCardComponent } from '../../../../shell/src/app/components/cource-card/cource-card.component';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-top-cources-card',
  standalone: true,
  imports: [CourceCardComponent, CommonModule],
  templateUrl: './top-cources-card.component.html',
  styleUrl: './top-cources-card.component.scss',
})
export class TopCourcesCardComponent {
  imageBaseUrl: string = environment.imageUrl;

  courses = [
    {
      title: 'Introduction to Web Development',
      description:
        'Learn the basics of web development, HTML, CSS, and JavaScript in this beginner-friendly course.',
      image: `${this.imageBaseUrl}/assets/images/coming-soon.jpg`,
    },
    {
      title: 'Advanced JavaScript',
      description:
        'Master the intricacies of JavaScript and modern ES6+ techniques in this advanced course.',
      image: `${this.imageBaseUrl}/assets/images/coming-soon.jpg`,
    },
    {
      title: 'Frontend Frameworks',
      description:
        'Dive deep into Angular, React, and Vue.js, and learn to build complex, dynamic web applications.',
      image: `${this.imageBaseUrl}/assets/images/coming-soon.jpg`,
    },
    {
      title: 'Backend Development',
      description:
        'Become proficient in Node.js, Express, and MongoDB, and learn how to build scalable web backends.',
      image: `${this.imageBaseUrl}/assets/images/coming-soon.jpg`,
    },
    {
      title: 'Full-Stack Web Development',
      description:
        'Combine frontend and backend skills to become a full-stack developer and create powerful applications.',
      image: `${this.imageBaseUrl}/assets/images/coming-soon.jpg`,
    },
    {
      title: 'UI/UX Design Basics',
      description:
        'Explore the fundamentals of UI/UX design and create user-friendly interfaces and experiences.',
      image: `${this.imageBaseUrl}/assets/images/coming-soon.jpg`,
    },
  ];
}
