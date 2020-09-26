import { SigninStore } from './signin.store';

describe('SigninStore', () => {
  let store: SigninStore;

  beforeEach(() => {
    store = new SigninStore();
  });

  it('should create an instance', () => {
    expect(store).toBeTruthy();
  });
});
