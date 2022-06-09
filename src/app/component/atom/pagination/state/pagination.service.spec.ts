import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PaginationService } from './pagination.service';
import { PaginationStore } from './pagination.store';

describe('PaginationService', () => {
  let paginationService: PaginationService;
  let paginationStore: PaginationStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaginationService, PaginationStore],
      imports: [HttpClientTestingModule]
    });

    paginationService = TestBed.inject(PaginationService);
    paginationStore = TestBed.inject(PaginationStore);
  });

  it('should be created', () => {
    expect(paginationService).toBeDefined();
  });
});
