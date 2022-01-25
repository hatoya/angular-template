import { InputRangeStore } from './input-range.store';

describe('InputRangeStore', () => {
  let store: InputRangeStore;

  beforeEach(() => {
    store = new InputRangeStore();
  });

  it('should create an instance', () => {
    expect(store).toBeTruthy();
  });
});
