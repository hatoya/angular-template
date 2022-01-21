import { DateStore } from './date.store';

describe('DateStore', () => {
  let store: DateStore;

  beforeEach(() => {
    store = new DateStore();
  });

  it('should create an instance', () => {
    expect(store).toBeTruthy();
  });
});
