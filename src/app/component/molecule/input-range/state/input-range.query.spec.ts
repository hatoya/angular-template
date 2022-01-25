import { InputRangeQuery } from './input-range.query';
import { InputRangeStore } from './input-range.store';

describe('InputRangeQuery', () => {
  let query: InputRangeQuery;

  beforeEach(() => {
    query = new InputRangeQuery(new InputRangeStore());
  });

  it('should create an instance', () => {
    expect(query).toBeTruthy();
  });
});
