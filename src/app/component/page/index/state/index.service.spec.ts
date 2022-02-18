import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { IndexService } from './index.service';
import { IndexStore } from './index.store';

describe('IndexService', () => {
  let indexService: IndexService;
  let indexStore: IndexStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndexService, IndexStore],
      imports: [HttpClientTestingModule]
    });

    indexService = TestBed.inject(IndexService);
    indexStore = TestBed.inject(IndexStore);
  });

  it('should be created', () => {
    expect(indexService).toBeDefined();
  });
});
