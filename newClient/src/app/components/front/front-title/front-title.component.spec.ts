import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontTitleComponent } from './front-title.component';

describe('FrontTitleComponent', () => {
  let component: FrontTitleComponent;
  let fixture: ComponentFixture<FrontTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
