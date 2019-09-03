import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailpanneauPage } from './detailpanneau.page';

const routes: Routes = [
  {
    path: '',
    component: DetailpanneauPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailpanneauPage]
})
export class DetailpanneauPageModule {}
