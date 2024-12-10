import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewToolHomeComponent } from './review-tool-home.component';

describe('ReviewToolHomeComponent', () => {
  let component: ReviewToolHomeComponent;
  let fixture: ComponentFixture<ReviewToolHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewToolHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewToolHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
