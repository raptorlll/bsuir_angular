import {Resolve, Routes} from '@angular/router';
import {ViewComponent} from '../crud/view/view.component';
import {EditComponent} from '../crud/edit/edit.component';

export namespace Page {
  export enum Type {VIEW, EDIT, CREATE, HOME}
}


export const crudRoutes = (resolver): Routes => {
  return [
    // {
    //   path: '',
    //   component: ,
    //   data: {
    //     type: Page.Type.HOME
    //   }
    // },
    {
      path: 'edit/:id',
      component: EditComponent,
      data: {
        type: Page.Type.EDIT
      },
      resolve: {
        item: resolver
      }
    },
    {
      path: 'create',
      component: EditComponent,
      data: {
        type: Page.Type.CREATE
      },
      resolve: {
        item: resolver
      }
    },
    {
      path: ':id',
      component: ViewComponent,
      data: {
        type: Page.Type.VIEW
      },
      resolve: {
        item: resolver
      }
    }
  ];
};
