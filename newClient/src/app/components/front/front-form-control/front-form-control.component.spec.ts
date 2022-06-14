import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontFormControlComponent } from './front-form-control.component';

describe('FrontFormControlComponent', () => {
  let component: FrontFormControlComponent;
  let fixture: ComponentFixture<FrontFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontFormControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
