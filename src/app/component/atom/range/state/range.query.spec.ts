import { RangeQuery } from './range.query';
import { RangeStore } from './range.store';

describe('RangeQuery', () => {
  let query: RangeQuery;

  beforeEach(() => {
    query = new RangeQuery(new RangeStore());
  });

  it('should create an instance', () => {
    expect(query).toBeTruthy();
  });
});
