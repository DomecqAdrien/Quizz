import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'danger', loadChildren: './danger/danger.module#DangerPageModule' },
  { path: 'categories', loadChildren: './categories/categories.module#CategoriesPageModule' },
  { path: 'panneaux', loadChildren: './panneaux/panneaux.module#PanneauxPageModule' },
  { path: 'quizz', loadChildren: './quizz/quizz.module#QuizzPageModule' },
  { path: 'detail', loadChildren: './detail/detail.module#DetailPageModule' },
  { path: 'detailpanneau', loadChildren: './detailpanneau/detailpanneau.module#DetailpanneauPageModule' },
  { path: 'resultat', loadChildren: './resultat/resultat.module#ResultatPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
