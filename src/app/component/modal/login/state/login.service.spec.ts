import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import { LoginStore } from './login.store';

describe('LoginService', () => {
  let loginService: LoginService;
  let loginStore: LoginStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService, LoginStore],
      imports: [HttpClientTestingModule]
    });

    loginService = TestBed.get(LoginService);
    loginStore = TestBed.get(LoginStore);
  });

  it('should be created', () => {
    expect(loginService).toBeDefined();
  });
});
