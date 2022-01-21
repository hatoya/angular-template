import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { InputService } from './input.service';
import { InputStore } from './input.store';

describe('InputService', () => {
  let inputService: InputService;
  let inputStore: InputStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InputService, InputStore],
      imports: [HttpClientTestingModule]
    });

    inputService = TestBed.inject(InputService);
    inputStore = TestBed.inject(InputStore);
  });

  it('should be created', () => {
    expect(inputService).toBeDefined();
  });
});
