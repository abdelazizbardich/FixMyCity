import { TestBed } from '@angular/core/testing';

import { CanAccessGuard } from './can-access.guard';

describe('CanAccessGuard', () => {
  let guard: CanAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
