import { NumberStore } from './number.store';

describe('NumberStore', () => {
  let store: NumberStore;

  beforeEach(() => {
    store = new NumberStore();
  });

  it('should create an instance', () => {
    expect(store).toBeTruthy();
  });
});
