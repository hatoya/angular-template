import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { InputService } from './input.service';

describe('InputService', () => {
  let inputService: InputService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InputService],
      imports: [HttpClientTestingModule]
    });

    inputService = TestBed.inject(InputService);
  });

  it('should be created', () => {
    expect(inputService).toBeDefined();
  });
});
