import { PaginationQuery } from './pagination.query';
import { PaginationStore } from './pagination.store';

describe('PaginationQuery', () => {
  let query: PaginationQuery;

  beforeEach(() => {
    query = new PaginationQuery(new PaginationStore());
  });

  it('should create an instance', () => {
    expect(query).toBeTruthy();
  });
});
