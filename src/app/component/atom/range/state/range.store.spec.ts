import { RangeStore } from './range.store';

describe('RangeStore', () => {
  let store: RangeStore;

  beforeEach(() => {
    store = new RangeStore();
  });

  it('should create an instance', () => {
    expect(store).toBeTruthy();
  });
});
