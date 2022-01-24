import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DatalistService } from './datalist.service';
import { DatalistStore } from './datalist.store';

describe('DatalistService', () => {
  let datalistService: DatalistService;
  let datalistStore: DatalistStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatalistService, DatalistStore],
      imports: [HttpClientTestingModule]
    });

    datalistService = TestBed.inject(DatalistService);
    datalistStore = TestBed.inject(DatalistStore);
  });

  it('should be created', () => {
    expect(datalistService).toBeDefined();
  });
});
