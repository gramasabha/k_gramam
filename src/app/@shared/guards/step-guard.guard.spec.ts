import { TestBed } from '@angular/core/testing';

import { StepGuardGuard } from './step-guard.guard';

describe('StepGuardGuard', () => {
  let guard: StepGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StepGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
