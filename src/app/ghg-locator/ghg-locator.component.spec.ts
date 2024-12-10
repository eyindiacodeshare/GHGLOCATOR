import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhgLocatorComponent } from './ghg-locator.component';

describe('GhgLocatorComponent', () => {
  let component: GhgLocatorComponent;
  let fixture: ComponentFixture<GhgLocatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GhgLocatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GhgLocatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
