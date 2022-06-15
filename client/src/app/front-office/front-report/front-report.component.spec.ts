import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontReportComponent } from './front-report.component';

describe('FrontReportComponent', () => {
  let component: FrontReportComponent;
  let fixture: ComponentFixture<FrontReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
