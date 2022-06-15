import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontButtonComponent } from './front-button.component';

describe('FrontButtonComponent', () => {
  let component: FrontButtonComponent;
  let fixture: ComponentFixture<FrontButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
