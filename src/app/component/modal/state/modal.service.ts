import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { ModalStore } from './modal.store';

@Injectable({ providedIn: 'root' })
export class ModalService {
  vcr: ViewContainerRef;
  componentRef = null;

  constructor(private store: ModalStore, private resolver: ComponentFactoryResolver) {}

  open(component: any) {
    if (!component) {
      return;
    }
    const factory = this.resolver.resolveComponentFactory(component);
    const componentRef = this.vcr.createComponent(factory);
    this.componentRef?.destroy();
    this.store.update({ opened: true });
    this.componentRef = componentRef;
  }

  close() {
    this.store.reset();
    this.componentRef?.destroy();
  }
}
