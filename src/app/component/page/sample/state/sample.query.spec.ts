import { SampleQuery } from './sample.query';
import { SampleStore } from './sample.store';

describe('SampleQuery', () => {
  let query: SampleQuery;

  beforeEach(() => {
    query = new SampleQuery(new SampleStore());
  });

  it('should create an instance', () => {
    expect(query).toBeTruthy();
  });
});
