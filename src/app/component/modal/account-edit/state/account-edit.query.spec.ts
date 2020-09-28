import { AccountEditQuery } from './account-edit.query';
import { AccountEditStore } from './account-edit.store';

describe('AccountEditQuery', () => {
  let query: AccountEditQuery;

  beforeEach(() => {
    query = new AccountEditQuery(new AccountEditStore());
  });

  it('should create an instance', () => {
    expect(query).toBeTruthy();
  });
});
