import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransfertDataService } from '../../SERVICE/transfert-data.service';
import { TransfertDataPlayerService } from '../../SERVICE/transfert-data-player.service';
import { Starship } from '../../BO/starship';
import { ToastController } from '@ionic/angular';
import { Player } from '../../BO/player';
import { PlayerService } from '../../DAL/player.service';
import * as firebase from 'firebase/app';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
//https://ionicframework.com/blog/navigating-lifecycle-events/
export class HomePage implements OnInit {

  idStarhip: number;
  starShip : Starship;
  Message: string;
  PlayerLife: number;
  hungryLife: number;
 
 task: any = setInterval(() => {
  this.transfertDataPlayerService.player.DayLife ++;
  //  this.UpdatePlayer();
   
  }, 3000);
  //VARIABLE PROPRE A LA PAGE
  fatigue: number=1;
  combo: number= 1;
  constructor(public loadingController: LoadingController,private playerService: PlayerService, private transfertDataPlayerService: TransfertDataPlayerService, private router: Router,private transferDataService : TransfertDataService,public ToastCon: ToastController) {
   this.Message = "Bienvenue Chasseur";
  if(transfertDataPlayerService.player == null){
    this.router.navigate(["/connexion"]);
  }
  console.log("Player")
  console.log(transfertDataPlayerService.player)
  }
  
async ngOnInit() {

  this.myTimer() ;
  this.getToast();
 // this.getPlayer();

  //window.setInterval(this.life, 3000);

}

  ////////////////////////////EVENT LIER AU CLIQUE/////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  tapEvent() {
    this.myTimer() 
    this.transfertDataPlayerService.player.money += 1 * this.combo;
    this.combo += 0.01;
    this.transfertDataPlayerService.player.PlayerLife -= 0.01 * this.fatigue;
    this.transfertDataPlayerService.player.hungryLife -= 0.013 * this.fatigue;
    this.transfertDataPlayerService.player.PlayerPower -= 0.014 * this.fatigue;
    this.fatigue *= 1.017;
    if(this.transfertDataPlayerService.player.PlayerLife  <= 0)this.transfertDataPlayerService.player.PlayerLife =0;
    if(this.transfertDataPlayerService.player.PlayerPower <= 0)this.transfertDataPlayerService.player.PlayerPower=0;
    if(this.transfertDataPlayerService.player.hungryLife  <= 0)this.transfertDataPlayerService.player.hungryLife =0;
  }
  //LIER AU CRONO
  life(){

  // 
   
   this.transfertDataPlayerService.player.DayLife ++;
//   this.UpdatePlayer();
  }
  
 myTimer() {
  var d = new Date();
  let seconde: number =(d.getHours()*60*60)  + (d.getMinutes()*60)+d.getSeconds();
console.log(seconde);
} 
  getPower(){
    if(this.transfertDataPlayerService.player.PlayerPower  >= 1)this.transfertDataPlayerService.player.PlayerPower =1;
    this.transfertDataPlayerService.player.money += -1
    this.transfertDataPlayerService.player.PlayerPower += 0.25
  }
  buyFood(){
    if(this.transfertDataPlayerService.player.hungryLife  >= 1)this.transfertDataPlayerService.player.hungryLife =1;
    this.transfertDataPlayerService.player.money += -1
    this.transfertDataPlayerService.player.hungryLife += 0.25
  }
  sleep(){
    if(this.transfertDataPlayerService.player.PlayerLife  >= 1)this.transfertDataPlayerService.player.PlayerLife =1;
    this.transfertDataPlayerService.player.money += -1
    this.transfertDataPlayerService.player.PlayerLife += 0.25
    this.fatigue = 1;
  }
  //////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
// SAVE PLAYER QUAND USER QUITTE PAGE 
ionViewDidLeave(){
 // this.transfertDataPlayerService.player = this.transfertDataPlayerService.player;
    this.UpdatePlayer();
   
}
UpdatePlayer(){
  this.playerService.setPlayer(this.transfertDataPlayerService.player);
 // this.transfertDataPlayerService.player = this.player;
//  this.transfertDataPlayerService.setLocalPlayer(this.player);
}


  async getPlayer() {
    
      let idPlayer: number = 1;
    console.log("getplayer");
   
      firebase.database().ref('Players/'+idPlayer).on('value',resp => {
      this.transfertDataPlayerService.player = resp.val().Player;
      console.log("player updated : " + JSON.stringify(this.transfertDataPlayerService.player));

    
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
