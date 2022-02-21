import { ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { ModalStore } from './modal.store';

@Injectable({ providedIn: 'root' })
export class ModalService {
  viewContainerRef: ViewContainerRef;
  componentRef: ComponentRef<any> = null;

  constructor(public store: ModalStore, public resolver: ComponentFactoryResolver) {}

  open(component: any) {
    if (!component) {
      return;
    }
    const factory = this.resolver.resolveComponentFactory(component);
    const componentRef = this.viewContainerRef?.createComponent(factory);
    this.componentRef?.destroy();
    this.store.update({ opened: true });
    this.componentRef = componentRef;
  }

  close() {
    this.store.reset();
    this.componentRef?.destroy();
  }
}
