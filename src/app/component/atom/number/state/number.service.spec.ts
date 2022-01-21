import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NumberService } from './number.service';
import { NumberStore } from './number.store';

describe('NumberService', () => {
  let numberService: NumberService;
  let numberStore: NumberStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NumberService, NumberStore],
      imports: [HttpClientTestingModule]
    });

    numberService = TestBed.inject(NumberService);
    numberStore = TestBed.inject(NumberStore);
  });

  it('should be created', () => {
    expect(numberService).toBeDefined();
  });
});
