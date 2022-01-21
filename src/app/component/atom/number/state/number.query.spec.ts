import { NumberQuery } from './number.query';
import { NumberStore } from './number.store';

describe('NumberQuery', () => {
  let query: NumberQuery;

  beforeEach(() => {
    query = new NumberQuery(new NumberStore());
  });

  it('should create an instance', () => {
    expect(query).toBeTruthy();
  });
});
