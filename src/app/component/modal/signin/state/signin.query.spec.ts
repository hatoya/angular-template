import { SigninQuery } from './signin.query';
import { SigninStore } from './signin.store';

describe('SigninQuery', () => {
  let query: SigninQuery;

  beforeEach(() => {
    query = new SigninQuery(new SigninStore());
  });

  it('should create an instance', () => {
    expect(query).toBeTruthy();
  });
});
