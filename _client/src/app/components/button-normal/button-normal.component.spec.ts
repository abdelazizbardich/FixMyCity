import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNormalComponent } from './button-normal.component';

describe('ButtonNormalComponent', () => {
  let component: ButtonNormalComponent;
  let fixture: ComponentFixture<ButtonNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonNormalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
