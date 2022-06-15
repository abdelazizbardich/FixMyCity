import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontContactFormComponent } from './front-contact-form.component';

describe('FrontContactFormComponent', () => {
  let component: FrontContactFormComponent;
  let fixture: ComponentFixture<FrontContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontContactFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
