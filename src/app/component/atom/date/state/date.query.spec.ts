import { DateQuery } from './date.query';
import { DateStore } from './date.store';

describe('DateQuery', () => {
  let query: DateQuery;

  beforeEach(() => {
    query = new DateQuery(new DateStore());
  });

  it('should create an instance', () => {
    expect(query).toBeTruthy();
  });
});
