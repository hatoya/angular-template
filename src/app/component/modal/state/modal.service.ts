import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalStore } from './modal.store';

@Injectable({ providedIn: 'root' })
export class ModalService {
  vcr: ViewContainerRef;
  component = null;
  submit$: Subject<void> = new Subject();

  constructor(private modalStore: ModalStore, private resolver: ComponentFactoryResolver) {}

  open(data) {
    if (!data) {
      return;
    }
    const factory = this.resolver.resolveComponentFactory(data);
    const component = this.vcr.createComponent(factory);
    if (this.component) {
      this.component.destroy();
    }
    this.updateOpened(true);
    this.component = component;
  }

  close() {
    this.resetStore();
    this.component.destroy();
  }

  submit() {
    this.submit$.next();
  }

  // Akita
  updateSize(size: string) {
    this.modalStore.update({ size });
  }

  updateHeading(heading: string) {
    this.modalStore.update({ heading });
  }

  updateOpened(opened: boolean) {
    this.modalStore.update({ opened });
  }

  updateLoading(loading: boolean) {
    this.modalStore.update({ loading });
  }

  updateSending(sending: boolean) {
    this.modalStore.update({ sending });
  }

  resetStore() {
    this.modalStore.reset();
  }
}
