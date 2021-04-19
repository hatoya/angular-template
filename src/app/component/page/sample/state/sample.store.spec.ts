import { SampleStore } from './sample.store';

describe('SampleStore', () => {
  let store: SampleStore;

  beforeEach(() => {
    store = new SampleStore();
  });

  it('should create an instance', () => {
    expect(store).toBeTruthy();
  });
});
