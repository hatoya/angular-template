import { Injectable } from '@angular/core';
import { ModalService } from '../../state/modal.service';
import { ModalSampleComponent } from '../modal-sample.component';
import { ModalSampleStore } from './modal-sample.store';

@Injectable({ providedIn: 'root' })
export class ModalSampleService {
  constructor(private store: ModalSampleStore, private modalService: ModalService) {}

  open() {
    this.modalService.open(ModalSampleComponent);
  }
}
