import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { InputRangeService } from './input-range.service';
import { InputRangeStore } from './input-range.store';

describe('InputRangeService', () => {
  let inputRangeService: InputRangeService;
  let inputRangeStore: InputRangeStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InputRangeService, InputRangeStore],
      imports: [HttpClientTestingModule]
    });

    inputRangeService = TestBed.inject(InputRangeService);
    inputRangeStore = TestBed.inject(InputRangeStore);
  });

  it('should be created', () => {
    expect(inputRangeService).toBeDefined();
  });
});
