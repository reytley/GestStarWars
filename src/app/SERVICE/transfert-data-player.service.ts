import { Injectable } from '@angular/core';
import { ApiService } from '../API/api.service';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Player } from '../BO/player';
@Injectable({
  providedIn: 'root'
})
export class TransfertDataPlayerService {
  idUser: number;
  player: Player;
  // SI JOUEUR LOCAL NULL ALORS REGARDER DANS LES STOCKAGE LOCAL 
  // SI STOCKAGE LOCAL CONTIENT JOUEUR ALORS LE RECUP
  constructor(private storage: Storage) {
 
     /*
      storage.get('player').then((PLayerTemp) => {
       

        if(PLayerTemp != null){
          console.log("Local Player Find");
          console.log("player");
          storage.get('player').then((PLayerTemp) => {
            this.player =PLayerTemp;
            storage.set("player",this.player);
          });
        }else{
          console.log("Player Null Login Page");
          //this.player = new Player();
          //storage.set("player",this.player);
    
        }
      });
*/
   }

   setLocalPlayer(Player: Player){
    this.storage.set("player",this.player);
  }
}
