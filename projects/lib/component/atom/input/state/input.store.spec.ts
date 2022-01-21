import { InputStore } from './input.store';

describe('InputStore', () => {
  let store: InputStore;

  beforeEach(() => {
    store = new InputStore();
  });

  it('should create an instance', () => {
    expect(store).toBeTruthy();
  });
});
