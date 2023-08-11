import { ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef, signal } from '@angular/core';

@Injectable()
export class ModalService {
  opened = signal(false);
  viewContainerRef: ViewContainerRef;
  componentRef: ComponentRef<any> = null;

  constructor(public resolver: ComponentFactoryResolver) {}

  open(component: any) {
    if (!component) {
      return;
    }
    const factory = this.resolver.resolveComponentFactory(component);
    const componentRef = this.viewContainerRef?.createComponent(factory);
    this.componentRef?.destroy();
    this.opened.set(true);
    this.componentRef = componentRef;
    this.setOverflow('hidden');
  }

  close() {
    this.opened.set(false);
    this.componentRef?.destroy();
    this.setOverflow('visible');
  }

  setOverflow(overflow: string) {
    document.getElementsByTagName('html')[0].style.overflow = overflow;
  }
}
