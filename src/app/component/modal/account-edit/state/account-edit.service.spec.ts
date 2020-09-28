import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AccountEditService } from './account-edit.service';
import { AccountEditStore } from './account-edit.store';

describe('AccountEditService', () => {
  let accountEditService: AccountEditService;
  let accountEditStore: AccountEditStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountEditService, AccountEditStore],
      imports: [HttpClientTestingModule]
    });

    accountEditService = TestBed.get(AccountEditService);
    accountEditStore = TestBed.get(AccountEditStore);
  });

  it('should be created', () => {
    expect(accountEditService).toBeDefined();
  });
});
