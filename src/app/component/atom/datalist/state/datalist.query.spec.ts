import { DatalistQuery } from './datalist.query';
import { DatalistStore } from './datalist.store';

describe('DatalistQuery', () => {
  let query: DatalistQuery;

  beforeEach(() => {
    query = new DatalistQuery(new DatalistStore());
  });

  it('should create an instance', () => {
    expect(query).toBeTruthy();
  });
});
