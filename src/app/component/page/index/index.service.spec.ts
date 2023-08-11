import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { IndexService } from './index.service';

describe('IndexService', () => {
  let indexService: IndexService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndexService],
      imports: [HttpClientTestingModule]
    });

    indexService = TestBed.inject(IndexService);
  });

  it('should be created', () => {
    expect(indexService).toBeDefined();
  });
});
