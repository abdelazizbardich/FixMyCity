import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialisationsComponent } from './specialisations.component';

describe('SpecialisationsComponent', () => {
  let component: SpecialisationsComponent;
  let fixture: ComponentFixture<SpecialisationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialisationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialisationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
