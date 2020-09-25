import { AccountIndexQuery } from './account-index.query';
import { AccountIndexStore } from './account-index.store';

describe('AccountIndexQuery', () => {
  let query: AccountIndexQuery;

  beforeEach(() => {
    query = new AccountIndexQuery(new AccountIndexStore());
  });

  it('should create an instance', () => {
    expect(query).toBeTruthy();
  });
});
