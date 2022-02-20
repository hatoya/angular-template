import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ModalService } from './modal.service';
import { ModalStore } from './modal.store';

describe('ModalService', () => {
  let modalService: ModalService;
  let modalStore: ModalStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalService, ModalStore],
      imports: [HttpClientTestingModule]
    });
    modalService = TestBed.inject(ModalService);
    modalStore = TestBed.inject(ModalStore);
  });

  it('should be created', () => {
    expect(modalService).toBeDefined();
  });

  describe('open', () => {
    it('should be working', () => {
      // exercise
      modalService.open(null);
      // verify
    });
  });

  describe('close', () => {
    it('should be working', () => {
      // exercise
      modalService.close();
      // verify
    });
  });
});
