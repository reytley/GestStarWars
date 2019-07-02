import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

 { path: '', loadChildren: './PAGES/connexion/connexion.module#ConnexionPageModule' },
 
 { path: 'connexion', loadChildren: './PAGES/connexion/connexion.module#ConnexionPageModule' },
  { path: 'home', loadChildren: './PAGES/home/home.module#HomePageModule' },
  { path: 'add-star-ship', loadChildren: './PAGES/add-star-ship/add-star-ship.module#AddStarShipPageModule' },
  { path: 'new-star-ship', loadChildren: './PAGES/new-star-ship/new-star-ship.module#NewStarShipPageModule' },
  { path: 'gestion-bdd', loadChildren: './PAGES/gestion-bdd/gestion-bdd.module#GestionBddPageModule' },
  { path: 'gestion-player', loadChildren: './PAGES/gestion-player/gestion-player.module#GestionPlayerPageModule' },
  { path: 'player-profil', loadChildren: './PAGES/player-profil/player-profil.module#PlayerProfilPageModule' },
 
  { path: 'inscription', loadChildren: './PAGES/inscription/inscription.module#InscriptionPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
