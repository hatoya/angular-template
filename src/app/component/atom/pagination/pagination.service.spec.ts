import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PaginationService } from './pagination.service';

describe('PaginationService', () => {
  let paginationService: PaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaginationService],
      imports: [HttpClientTestingModule]
    });

    paginationService = TestBed.inject(PaginationService);
  });

  it('should be created', () => {
    expect(paginationService).toBeDefined();
  });
});
