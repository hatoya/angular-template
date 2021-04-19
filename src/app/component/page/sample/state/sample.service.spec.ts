import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SampleService } from './sample.service';
import { SampleStore } from './sample.store';

describe('SampleService', () => {
  let sampleService: SampleService;
  let sampleStore: SampleStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SampleService, SampleStore],
      imports: [HttpClientTestingModule]
    });

    sampleService = TestBed.get(SampleService);
    sampleStore = TestBed.get(SampleStore);
  });

  it('should be created', () => {
    expect(sampleService).toBeDefined();
  });
});
