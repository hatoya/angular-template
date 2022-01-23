import { DatalistStore } from './datalist.store';

describe('DatalistStore', () => {
  let store: DatalistStore;

  beforeEach(() => {
    store = new DatalistStore();
  });

  it('should create an instance', () => {
    expect(store).toBeTruthy();
  });
});
