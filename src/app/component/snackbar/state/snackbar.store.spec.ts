import { SnackbarStore } from './snackbar.store';

describe('SnackbarStore', () => {
  let store: SnackbarStore;

  beforeEach(() => {
    store = new SnackbarStore();
  });

  it('should create an instance', () => {
    expect(store).toBeTruthy();
  });
});
