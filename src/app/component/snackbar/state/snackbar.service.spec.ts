import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SnackbarService } from './snackbar.service';
import { SnackbarStore } from './snackbar.store';

describe('SnackbarService', () => {
  let snackbarService: SnackbarService;
  let snackbarStore: SnackbarStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnackbarService, SnackbarStore],
      imports: [HttpClientTestingModule]
    });

    snackbarService = TestBed.get(SnackbarService);
    snackbarStore = TestBed.get(SnackbarStore);
  });

  it('should be created', () => {
    expect(snackbarService).toBeDefined();
  });
});
