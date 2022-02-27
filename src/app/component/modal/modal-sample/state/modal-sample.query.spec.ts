import { ModalSampleQuery } from './modal-sample.query';
import { ModalSampleStore } from './modal-sample.store';

describe('ModalSampleQuery', () => {
  let query: ModalSampleQuery;

  beforeEach(() => {
    query = new ModalSampleQuery(new ModalSampleStore());
  });

  it('should create an instance', () => {
    expect(query).toBeTruthy();
  });
});
