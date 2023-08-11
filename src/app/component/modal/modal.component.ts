import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  providers: [ModalService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('inner', { read: ViewContainerRef, static: false }) viewContainerRef: ViewContainerRef;

  constructor(public service: ModalService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.service.viewContainerRef = this.viewContainerRef;
  }

  ngOnDestroy() {}
}
