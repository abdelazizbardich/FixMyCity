import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontReportsComponent } from './front-reports.component';

describe('FrontReportsComponent', () => {
  let component: FrontReportsComponent;
  let fixture: ComponentFixture<FrontReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
