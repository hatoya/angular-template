import { AccountEditStore } from './account-edit.store';

describe('AccountEditStore', () => {
  let store: AccountEditStore;

  beforeEach(() => {
    store = new AccountEditStore();
  });

  it('should create an instance', () => {
    expect(store).toBeTruthy();
  });
});
