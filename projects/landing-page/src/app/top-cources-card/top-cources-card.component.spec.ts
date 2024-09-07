import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCourcesCardComponent } from './top-cources-card.component';

describe('TopCourcesCardComponent', () => {
  let component: TopCourcesCardComponent;
  let fixture: ComponentFixture<TopCourcesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopCourcesCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopCourcesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
