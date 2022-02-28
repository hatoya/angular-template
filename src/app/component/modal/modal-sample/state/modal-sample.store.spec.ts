import { ModalSampleStore } from './modal-sample.store';

describe('ModalSampleStore', () => {
  let store: ModalSampleStore;

  beforeEach(() => {
    store = new ModalSampleStore();
  });

  it('should create an instance', () => {
    expect(store).toBeTruthy();
  });
});
