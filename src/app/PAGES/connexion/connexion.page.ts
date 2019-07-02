import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { PlayerService } from '../../DAL/player.service';
import * as firebase from 'firebase/app';
import { Player } from '../../BO/player';
import { Router } from '@angular/router';
import { TransfertDataPlayerService } from '../../SERVICE/transfert-data-player.service';
import { TransfertDataService } from '../../SERVICE/transfert-data.service';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  pseudo: string;
  password: String;
  player: Player;
  /*
  task: any = setInterval(() => {
    if(this.transfertDataPlayerService.player != null){
      this.router.navigate(["/home"]);
    } 
  }, 1000);*/
  constructor(private TransfertDataService: TransfertDataService,private router: Router,public loadingController: LoadingController,private transfertDataPlayerService: TransfertDataPlayerService) {
    console.log("Constructeur")
    this.loadData();
 //  this.presentLoading(1000);
 
   }

  logForm(){
    console.log("Connexion");
    this.getPlayer();
    this.presentLoading(1000);
 
  }

  async presentLoading(time: number) {

    const loading = await this.loadingController.create({
      message: 'LOADING',
      duration: time
    });

    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  async loadData(){

    firebase.database().ref('Planets/').on('value',resp => {
      this.TransfertDataService.Planets = resp.val();
      console.log("Planets updated : "+ this.TransfertDataService.Planets);
      });
      firebase.database().ref('starships/').on('value',resp => {
        this.TransfertDataService.Starships = resp.val();
        console.log("Starships updated : "+ this.TransfertDataService.Starships);
        });
      firebase.database().ref('Peoples/').on('value',resp => {
          this.TransfertDataService.Planets = resp.val();
          console.log("Peoples updated : "+ this.TransfertDataService.Planets);
      });
  }
  async getPlayer() {
    
    let idPlayer: number = 1;
  console.log("getplayer");
    firebase.database().ref('Players/'+idPlayer).on('value',resp => {
    this.player = resp.val().Player;
    this.transfertDataPlayerService.setLocalPlayer(this.player)  ;
    this.transfertDataPlayerService.player = this.player;
    console.log("player updated : " + JSON.stringify( this.transfertDataPlayerService.player));
    this.router.navigate(["/home"]);
  
    });
  //   return new Promise(resolve => { resolve(this.playerService.pl) });
}
  ngOnInit() {
  }

}
