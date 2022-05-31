import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineFormFieldComponent } from './inline-form-field.component';

describe('InlineFormFieldComponent', () => {
  let component: InlineFormFieldComponent;
  let fixture: ComponentFixture<InlineFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineFormFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
