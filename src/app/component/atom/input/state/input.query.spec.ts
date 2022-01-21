import { InputQuery } from './input.query';
import { InputStore } from './input.store';

describe('InputQuery', () => {
  let query: InputQuery;

  beforeEach(() => {
    query = new InputQuery(new InputStore());
  });

  it('should create an instance', () => {
    expect(query).toBeTruthy();
  });
});
