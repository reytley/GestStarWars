import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TransfertDataService } from '../SERVICE/transfert-data.service';
import { Starship } from '../BO/starship';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  idStarhip: number;
  starShip : Starship;
  Message: string;
  constructor(private router: Router,private transferDataService : TransfertDataService,public ToastCon: ToastController) {
  
  
  }

  
  favoriteRemove(starship: Starship){
    this.transferDataService.favoriteRemove(starship);
  }

  favoriteAdd(starship: Starship){
    this.transferDataService.favoriteAdd(starship);
  }
  //HOME
  AddStarShip() {
    this.router.navigate(["/new-star-ship"]);
  }

  GestionStarShip(){
    this.router.navigate(["/gestion-bdd"]); 
  }

  DetailsStarShip(StarShipTemp: Starship) {
   
  this.transferDataService.starShipDetail = StarShipTemp;
  this.router.navigate(["/details-star-ship"]);
  }
  async getToast(){
    const toast = await this.ToastCon.create({
      message:this.Message,
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'Done',
    });
    toast.present();
  }
}
