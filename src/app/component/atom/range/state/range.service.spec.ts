import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RangeService } from './range.service';
import { RangeStore } from './range.store';

describe('RangeService', () => {
  let rangeService: RangeService;
  let rangeStore: RangeStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RangeService, RangeStore],
      imports: [HttpClientTestingModule]
    });

    rangeService = TestBed.inject(RangeService);
    rangeStore = TestBed.inject(RangeStore);
  });

  it('should be created', () => {
    expect(rangeService).toBeDefined();
  });
});
