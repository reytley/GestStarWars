import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TagGeneralPage } from './tag-general.page';

const routes: Routes = [
  {
    path: 'tag-general',
    component: TagGeneralPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule',
          }
        ]
      },
      {
        path: 'gestionbdd',
        children: [
          {
            path: '',
            loadChildren: '../gestion-bdd/gestion-bdd.module#GestionBddPageModule',
          }
        ]
      },
      {
        path: 'newstarship',
        children: [
          {
            path: '',
            loadChildren: '../new-star-ship/new-star-ship.module#NewStarShipPageModule',
          }
        ]
      },
      {
        path: 'details-star-ship',
        children: [
          {
            path: '',
            loadChildren: '../details-star-ship/details-star-ship.module#DetailsStarShipPageModule',
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tag-general/newstarship',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TagGeneralRoutingModule { }
