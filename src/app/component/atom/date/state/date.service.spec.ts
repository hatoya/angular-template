import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DateService } from './date.service';
import { DateStore } from './date.store';

describe('DateService', () => {
  let dateService: DateService;
  let dateStore: DateStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateService, DateStore],
      imports: [HttpClientTestingModule]
    });

    dateService = TestBed.inject(DateService);
    dateStore = TestBed.inject(DateStore);
  });

  it('should be created', () => {
    expect(dateService).toBeDefined();
  });
});
