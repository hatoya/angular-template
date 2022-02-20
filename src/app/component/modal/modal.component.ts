import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalQuery } from './state/modal.query';
import { ModalService } from './state/modal.service';
import { ModalStore } from './state/modal.store';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('inner', { read: ViewContainerRef, static: false }) vcr;
  component = null;

  constructor(private service: ModalService, public query: ModalQuery, private store: ModalStore) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.service.vcr = this.vcr;
  }

  ngOnDestroy() {
    this.store.reset();
  }

  close() {
    this.service.close();
  }
}
