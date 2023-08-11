import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ModalService } from './modal.service';

describe('ModalService', () => {
  let modalService: ModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalService],
      imports: [HttpClientTestingModule]
    });
    modalService = TestBed.inject(ModalService);
  });

  it('should be created', () => {
    expect(modalService).toBeDefined();
  });
});
