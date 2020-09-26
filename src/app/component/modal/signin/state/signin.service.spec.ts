import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SigninService } from './signin.service';
import { SigninStore } from './signin.store';

describe('SigninService', () => {
  let signinService: SigninService;
  let signinStore: SigninStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SigninService, SigninStore],
      imports: [HttpClientTestingModule]
    });

    signinService = TestBed.get(SigninService);
    signinStore = TestBed.get(SigninStore);
  });

  it('should be created', () => {
    expect(signinService).toBeDefined();
  });
});
