import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DatalistService } from './datalist.service';

describe('DatalistService', () => {
  let datalistService: DatalistService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatalistService],
      imports: [HttpClientTestingModule]
    });

    datalistService = TestBed.inject(DatalistService);
  });

  it('should be created', () => {
    expect(datalistService).toBeDefined();
  });
});
