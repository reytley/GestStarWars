import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tag-general', pathMatch: 'full' },
  { path: '', loadChildren: './tag-general/tag-general.module#TagGeneralPageModule'},
  /*{ path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'details-star-ship', loadChildren: './details-star-ship/details-star-ship.module#DetailsStarShipPageModule' },
  { path: 'add-star-ship', loadChildren: './add-star-ship/add-star-ship.module#AddStarShipPageModule' },
  { path: 'new-star-ship', loadChildren: './new-star-ship/new-star-ship.module#NewStarShipPageModule' },
  { path: 'gestion-bdd', loadChildren: './gestion-bdd/gestion-bdd.module#GestionBddPageModule' },
  { path: 'tag-general', loadChildren: './tag-general/tag-general.module#TagGeneralPageModule' },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
