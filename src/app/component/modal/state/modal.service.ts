import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalStore } from './modal.store';

@Injectable({ providedIn: 'root' })
export class ModalService {
  vcr: ViewContainerRef;
  component = null;
  submit$: Subject<void> = new Subject();

  constructor(private store: ModalStore, private resolver: ComponentFactoryResolver) {}

  open(data: any) {
    if (!data) {
      return;
    }
    const factory = this.resolver.resolveComponentFactory(data);
    const component = this.vcr.createComponent(factory);
    if (this.component) {
      this.component.destroy();
    }
    this.store.update({ opened: true });
    this.component = component;
  }

  close() {
    this.store.reset();
    this.component.destroy();
  }
}
