import {Routes} from '@angular/router';

export namespace Page {
  export enum Type {VIEW, EDIT, CREATE, HOME}
}


export const crudRoutes = (mainComponent,
                           editComponent,
                           createComponent,
                           viewComponent,
                           resolver): Routes => {
  return [
    {
      path: '',
      component: mainComponent,
      data: {
        type: Page.Type.HOME
      }
    },
    {
      path: 'edit/:id',
      component: editComponent,
      data: {
        type: Page.Type.EDIT
      },
      resolve: {
        item: resolver
      }
    },
    {
      path: 'create',
      component: createComponent,
      data: {
        type: Page.Type.CREATE
      }
    },
    {
      path: ':id',
      component: viewComponent,
      data: {
        type: Page.Type.VIEW
      },
      resolve: {
        item: resolver
      }
    }
  ];
};
