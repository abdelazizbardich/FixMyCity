import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontNewsletterComponent } from './front-newsletter.component';

describe('FrontNewsletterComponent', () => {
  let component: FrontNewsletterComponent;
  let fixture: ComponentFixture<FrontNewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontNewsletterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
