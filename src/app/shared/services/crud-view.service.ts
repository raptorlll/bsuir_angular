import {Injectable, ComponentFactoryResolver, ViewContainerRef, Component, Type} from '@angular/core';
import {BaseListItem} from '../components/crud/list-item/base-list-item';

@Injectable()
export class CrudViewService {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  loadComponent<T>(viewContainerRef: ViewContainerRef, component: any, data: T): BaseListItem<T> {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    const componentCreated: BaseListItem<T> = <BaseListItem<T>> componentRef.instance;

    componentCreated.item = data;

    return componentCreated;
  }
}
