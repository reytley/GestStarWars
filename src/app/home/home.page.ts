import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransfertDataService } from '../SERVICE/transfert-data.service';
import { TransfertDataPlayerService } from '../SERVICE/transfert-data-player.service';
import { Starship } from '../BO/starship';
import { ToastController } from '@ionic/angular';
import { Player } from '../BO/player';
import { PlayerService } from '../DAL/player.service';
import * as firebase from 'firebase/app';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
//https://ionicframework.com/blog/navigating-lifecycle-events/
export class HomePage implements OnInit {
  player: Player = new Player();
  idStarhip: number;
  starShip : Starship;
  Message: string;
  PlayerLife: number;
  hungryLife: number;
 
  fatigue: number=1;
  constructor(public loadingController: LoadingController,private playerService: PlayerService, private transfertDataPlayerService: TransfertDataPlayerService, private router: Router,private transferDataService : TransfertDataService,public ToastCon: ToastController) {
    this.Message = "Bienvenue Chasseur";
  }
  
async ngOnInit() {
  this.getToast();
  this.getPlayer();
  this.presentLoading();
}
ionViewDidLeave(){
    this.playerService.setPlayer(this.player);
}
async presentLoading() {
  const loading = await this.loadingController.create({
    message: 'LOADING',
    duration: 500
  });
  await loading.present();

  const { role, data } = await loading.onDidDismiss();

  console.log('Loading dismissed!');
}
  async getPlayer() {
      let idPlayer: number = 1;
    console.log("getplayer");
   
      firebase.database().ref('Players/'+idPlayer).on('value',resp => {
      this.player = resp.val().Player;
      console.log("player updated : " + JSON.stringify(this.player));
      });
    //   return new Promise(resolve => { resolve(this.playerService.pl) });
  }

  favoriteRemove(starship: Starship){
    this.transferDataService.favoriteRemove(starship);
  }

  favoriteAdd(starship: Starship){
    this.transferDataService.favoriteAdd(starship);
  }


  GestionStarShip(){
    this.router.navigate(["/gestion-bdd"]); 
  }
  buyFood(){
    this.player.money += -1
    this.player.hungryLife += 0.1
  }
  sleep(){
    this.player.money += -1
    this.player.PlayerLife += 0.1
    this.fatigue = 1;
  }
  tapEvent() {

    this.player.money ++;
    console.log(this.fatigue);
    this.player.PlayerLife -= 0.03 * this.fatigue;
    this.fatigue *= 1.04;
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
