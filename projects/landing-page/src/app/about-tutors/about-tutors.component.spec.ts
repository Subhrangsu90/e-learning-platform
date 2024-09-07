import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTutorsComponent } from './about-tutors.component';

describe('AboutTutorsComponent', () => {
  let component: AboutTutorsComponent;
  let fixture: ComponentFixture<AboutTutorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutTutorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutTutorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
