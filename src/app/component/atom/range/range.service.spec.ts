import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RangeService } from './range.service';

describe('RangeService', () => {
  let rangeService: RangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RangeService],
      imports: [HttpClientTestingModule]
    });

    rangeService = TestBed.inject(RangeService);
  });

  it('should be created', () => {
    expect(rangeService).toBeDefined();
  });
});
