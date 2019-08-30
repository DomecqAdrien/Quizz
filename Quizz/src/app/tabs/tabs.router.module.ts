import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'categories',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../categories/categories.module').then(m => m.CategoriesPageModule)
          }
        ]
      },
      {
        path: 'panneaux',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../panneaux/panneaux.module').then(m => m.PanneauxPageModule)
          }
        ]
      },
      {
        path: 'quizz',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../quizz/quizz.module').then(m => m.QuizzPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/categories',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/categories',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
