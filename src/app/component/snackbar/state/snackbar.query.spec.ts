import { SnackbarQuery } from './snackbar.query';
import { SnackbarStore } from './snackbar.store';

describe('SnackbarQuery', () => {
  let query: SnackbarQuery;

  beforeEach(() => {
    query = new SnackbarQuery(new SnackbarStore());
  });

  it('should create an instance', () => {
    expect(query).toBeTruthy();
  });
});
