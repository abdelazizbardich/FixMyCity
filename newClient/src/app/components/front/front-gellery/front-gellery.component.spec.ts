import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontGelleryComponent } from './front-gellery.component';

describe('FrontGelleryComponent', () => {
  let component: FrontGelleryComponent;
  let fixture: ComponentFixture<FrontGelleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontGelleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontGelleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
