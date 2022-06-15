import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontContactComponent } from './front-contact.component';

describe('FrontContactComponent', () => {
  let component: FrontContactComponent;
  let fixture: ComponentFixture<FrontContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
