import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'details-star-ship', loadChildren: './details-star-ship/details-star-ship.module#DetailsStarShipPageModule' },
  { path: 'add-star-ship', loadChildren: './add-star-ship/add-star-ship.module#AddStarShipPageModule' },
  { path: 'new-star-ship', loadChildren: './new-star-ship/new-star-ship.module#NewStarShipPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
