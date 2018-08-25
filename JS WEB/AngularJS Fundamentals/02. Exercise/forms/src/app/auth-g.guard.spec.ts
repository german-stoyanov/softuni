import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGGuard } from './auth-g.guard';

describe('AuthGGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGGuard]
    });
  });

  it('should ...', inject([AuthGGuard], (guard: AuthGGuard) => {
    expect(guard).toBeTruthy();
  }));
});
