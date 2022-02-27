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
    this.setOverflow('hidden');
  }

  close() {
    this.store.reset();
    this.componentRef?.destroy();
    this.setOverflow('visible');
  }

  setOverflow(overflow: string) {
    document.getElementsByTagName('html')[0].style.overflow = overflow;
  }
}
