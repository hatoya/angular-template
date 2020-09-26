import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AccountIndexService } from './account-index.service';
import { AccountIndexStore } from './account-index.store';

describe('AccountIndexService', () => {
  let accountIndexService: AccountIndexService;
  let accountIndexStore: AccountIndexStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountIndexService, AccountIndexStore],
      imports: [HttpClientTestingModule]
    });

    accountIndexService = TestBed.get(AccountIndexService);
    accountIndexStore = TestBed.get(AccountIndexStore);
  });

  it('should be created', () => {
    expect(accountIndexService).toBeDefined();
  });
});
