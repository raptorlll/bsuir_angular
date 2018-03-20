import {Injectable, ComponentFactoryResolver, ViewContainerRef, Component, Type} from '@angular/core';
import {BaseListItem} from '../components/crud/list-item/base-list-item';

@Injectable()
export class CrudViewService {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  loadComponentView<T>(viewContainerRef: ViewContainerRef, component: BaseListItem<T> | Component, data: T) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    const myPost: BaseListItem<T> = <BaseListItem<T>> componentRef.instance;

    myPost.item = data;
  }
}
