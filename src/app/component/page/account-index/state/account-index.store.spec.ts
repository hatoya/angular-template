import { AccountIndexStore } from './account-index.store';

describe('AccountIndexStore', () => {
  let store: AccountIndexStore;

  beforeEach(() => {
    store = new AccountIndexStore();
  });

  it('should create an instance', () => {
    expect(store).toBeTruthy();
  });
});
