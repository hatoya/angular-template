import { LoginQuery } from './login.query';
import { LoginStore } from './login.store';

describe('LoginQuery', () => {
  let query: LoginQuery;

  beforeEach(() => {
    query = new LoginQuery(new LoginStore());
  });

  it('should create an instance', () => {
    expect(query).toBeTruthy();
  });
});
