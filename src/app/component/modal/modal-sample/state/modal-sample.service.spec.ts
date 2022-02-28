import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ModalSampleService } from './modal-sample.service';
import { ModalSampleStore } from './modal-sample.store';

describe('ModalSampleService', () => {
  let modalSampleService: ModalSampleService;
  let modalSampleStore: ModalSampleStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalSampleService, ModalSampleStore],
      imports: [HttpClientTestingModule]
    });

    modalSampleService = TestBed.inject(ModalSampleService);
    modalSampleStore = TestBed.inject(ModalSampleStore);
  });

  it('should be created', () => {
    expect(modalSampleService).toBeDefined();
  });
});
