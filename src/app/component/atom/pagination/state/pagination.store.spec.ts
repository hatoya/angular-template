import { PaginationStore } from './pagination.store';

describe('PaginationStore', () => {
  let store: PaginationStore;

  beforeEach(() => {
    store = new PaginationStore();
  });

  it('should create an instance', () => {
    expect(store).toBeTruthy();
  });
});
